<template>
  <ModalContainer v-show="isModalConfirmOpen">
    <div class="modal-confirm">
      <h1 class="modal-confirm__title">
        {{ title }}
      </h1>
      <p class="modal-confirm__subtitle">
        {{ subtitle }}
      </p>
      <button
        class="modal-confirm__button"
        @click="toggleModalConfirm(false)"
      >
        확인
      </button>
    </div>
  </ModalContainer>
</template>

<script>
import ModalContainer from '@/components/ModalContainer.vue'
export default {
  components: {
    ModalContainer
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  },
  computed: {
    isModalConfirmOpen () {
      return this.$store.state.isModalConfirmOpen
    }
  },
  methods: {
    toggleModalConfirm (state) {
      this.$store.commit('setModalConfirmOpen', state)
    }
  }
}
</script>

<style lang="scss">
  .modal-confirm {
    width: 442px;
    padding: 40px;
    background-color: #ffffff;
    border-radius: 8px;
    &__title {
      font-family: 'Noto Serif KR', serif;
      font-size: 24px;
      font-weight: 500;
      line-height: 1;
      letter-spacing: -0.5px;
      text-align: center;
      color: #1c1919;
    }
    &__subtitle {
      margin-top: 16px;
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 14px;
      font-weight: 300;
      line-height: 1;
      letter-spacing: -0.5px;
      text-align: center;
      color: #978f8f;
    }
    &__button {
      width: 100%;
      margin-top: 40px;
      padding: 17px 0 15px 0;
      border-radius: 6px;
      background-color: #ffda88;
      font-family: 'Noto Serif KR', serif;
      font-size: 16px;
      font-weight: 600;
      line-height: 1;
      letter-spacing: -0.5px;
      text-align: center;
      color: #1c1919;
      border: none;
    }
  }
</style>
