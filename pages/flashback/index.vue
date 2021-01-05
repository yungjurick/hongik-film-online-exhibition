<template>
  <div class="flashback">
    <p class="flashback__title">
      FLASHBACK<br>
      _
    </p>
    <p class="flashback__subtitle">
      홍익대학교를 졸업하신 자랑스러운 선배님들의 졸업작품입니다
    </p>
    <div class="flashback__container">
      <div
        v-for="item in flashbackData"
        :key="item.id"
        class="flashback__container__item"
      >
        <v-img
          :src="item.profileUrl"
          max-width="320px"
          height="450px"
        />
        <div class="flashback__container__item__title">
          <span class="flashback__container__item__title__name">
            {{ item.director }}
          </span>
          <span class="flashback__container__item__title__label">
            감독님
          </span>
        </div>
        <div
          class="flashback__container__item__overlay"
          :class="{ 'flashback__container__item__overlay--show': item.onHover }"
          @click="onClickDirector(item.id)"
          @mouseenter="item.onHover = true"
          @mouseleave="item.onHover = false"
        />
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
      flashbackData: []
    }
  },
  created () {
    this.flashbackData = data.flashback.map((item) => {
      return {
        ...item,
        onHover: false,
        profileUrl: UTILS.getCdnUrl(`flashback/${item.id}`, 'cover.jpg'),
        selectedWork: item.works.find(work => work.selected)
      }
    })
  },
  methods: {
    onClickDirector (id) {
      this.$router.push(`/flashback/${id}`)
    }
  }
}
</script>

<style lang="scss">
.flashback {
  padding-top: 176px;
  &__title {
    font-family: 'Noto Serif KR', serif;
    font-size: 40px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.5px;
    text-align: center;
    color: #ffda88;
  }
  &__subtitle {
    margin-top: 40px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1;
    letter-spacing: normal;
    color: #ffda88;
    text-align: center;
  }
  &__container {
    margin-top: 100px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 320px);
    justify-content: space-between;
    row-gap: 120px;
    &__item {
      position: relative;
      &__title {
        margin-top: 30px;
        line-height: 1;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: flex-end;
        justify-content: center;
        &__name {
          font-family: 'Noto Sans KR', sans-serif;
          font-size: 24px;
          font-weight: 500;
        }
        &__label {
          font-family: 'Noto Sans KR', sans-serif;
          font-size: 16px;
          font-weight: 300;
          margin-left: 4px;
        }
      }
      &__overlay {
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        height: 450px;
        width: 100%;
        border: solid 1px #ffda88;
        opacity: 0;
        transition: 0.5s;
        &--show {
          opacity: 1;
        }
      }
    }
  }
}
</style>
