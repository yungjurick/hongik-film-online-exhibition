<template>
  <div class="work">
    <h1 class="work__title">
      {{ workData.title }}
    </h1>
    <p class="work__subtitle">
      {{ `${workData.genre} | ${workData.duration}` }}
    </p>
    <div class="work__video">
      <div class="embed-container">
        <iframe
          :src="workData.videoUrl"
          frameborder="0"
        />
      </div>
      <p>
        2020년 홍익대학교 영상애니메이션 전공 영상영화트랙 졸업 상영회에서 상영되는 모든 작품의 권리와 책임은 창작자에게 있습니다.<br>
        상영되는 작품을 무단 복제, 배포, 전시할 시 형사처벌 대상이 될 수 있습니다.
      </p>
    </div>
    <div class="work__bottom__tabs">
      <p @click="onClickTab(0)">
        시놉시스
      </p>
      <p @click="onClickTab(1)">
        제작진
      </p>
      <p @click="onClickTab(2)">
        작품 스틸컷
      </p>
    </div>
    <div class="work__bottom__sections">
      <div
        v-if="selectedTab === 0"
        class="work__bottom__section work__bottom__section--one"
      >
        <p>{{ workData.synopsis }}</p>
      </div>
      <div
        v-else-if="selectedTab === 1"
        class="work__bottom__section work__bottom__section--two"
        :class="contributorsClass"
        :style="templateColumnRow"
      >
        <div
          v-for="(contributor, index) in workData.contributors"
          :key="index"
          class="work__bottom__section__contributors"
        >
          <div class="work__bottom__section__contributors__contributor">
            <span class="work__bottom__section__contributors__contributor__role">
              {{ contributor.roleTitle }}
            </span>
            <span class="work__bottom__section__contributors__contributor__name">
              {{ contributor.name }}
            </span>
          </div>
        </div>
      </div>
      <div
        v-else
        class="work__bottom__section work__bottom__section--three"
      >
        <div class="work__bottom__section__main-image">
          <v-img
            :src="workData.images[selectedImage]"
          />
        </div>
        <div
          class="work__bottom__section__image-list"
        >
          <div
            v-for="(url, index) in workData.images"
            :key="index"
            class="work__bottom__section__image-list__image"
            @click="onClickImage(index)"
          >
            <img
              :src="url"
              :class="{'work__bottom__section__image-list__image--selected': selectedImage === index}"
              alt="work-image"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UTILS from '@/static/utils'

export default {
  data () {
    return {
      workId: '',
      workCategory: '',
      workData: {
        title: '',
        genre: '',
        duration: '',
        synopsis: '',
        contributors: [],
        workId: '',
        videoUrl: '',
        images: []
      },
      selectedTab: 0,
      selectedImage: 0
    }
  },
  computed: {
    contributorsClass () {
      return {
        'contributors-class-one': this.workData.contributors.length === 1,
        'contributors-class-two': this.workData.contributors.length === 2 || this.workData.contributors.length === 4,
        'contributors-class-three': this.workData.contributors.length === 3 || this.workData.contributors.length > 4
      }
    },
    templateColumnRow () {
      if (this.workData.contributors.length === 2 || this.workData.contributors.length === 4) {
        const rowNum = Math.ceil(this.workData.contributors.length / 2)
        return {
          'grid-template-rows': `repeat(${rowNum}, 1fr)`
        }
      } else if (this.workData.contributors.length === 3 || this.workData.contributors.length > 4) {
        const rowNum = Math.ceil(this.workData.contributors.length / 3)
        return {
          'grid-template-rows': `repeat(${rowNum}, 1fr)`
        }
      } else {
        return ''
      }
    }
  },
  created () {
    const [category, id] = this.$route.params.id.split('-')
    const workData = this.$store.getters.getWorkData(id)

    console.log(category, id, workData)

    if (category && id && Object.keys(workData).length > 0) {
      console.log('Set Data!')

      this.workCategory = category
      this.wordId = id

      let contributorList = []

      workData.contributors.forEach((obj) => {
        const list = obj.names.map((name) => {
          return {
            roleTitle: obj.roleTitle,
            name
          }
        })
        contributorList = [
          ...contributorList,
          ...list
        ]
      })

      this.workData = {
        ...workData,
        contributors: contributorList,
        images: this.getWorkImages(category, id)
      }
    } else {
      console.log('No Data!')
      this.$router.push('/2020')
    }
  },
  methods: {
    onClickTab (tabIndex) {
      this.selectedTab = tabIndex
    },
    onClickImage (imageIndex) {
      this.selectedImage = imageIndex
    },
    getWorkImages (category, id) {
      const workImageList = []
      for (let i = 1; i < 6; i++) {
        const url = UTILS.getCdnUrl(`works/${category}/${id}`, `${i}.jpg`)
        workImageList.push(url)
      }
      return workImageList
    }
  }
}
</script>

<style lang="scss">
  .work {
    width: 100%;
    padding: 176px 10% 0 10%;
    &__title {
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 32px;
      font-weight: bold;
      line-height: 1;
      letter-spacing: normal;
      color: #ffffff;
      margin-bottom: 20px;
    }
    &__subtitle {
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 14px;
      font-weight: normal;
      line-height: 1;
      letter-spacing: normal;
      color: #ffffff;
      margin-bottom: 40px;
    }
    &__video {
      margin-bottom: 57px;
      & > div {
        width: 100%;
      }
      & > p {
        margin-top: 17px;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 12px;
        font-weight: 300;
        line-height: 1.5;
        letter-spacing: -0.5px;
        text-align: right;
        color: #ffffff;
      }
      .embed-container {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        max-width: 100%;
      }
    }
    &__bottom {
      &__tabs {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        & > p {
          cursor: pointer;
          padding: 20px 0;
          font-family: 'Noto Sans KR', sans-serif;
          font-size: 16px;
          font-weight: normal;
          line-height: 1;
          letter-spacing: -0.5px;
          text-align: center;
          color: #ffffff;
          transition: 0.3s;
          border-bottom: 1px solid #978f8f;
          &:hover {
            color: #ffda88;
            border-bottom: 3px solid #ffda88;
            margin-bottom: -3px;
          }
        }
      }
      &__sections {
        border-bottom: 1px solid #978f8f;
      }
      &__section {
         &--one {
          padding: 36px 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          & > p {
            text-align: left;
            font-family: 'Noto Sans KR', sans-serif;
            font-size: 16px;
            font-weight: 300;
            line-height: 1.5;
            letter-spacing: -0.5px;
            color: #ffffff;
          }
        }
        &--three {
          padding-top: 51px;
          padding-bottom: 40px;
        }
        &__image-list {
          margin-top: 30px;
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0 140px;
          transition: 0.5s;
          &__image {
            cursor: pointer;
            width: 128px;
            & > img {
              max-width: 100%;
              &:hover {
                outline: 1px solid #ffda88;
              }
            }
            &--selected {
              outline: 1px solid #ffda88;
            }
          }
        }
        &__contributors {
          width: 100%;
          &__contributor {
            font-family: NotoSansKR;
            font-size: 16px;
            line-height: 1;
            letter-spacing: normal;
            color: #ffffff;
            & > span {
              display: inline-block;
            }
            &__role {
              width: 120px;
              font-weight: 500;
              margin-right: 14px;
            }
            &__name {
              width: 60px;
              font-weight: 300;
            }
          }
        }
      }
    }
  }
  .contributors-class-one {
    padding: 40px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contributors-class-two {
    padding: 40px 203px;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
    column-gap: 155px;
    row-gap: 20px;
  }
  .contributors-class-three {
    padding: 40px 24px;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 155px;
    row-gap: 20px;
  }
</style>
