<template>
  <div class="flashback-detail">
    <div class="flashback-detail__left">
      <img
        :src="profileUrl"
        alt="profile-image"
        class="flashback-detail__left__profile"
      >
      <div class="flashback-detail__left__header">
        <div class="flashback-detail__left__header__title">
          <span class="flashback-detail__left__header__title__name">
            {{ flashbackDetail.director }}
          </span>
          <span class="flashback-detail__left__header__title__label">
            감독님
          </span>
        </div>
        <span class="flashback-detail__left__header__graduation">
          {{ `${flashbackDetail.graduationDate}년 졸업생` }}
        </span>
      </div>

      <div class="flashback-detail__left__container">
        <p class="flashback-detail__left__container__title">
          —<br><br>
          학력
        </p>
        <!-- v-for -->
        <div
          v-for="(item, index) in flashbackDetail.education"
          :key="index"
          class="flashback-detail__left__container__education"
        >
          <p>{{ item.school }}</p>
          <p>{{ `${item.major} 졸업` }}</p>
        </div>
      </div>
      <div class="flashback-detail__left__container">
        <p class="flashback-detail__left__container__title">
          —<br><br>
          작품경력
        </p>
        <!-- v-for & grid-->
        <div
          v-for="key in sortedWorksKeys"
          :key="key"
          class="flashback-detail__left__container__work"
        >
          <span class="flashback-detail__left__container__work__year">
            {{ key }}
          </span>
          <!-- v-for -->
          <div
            class="flashback-detail__left__container__work__detail"
          >
            <p
              v-for="(detail, index) in sortedWorks[key]"
              :key="index"
            >
              {{ `${detail.title} /` }}
              <span>{{ detail.role }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="flashback-detail__left__container">
        <p class="flashback-detail__left__container__title">
          —<br><br>
          수상
        </p>
        <!-- v-for -->
        <div
          v-for="(work, i) in workAwards"
          :key="i"
          class="flashback-detail__left__container__awards"
        >
          <p class="flashback-detail__left__container__awards__title">
            {{ `&lt;${work.title}&gt;` }}
          </p>
          <p
            v-for="(award, j) in work.awards"
            :key="j"
            class="flashback-detail__left__container__awards__detail"
          >
            {{ award }}
          </p>
        </div>
      </div>
    </div>
    <div class="flashback-detail__right">
      <p class="flashback-detail__right__title">
        {{ selectedWork.title }}
        <span>{{ selectedWork.year }}</span>
      </p>
      <div class="flashback-detail__right__video">
        <div
          class="embed-container"
          :class="{
            'embed-container--2': +directorId === 2,
            'embed-container--5': +directorId === 5
          }"
        >
          <iframe
            :src="selectedWork.link"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
            frameborder="0"
          />
        </div>
      </div>
      <p class="flashback-detail__right__video__info">
        2020년 홍익대학교 영상애니메이션 전공 졸업 상영회에서 상영되는 모든 작품의 권리와 책임은 창작자에게 있습니다.<br>
        상영되는 작품을 무단 복제, 배포, 전시할 시 형사처벌 대상이 될 수 있습니다.
      </p>
      <div class="flashback-detail__right__synopsis">
        <p class="flashback-detail__right__synopsis__title">
          시놉시스
        </p>
        <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
        <p class="flashback-detail__right__synopsis__text">{{ selectedWork.synopsis }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import data from 'static/data'
import UTILS from 'static/utils'

export default {
  data () {
    return {
      directorId: 0,
      profileUrl: '',
      flashbackDetail: {},
      rawWorks: [],
      workAwards: [],
      selectedWork: {},
      sortedWorks: {},
      sortedWorksKeys: []
    }
  },
  created () {
    const timeFormat = 'YYYYMMDD HH:mm:ss'
    const now = this.$moment(new Date(), timeFormat)
    // const now = this.$moment(new Date('2021-01-08T20:00:00'), timeFormat)
    const nowDate = now.format('YYYYMMDD')
    const nowTime = now.format('HH:mm:ss')

    const [after, before] = data.flashbackOpenTime[nowDate]
    const isAvailable = nowTime >= after && nowTime <= before

    if (!isAvailable) {
      this.$store.commit('setOverlayStatus', true)
      this.$router.push('/2020')
    }

    this.directorId = this.$route.params.id

    if (this.directorId > 0 && this.directorId < 7) {
      this.flashbackDetail = data.flashback
        .find(item => item.id === +this.directorId)

      this.profileUrl = UTILS.getCdnUrl(`flashback/${this.flashbackDetail.id}`, 'profile.jpg')
      this.rawWorks = this.flashbackDetail.works
      this.workAwards = this.rawWorks
        .filter(work => work.awards.length > 0)
        .map((filteredWork) => {
          return {
            title: filteredWork.title,
            awards: filteredWork.awards
          }
        })

      this.selectedWork = this.rawWorks.find(work => work.selected)

      for (let i = 0; i < this.rawWorks.length; i++) {
        const year = this.rawWorks[i].year
        if (year in this.sortedWorks) {
          this.sortedWorks[year].push(this.rawWorks[i])
        } else {
          this.sortedWorks[year] = [
            this.rawWorks[i]
          ]
        }
      }

      this.sortedWorksKeys = Object.keys(this.sortedWorks)
    } else {
      this.$router.push('/flashback')
    }
  },
  mounted () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
</script>

<style lang="scss">
.flashback-detail {
  padding-top: 176px;
  display: grid;
  width: 100%;
  grid-template-columns: 31% auto;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 1;
  letter-spacing: normal;
  color: #ffffff;
  &__left {
    padding-right: 56px;
    border-right: 1px solid #978f8f;
    &__profile {
      width: 100%;
    }
    &__header {
      margin-top: 30px;
      padding: 0 7px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      &__title {
        &__name {
          font-size: 24px;
          font-weight: 500;
        }
        &__label {
          font-size: 16px;
          font-weight: 300;
          margin-left: 4px;
          letter-spacing: -0.5px;
        }
      }
      &__graduation {
        font-size: 16px;
        font-weight: normal;
      }
    }
    &__container {
      margin-top: 47px;
      &__title {
        font-size: 16px;
        font-weight: bold;
        color: #ffda88;
        margin-bottom: 21px;
      }
      &__education {
        line-height: 1.43;
        letter-spacing: -0.5px;
        p:first-child {
          font-size: 14px;
          font-weight: 500;
        }
        p:last-child {
          margin-top: 2px;
          font-size: 14px;
          font-weight: 300;
        }
        & + & {
          margin-top: 10px;
        }
      }
      &__work {
        display: flex;
        align-items: flex-start;
        &__year {
          width: 60px;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.43;
          letter-spacing: 1px;
        }
        &__detail {
          text-align: left;
          p {
            font-size: 14px;
            font-weight: 500;
            line-height: 1.43;
            letter-spacing: -0.5px;
            & > span {
              margin-left: 8px;
              font-weight: 300;
            }
          }
          p + p {
            margin-top: 10px;
          }
        }
        & + & {
          margin-top: 10px;
        }
      }
      &__awards {
        &__title {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -0.5px;
          margin-bottom: 13px;
        }
        &__detail {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.43;
          letter-spacing: -0.5px;
          & + & {
            margin-top: 6px;
          }
        }
        & + & {
          margin-top: 21px;
        }
      }
    }
  }
  &__right {
    padding-left: 55px;
    &__title {
      margin-bottom: 30px;
      font-size: 32px;
      font-weight: bold;
      span {
        font-size: 14px;
        font-weight: normal;
        vertical-align: bottom;
      }
    }
    &__video {
      .embed-container {
        position: relative;
        padding-bottom: 57.25%;
        height: 0;
        overflow: hidden;
        max-width: 100%;
        &--2 {
          padding-bottom: 76.25%;
        }
        &--5 {
          padding-bottom: 67.25%
        }
      }
      &__info {
        font-size: 12px;
        font-weight: 300;
        line-height: 1.5;
        letter-spacing: -0.6px;
        text-align: right;
        margin-top: 17px;
      }
    }
    &__synopsis {
      margin-top: 57px;
      &__title {
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.5px;
        color: #ffda88;
        padding: 20px 10px;
        border-bottom: 1px solid #ffda88;
      }
      &__text {
        padding: 37px 10px;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.5;
        letter-spacing: -0.5px;
        white-space: break-spaces;
      }
    }
  }
}
</style>
