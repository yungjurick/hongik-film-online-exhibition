<template>
  <div class="categories">
    <div class="categories__container">
      <h1 class="categories__container__title">
        2020<br>
        -
      </h1>
      <div class="categories__container__introduction">
        video
      </div>
    </div>
    <div
      v-if="selectedCategory"
      class="categories__container"
    >
      <div class="categories__container__list">
        <div
          v-for="(item, index) in selectedCategoryWorks"
          :key="index"
          class="categories__container__list__item"
        >
          <img
            src=""
            alt="work-image"
            class="categories__container__list__item__cover"
          >
          <div class="categories__container__list__item__detail">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
    <!-- 하단 고정 카테고리 섹션 -->
    <div class="categories__footer">
      <div class="categories__footer__container">
        <div
          v-for="category in categories"
          :key="category.key"
          class="categories__foooter__container__section"
          :class="{ 'unavailable-section': !category.isAvailable }"
        >
          {{ category.key }}
          <div
            v-if="!category.isAvailable"
            class="categories__foooter__container__section__tooltip"
          >
            <div>asd</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/static/data'

export default {
  data () {
    return {
      selectedCategory: '',
      categories: []
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
        ...categoryData
      }
    })
  },
  methods: {
    moveToSelectedWork (category) {
      // console.log(category)
      this.selectedCategory = category
    }
  }
}
</script>

<style>

</style>
