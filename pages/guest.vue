<template>
  <div class="guest">
    <div class="guest__left">
      <div class="sticky">
        <h1 class="guest__left__title">
          마음을 담은<br>
          메시지를 남겨주세요.
        </h1>
        <div class="guest__left__form">
          <div
            class="guest__left__form__select guest__form__element"
          >
            <div class="selected" @click="toggleAuthorSelectOptions()">
              <span>
                {{ selectedArtistName(selectedNewPostArtistId, true) }}
              </span>
              <img src="../assets/icon/arrow-down.svg" alt="arrow-down">
            </div>
            <div v-if="isAuthorSelectOptionsOpened" class="guest__left__form__select__options">
              <ul>
                <li
                  v-for="artist in filteredArtistListForNewPost"
                  :key="artist.id"
                  :class="{ 'selected-artist--new': selectedNewPostArtistId === artist.id}"
                  @click="setNewPostArtist(artist.id)"
                >
                  {{ artist.name }}
                </li>
              </ul>
            </div>
          </div>
          <textarea
            v-model="postContent"
            class="guest__left__form__content guest__form__element"
            placeholder="축하, 격려, 덕담. 그 어떤 말이라도 좋아요."
          />
          <input
            v-model="authorName"
            class="guest__left__form__author guest__form__element"
            type="text"
            placeholder="남기는 이"
          >
          <div class="guest__left__form__bottom">
            <input
              v-model="postPassword"
              type="password"
              placeholder="비밀번호"
            >
            <div :class="{ 'completed': isFormComplete }" @click="onSubmitPost()">
              남기기
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="guest__right">
      <div class="guest__right__header">
        <div class="guest__right__header__receiver">
          <div class="guest__right__header__receiver__select">
            <div class="selected" @click="toggleReceiverSelectOptions()">
              <span class="selected__name">
                {{ selectedArtistName(selectedPostArtistId, false) }}
              </span>
              <img src="../assets/icon/arrow-down.svg" alt="arrow-down">
            </div>
            <div v-if="isReceiverSelectOptionsOpened" class="options">
              <ul>
                <li
                  v-for="artist in filteredArtistListForReceivedPost"
                  :key="artist.id"
                  :class="{ 'selected-artist--received': selectedPostArtistId === artist.id}"
                  @click="setSelectedPostArtist(artist.id)"
                >
                  {{ artist.name }}
                </li>
              </ul>
            </div>
          </div>
          <span class="guest__right__header__receiver__text">
            에게 도착한 메시지
          </span>
        </div>
        <span class="guest__right__header__count">
          {{ postList.length }}개
        </span>
      </div>
      <div class="guest__right__list">
        <transition-group name="list" tag="div">
          <div
            v-for="post in postList"
            :key="post.postId"
            class="guest__right__list__item"
          >
            <p class="guest__right__list__item__header">
              {{ post.artistName }}에게
            </p>
            <p class="guest__right__list__item__content">
              {{ post.postContent }}
            </p>
            <div class="guest__right__list__item__bottom">
              <span class="guest__right__list__item__bottom__author">
                - {{ post.authorName }}
              </span>
              <img src="../assets/icon/delete-icon.svg" alt="delete-icon" @click="openDeleteModal(post.postId)">
            </div>
          </div>
        </transition-group>
      </div>
    </div>
    <ModalConfirm
      title="공란을 모두 작성해주세요."
      subtitle="방명록을 남기기 위해 필요한 정보 입니다"
    />
    <GuestDeleteModal />
  </div>
</template>

<script>
// ArtistId - 100 === '모두에게'
export default {
  data () {
    return {
      isAuthorSelectOptionsOpened: false,
      isReceiverSelectOptionsOpened: false,
      authorName: '',
      postPassword: '',
      postContent: '',
      selectedNewPostArtistId: 100,
      selectedPostArtistId: 100
    }
  },
  computed: {
    artistList () {
      console.log(this.$store.getters.getPostReceiverList)
      return this.$store.getters.getPostReceiverList
    },
    filteredArtistListForNewPost () {
      const selected = this.artistList.find(artist => artist.id === this.selectedNewPostArtistId)
      const filteredList = this.artistList.filter(artist => artist.id !== this.selectedNewPostArtistId)
      return [
        selected,
        ...filteredList
      ]
    },
    filteredArtistListForReceivedPost () {
      const selected = this.artistList.find(artist => artist.id === this.selectedPostArtistId)
      const filteredList = this.artistList.filter(artist => artist.id !== this.selectedPostArtistId)
      return [
        selected,
        ...filteredList
      ]
    },
    postList () {
      return this.$store.getters.getPostList(this.selectedPostArtistId)
    },
    isFormComplete () {
      return this.authorName && this.postPassword && this.postContent
    }
  },
  created () {
    this.$store.dispatch('fetchGuestPostData')
  },
  methods: {
    async onSubmitPost () {
      if (this.isFormComplete) {
        const { authorName, postPassword, postContent, selectedNewPostArtistId } = this
        await this.$store.dispatch('putNewGuestPost', {
          authorName,
          postContent,
          postPassword,
          artistId: selectedNewPostArtistId,
          artistName: this.selectedArtistName(selectedNewPostArtistId, false),
          createdTime: Date.now()
        })
        this.resetForm()
      } else {
        console.log('Form Not Completed')
        this.$store.commit('setModalConfirmOpen', true)
      }
    },
    toggleAuthorSelectOptions () {
      this.isAuthorSelectOptionsOpened = !this.isAuthorSelectOptionsOpened
    },
    toggleReceiverSelectOptions () {
      this.isReceiverSelectOptionsOpened = !this.isReceiverSelectOptionsOpened
    },
    setSelectedPostArtist (id) {
      this.selectedPostArtistId = id
      this.isReceiverSelectOptionsOpened = false
    },
    setNewPostArtist (id) {
      this.selectedNewPostArtistId = id
      this.isAuthorSelectOptionsOpened = false
    },
    selectedArtistName (selectedId, isForm) {
      const selected = this.artistList
        .find(artist => artist.id === selectedId)

      if (!selected) {
        return ''
      }

      if (selected.name === '모두에게' && !isForm) {
        return selected.name.slice(0, 2)
      } else {
        return selected.name
      }
    },
    resetForm () {
      this.authorName = ''
      this.postPassword = ''
      this.postContent = ''
    },
    openDeleteModal (postId) {
      this.$store.commit('setSelectedPostId', postId)
      this.$store.commit('setGuestDeleteModalOpen', true)
    }
  }
}
</script>

<style lang="scss">
  .guest {
    textarea:focus, input:focus {
      outline: none;
    }
    width: 100%;
    padding-top: 166px;
    display: grid;
    grid-template-columns: 480px auto;
    column-gap: 80px;
    &__left {
      .sticky {
        position: sticky;
        top: 166px;
      }
      textarea, input {
        border: none;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: -0.5px;
        color: #ffffff;
      }
      textarea {
        height: 208px;
        resize: none;
      }
      &__title {
        font-family: 'Noto Serif KR', sans-serif;
        font-size: 40px;
        font-weight: 500;
        line-height: 1.4;
        letter-spacing: -0.5px;
        color: #ffffff;
        @media only screen and (max-height: 860px) {
          & {
            position: inherit;
          }
        }
      }
      &__form {
        margin-top: 40px;
        @media only screen and (max-height: 860px) {
          & {
            position: inherit;
          }
        }
        &__select {
          width: 100%;
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .selected {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            & > span {
              font-family: 'Noto Sans KR', sans-serif;
              font-size: 16px;
              font-weight: 500;
              line-height: 1.5;
              letter-spacing: -0.5px;
              color: #ffda88
            }
          }
          &__options {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            border-radius: 6px;
            background-color: #1a1a1a;
            max-height: 497px;
            overflow-y: scroll;
              &::-webkit-scrollbar {
                display: block;
                width: 10px !important;
                border: 4px solid rgba(0, 0, 0, 0);
              }
              &::-webkit-scrollbar-track {
                /* background-color: #e6e5e5; */
                border-radius: 6px;
                box-shadow: inset 0 0 10px 10px #e6e5e5;
                border: solid 4px transparent;
              }
              &::-webkit-scrollbar-thumb {
                border-radius: 6px;
                box-shadow: inset 0 0 10px 10px #ffda88;
                border: solid 4px transparent;
              }
            & > ul {
              padding: 0;
              list-style: none;
              & > li {
                padding: 16px;
                font-family: 'Noto Sans KR', sans-serif;
                font-size: 16px;
                font-weight: normal;
                line-height: 1;
                letter-spacing: -0.5px;
                color: #ffffff;
              }
            }
          }
        }
        &__bottom {
          display: flex;
          margin-top: 20px;
          & > input {
            width: 100%;
            padding: 16px;
            border-radius: 6px;
            background-color: #1a1a1a;
          }
          & > div {
            margin-left: 20px;
            width: 150px;
            border-radius: 6px;
            padding: 20px 0;
            background-color: #e6e5e5;
            text-align: center;
            font-family: 'Noto Serif KR', serif;
            font-size: 16px;
            font-weight: 900;
            line-height: 1;
            letter-spacing: -0.5px;
            color: #1c1919;
            transition: 0.5s;
          }
          .completed {
            background-color: #ffda88;
          }
        }
      }
    }
    &__form__element {
      width: 100%;
      padding: 16px;
      border-radius: 6px;
      background-color: #1a1a1a;
      & + & {
        margin-top: 20px;
      }
    }
    &__right {
      &__header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        /* padding-top: 8px; */
        &__receiver {
          padding-top: 8px;
          display: flex;
          &__select {
            position: relative;
            display: flex;
            width: 130px;
            border-bottom: 1px solid #ffffff;
            margin-right: 8px;
            .selected {
              width: 100%;
              padding: 0 8px 12px 8px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              &__name {
                font-family: 'Noto Sans KR', sans-serif;
                font-size: 24px;
                font-weight: 500;
                line-height: 1;
                letter-spacing: -0.5px;
                color: #ffffff;
              }
            }
            .options {
              width: 130px;
              border-radius: 6px;
              background-color: #ffffff;
              position: absolute;
              top: 87%;
              left: 0;
              max-height: 481px;
              overflow-y: scroll;
              &::-webkit-scrollbar {
                display: block;
                width: 10px !important;
                border: 4px solid rgba(0, 0, 0, 0);
              }
              &::-webkit-scrollbar-track {
                /* background-color: #e6e5e5; */
                border-radius: 6px;
                box-shadow: inset 0 0 10px 10px #e6e5e5;
                border: solid 4px transparent;
              }
              &::-webkit-scrollbar-thumb {
                border-radius: 6px;
                box-shadow: inset 0 0 10px 10px #ffda88;
                border: solid 4px transparent;
              }
              & > ul {
                list-style: none;
                padding: 0;
                & > li {
                  padding: 12px 14px;
                  border-radius: 6px;
                  font-family: 'Noto Sans KR', sans-serif;
                  font-size: 16px;
                  font-weight: normal;
                  line-height: 1;
                  letter-spacing: -0.5px;
                  color: #1c1919;
                  /* background-color: #ffda88; */
                }
              }
            }
          }
          &__text {
            font-family: 'Noto Sans KR', sans-serif;
            font-size: 24px;
            font-weight: 500;
            line-height: 1;
            letter-spacing: -0.5px;
            color: #ffffff;
          }
        }
        &__count {
          margin-top: 12px;
          font-family: 'Noto Sans KR', sans-serif;
          font-size: 16px;
          font-weight: normal;
          line-height: 1;
          letter-spacing: -0.5px;
          text-align: right;
          color: #ffffff;
        }
      }
      &__list {
        margin-top: 40px;
        width: 100%;
        &__item {
          transition: all 1s;
          border-radius: 6px;
          background-color: #1a1a1a;
          padding: 24px;
          font-family: 'Noto Sans KR', sans-serif;
          font-size: 16px;
          font-weight: normal;
          line-height: 1;
          letter-spacing: -0.5px;
          color: #ffffff;
          &__header {
            font-weight: 500;
            color: #ffda88;
          }
          &__content {
            margin-top: 12px;
          }
          &__bottom {
            margin-top: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          & + & {
            margin-top: 20px;
          }
        }
      }
    }
    .selected-artist--new {
      color: #ffda88;
    }
    .selected-artist--received {
      background-color: #ffda88;
    }
  }
  .list-enter {
    transform: translateY(30px);
  }
  .list-enter, .list-leave-to {
    opacity: 0;
  }
  .list-leave-active {
    position: absolute;
  }
</style>
