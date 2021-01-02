<template>
  <div
    ref="categoriesContainer"
    class="categories"
  >
    <div
      ref="topContainer"
      class="categories__container"
    >
      <h1 class="categories__container__title">
        2020<br>
        _
      </h1>
      <div class="categories__container__introduction">
        <div class="embed-container">
          <iframe
            src="https://player.vimeo.com/video/495384491"
            frameborder="0"
          />
        </div>
      </div>
    </div>
    <div
      ref="selectedCategoryContainer"
      class="categories__container"
    >
      <v-row
        v-if="selectedCategoryWorks"
        class="categories__container__list"
      >
        <v-col
          v-for="(item, index) in selectedCategoryWorks"
          :key="index"
          class="categories__container__list__item d-flex child-flex"
          cols="3"
        >
          <v-img
            :src="item.coverImgUrl"
            height="388px"
            max-height="388px"
            alt="work-image"
            class="categories__container__list__item__cover"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                />
              </v-row>
            </template>
          </v-img>
          <div
            class="categories__container__list__item__detail"
            @click="onClickWork(item.workId)"
          >
            <div>
              <span>{{ item.title }}</span>
              <span>-</span>
              <span>{{ `${item.genre} | ${item.duration}` }}</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- 하단 고정 카테고리 섹션 -->
    <div class="categories__footer">
      <div class="categories__footer__container">
        <div
          v-for="category in categories"
          :key="category.key"
          class="categories__footer__container__section"
          :class="{
            'categories__footer__container__section--unavailable': !category.isAvailable
          }"
          @mouseover="category.onHover = true"
          @mouseleave="category.onHover = false"
          @click="moveToSelectedWork(category.key, category.isAvailable)"
        >
          {{ category.key }}
          <transition name="fade">
            <div
              v-if="!category.isAvailable && category.onHover"
              class="categories__footer__container__section__tooltip"
            >
              <div>상영 준비중</div>
            </div>
          </transition>
          <transition name="fade">
            <div
              v-if="(category.isAvailable && category.onHover) || (category.key === selectedCategory)"
              class="categories__footer__container__section--active"
            />
          </transition>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="showMoveBack"
        class="categories__header"
      >
        <div @click="onMoveBack()">
          <img src="@/assets/icon/arrow-up.svg" class="arrow arrow-first">
          <img src="@/assets/icon/arrow-up.svg" class="arrow arrow-second">
        </div>
      </div>
    </transition>
    <v-overlay
      class="categories-overlay"
      :value="overlay"
      opacity="0.9"
      color="#000000"
    >
      <div class="categories-overlay__container">
        <img src="@/assets/icon/movie-icon.svg" alt="movie-icon">
        <h1>지금은 상영 준비 중입니다</h1>
        <p>
          본 섹션은 현재 상영시간이 아닙니다.<br>
          상영시간표를 확인해주세요.
        </p>
        <button
          class="categories-overlay__btn categories-overlay__btn--fill"
          @click="navigateToHome()"
        >
          상영시간표 확인하러 가기
        </button>
        <button
          class="categories-overlay__btn"
          @click="overlay = false"
        >
          돌아가기
        </button>
      </div>
    </v-overlay>
  </div>
</template>

<script>
import data from '@/static/data'

export default {
  data () {
    return {
      selectedCategory: '',
      categories: [],
      showMoveBack: false,
      overlay: false
    }
  },
  computed: {
    selectedCategoryWorks () {
      if (this.selectedCategory === '') {
        return []
      } else {
        return this.$store.getters.getSelectedCategoryWorks(
          data.categories[this.selectedCategory].works,
          this.selectedCategory
        )
      }
    }
  },
  created () {
    this.categories = Object.keys(data.categories).map((category) => {
      // const now = this.$moment(new Date(), timeFormat)
      const timeFormat = 'YYYYMMDD HH:mm:ss'
      const now = this.$moment(new Date('2021-01-08T13:00:00'), timeFormat)
      const nowDate = now.format('YYYYMMDD')
      const nowTime = now.format('HH:mm:ss')
      const categoryData = data.categories[category]

      const [after, before] = categoryData.openTime[nowDate]
      const isAvailable = nowTime >= after && nowTime <= before

      return {
        key: category,
        isAvailable,
        onHover: false,
        ...categoryData
      }
    })
  },
  mounted () {
    console.log(this.$refs)
    // eslint-disable-next-line nuxt/no-globals-in-created
    this.$refs.categoriesContainer.addEventListener('wheel', (e) => {
      if (this.selectedCategory !== '') {
        this.showMoveBack = true
      }
    })
  },
  beforeDestroy () {
    this.$refs.categoriesContainer.removeEventListener('wheel', e => e.preventDefault(), { passive: false })
  },
  methods: {
    moveToSelectedWork (category, isAvailable) {
      if (isAvailable) {
        this.selectedCategory = category
        this.$refs.selectedCategoryContainer.scrollIntoView({ behavior: 'smooth' })
      } else {
        console.log('Not Available!')
        // TEST
        this.selectedCategory = category
        this.$refs.selectedCategoryContainer.scrollIntoView({ behavior: 'smooth' })
        this.overlay = true
      }
    },
    onMoveBack () {
      this.showMoveBack = false
      this.selectedCategory = ''
      this.$refs.topContainer.scrollIntoView({ behavior: 'smooth' })
    },
    onClickWork (workId) {
      this.$router.push(`/2020/${this.selectedCategory}-${workId}`)
    },
    navigateToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
  @font-face {
      font-family: 'S-CoreDream-5';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-5Medium.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  .categories {
    height: 100vh;
    width: 100%;
    overflow: hidden;
    /* padding-bottom: 100px; */
    &__container {
      height: 100vh;
      width: 100%;
      &__title {
        font-family: 'Noto Serif KR', serif;
        font-size: 40px;
        font-weight: 500;
        line-height: 1;
        letter-spacing: -0.5px;
        text-align: center;
        color: #ffda88;
        margin-bottom: 50px;
      }
      &__introduction {
        padding: 0 120px;
        .embed-container {
          position: relative;
          padding-bottom: 43.25%;
          height: 0;
          overflow: hidden;
          max-width: 100%;
          @media only screen and (max-height: 860px) {
            & {
              padding-bottom: 38.25%;
            }
          }
        }
      }
      &:first-child {
        padding-top: 156px;
      }
      &:nth-child(2) {
        padding-top: 126px;
      }
      &__list {
        height: 100%;
        width: 100%;
        padding-bottom: 127px;
        overflow: scroll;
        overscroll-behavior: contain;
        margin: 0 !important;
        &__item {
          position: relative;
          width: 100%;
          & > img {
            max-width: 100%;
            object-fit: cover;
            max-height: 100%;
          }
          &__detail {
            position: absolute;
            padding: 12px;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            & > div {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              opacity: 0;
              border: solid 1px #ffda88;
              background-color: rgba(0, 0, 0, 0.8);
              transition: 0.5s;
              cursor: pointer;
              padding: 0 7.8%;
              &:hover {
                opacity: 1;
              }
              & > span {
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                font-family: 'Noto Sans KR', sans-serif;
                text-align: center;
                color: #ffffff;
                letter-spacing: normal;
              }
              & > span:first-child {
                font-size: 24px;
                font-weight: normal;
                line-height: 1.33;
              }
              & > span:nth-child(2) {
                margin-top: 3.3%;
                font-size: 14px;
                font-weight: 900;
                line-height: 1;
              }
              & > span:nth-child(3) {
                margin-top: 4.4%;
                font-size: 14px;
                font-weight: normal;
                line-height: 1;
              }
            }
          }
        }
      }
    }
    &__footer {
      background-color: rgba(0, 0, 0, 0.9);
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      border-top: 1px solid #978f8f;
      &__container {
        max-width: 592px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &__section {
          cursor: pointer;
          position: relative;
          font-family: 'S-CoreDream-5';
          font-size: 32px;
          font-weight: 500;
          line-height: 1;
          letter-spacing: normal;
          text-align: center;
          color: #ffda88;
          padding-top: 33px;
          padding-bottom: 31px;
          &--unavailable {
            color: #978f8f;
          }
          &--active {
            position: absolute;
            top: 0;
            width: 32px;
            left: 50%;
            transform: translateX(-50%);
            height: 3px;
            box-shadow: 0 3px 10px 0 rgba(255, 218, 136, 0.2),
              0 4px 20px 1px rgba(255, 218, 136, 0.8),
              0 5px 40px 2px #ffda88;
            background-color: #ffda88;
          }
          &__tooltip {
            position: absolute;
            top: -15px;
            width: 90px;
            height: 30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            background-color: #978f8f;
            padding: 8px 12px;
            font-family: 'Noto Sans KR', sans-serif;
            font-size: 13px;
            font-weight: 500;
            line-height: 1;
            letter-spacing: -0.5px;
            text-align: center;
            color: #1c1919;
            transition: all 0.5s;
            &:before {
              content: "";
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: -8px;
              border-top: 9px solid #978f8f;
              border-left: 6px solid transparent;
              border-right: 6px solid transparent;
              height: 0;
              width: 0;
            }
          }
        }
      }
    }
    &__header {
      $ani-speed: 2s;
      $ani-delay: 1s;
      background: black;
      position: fixed;
      z-index: 500;
      top: 0;
      width: 1200px;
      height: 96px;
      display: flex;
      justify-content: center;
      align-items: center;
      & > div {
        height: 100%;
        width: 30px;
        position: relative;
        /* margin: 0 auto; */
        .arrow {
          cursor: pointer;
          opacity: 0;
          width: 24px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .arrow-first {
          animation: arrow-movement $ani-speed ease-in-out infinite;
        }
        .arrow-second {
          animation: arrow-movement $ani-speed $ani-delay ease-in-out infinite;
        }

        // Animation
        @keyframes arrow-movement {
          0% {
            opacity: 0;
            top: 45%;
          }
          70% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      }
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .categories-overlay {
    &__container {
      text-align: center;
      font-family: 'Noto Sans KR', sans-serif;
      & > img {
        height: 48px;
        width: 54px;
      }
      & > h1 {
        margin-top: 40px;
        font-size: 32px;
        font-weight: normal;
        line-height: 1;
        letter-spacing: -0.4px;
        text-align: center;
        color: #ffda88;
      }
      & > p {
        margin-top: 28px;
        margin-bottom: 45px;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.5;
        letter-spacing: -0.5px;
        text-align: center;
        color: #ffffff;
      }
    }
    &__btn {
      font-family: 'Noto Sans KR', sans-serif;
      width: 100%;
      border-radius: 6px;
      border: solid 1px #978f8f;
      font-size: 16px;
      font-weight: 500;
      line-height: 1;
      letter-spacing: -0.5px;
      text-align: center;
      color: #978f8f;
      padding: 17px 0 15px 0;
      & + & {
        margin-top: 12px;
      }
      &--fill {
        color: #1c1919;
        border: none;
        background-color: #ffda88;
      }
    }
  }
</style>
