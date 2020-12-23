<template>
  <ModalContainer v-show="isGuestDeleteModalOpen">
    <div class="guest-delete-modal">
      <h1 class="guest-delete-modal__title">
        정말 삭제하시겠어요?
      </h1>
      <p class="guest-delete-modal__subtitle">
        작성시 확인 절차를 거친 후 삭제 가능합니다.
      </p>
      <input
        v-model="inputPassword"
        type="password"
        placeholder="작성시 설정한 비밀번호를 입력해주세요"
        class="guest-delete-modal__password"
      >
      <p
        v-if="deleteModalErrorMsg"
        class="guest-delete-modal__error"
      >
        {{ deleteModalErrorMsg }}
      </p>
      <div class="guest-delete-modal__container">
        <button
          class="guest-delete-modal__button"
          @click="toggleDeleteModal(false)"
        >
          취소
        </button>
        <button
          class="guest-delete-modal__button"
          @click="deletePost()"
        >
          삭제하기
        </button>
      </div>
    </div>
  </ModalContainer>
</template>

<script>
import ModalContainer from '@/components/ModalContainer.vue'
export default {
  components: {
    ModalContainer
  },
  data () {
    return {
      inputPassword: ''
    }
  },
  computed: {
    isGuestDeleteModalOpen () {
      return this.$store.state.isGuestDeleteModalOpen
    },
    selectedPostId () {
      return this.$store.state.selectedPostId
    },
    deleteModalErrorMsg () {
      return this.$store.state.deleteModalErrorMsg
    }
  },
  methods: {
    toggleDeleteModal (state) {
      this.inputPassword = ''
      this.$store.commit('setGuestDeleteModalOpen', state)
      this.$store.commit('setDeleteModalErrorMsg', '')
    },
    onDelete (postId) {
      this.$emit('on-delete-post', postId)
    },
    async deletePost () {
      const { inputPassword, selectedPostId: postId } = this
      await this.$store.dispatch('checkPostPassword', {
        inputPassword,
        postId
      })
      this.onDelete(postId)
      this.inputPassword = ''
    }
  }
}
</script>

<style lang="scss">
  .guest-delete-modal {
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
    &__error {
      margin-top: 14px;
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 1;
      letter-spacing: -0.5px;
      text-align: left;
      color: #ffda88;
    }
    &__password {
      margin-top: 40px;
      width: 100%;
      padding: 19px 16px 21px 16px;
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 16px;
      font-weight: 300;
      line-height: 1;
      letter-spacing: -0.5px;
      color: #978f8f;
      border-radius: 6px;
      border: solid 1px #e6e5e5;
      &:focus {
        outline: none;
      }
    }
    &__container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 10px;
      margin-top: 40px;
    }
    &__button {
      width: 100%;
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
    &__button:first-child {
      background-color: #e6e5e5;
      color: #978f8f
    }
  }
</style>
