<template>
  <div class="profile">
    <h1 class="profile__title">
      PROFILE<br>
      _
    </h1>
    <div class="profile__container">
      <div
        v-for="profile in artistProfile"
        :key="profile.id"
        class="profile__container__artist"
      >
        <v-img
          :src="profile.imgUrl"
          lazy-src="https://raw.githubusercontent.com/yungjurick/hongik-film-online-exhibition-cdn/master/profile/empty.png"
          alt="profile-image"
          max-width="216px"
          max-height="288px"
          min-height="288px"
          class="profile__container__artist__image"
        />
        <div class="profile__container__artist__title">
          <span>{{ profile.name }}</span>
          <div
            v-if="profile.instgramLink !== 'none' || profile.email !== 'none'"
            class="profile__container__artist__title__icons"
          >
            <img
              v-if="profile.email !== 'none'"
              src="@/assets/icon/email-icon.svg"
              alt="email-icon"
              @click="copyArtistEmail(profile.email)"
            >
            <img
              v-if="profile.instagramLink !== 'none'"
              src="@/assets/icon/instagram-icon.svg"
              alt="instagram-icon"
              @click="openInstagram(profile.instagramLink)"
            >
          </div>
        </div>
        <p
          v-for="(work, index) in profile.works"
          :key="index"
          class="profile__container__artist__work"
        >
          {{ `${work.genre} ${work.title} ${work.role}` }}
        </p>
      </div>
    </div>
    <ModalConfirm
      title="이메일 주소가 복사되었습니다."
      subtitle="창작자에게 응원과 제안을 남겨주세요!"
    />
  </div>
</template>

<script>
import ModalConfirm from '@/components/ModalConfirm.vue'

export default {
  components: {
    ModalConfirm
  },
  computed: {
    artistProfile () {
      return this.$store.getters.getArtistProfile
    }
  },
  methods: {
    copyArtistEmail (email) {
      const dummy = document.createElement('textarea')
      document.body.appendChild(dummy)
      dummy.value = email
      dummy.select()
      document.execCommand('copy')
      document.body.removeChild(dummy)
      this.$store.commit('setModalConfirmOpen', true)
    },
    openInstagram (link) {
      window.open(link)
    }
  }
}
</script>

<style lang="scss">
.profile {
  padding-top: 176px;
  margin-bottom: 178px;
  &__title {
    font-family: 'Noto Serif KR', serif;
    font-size: 40px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.5px;
    text-align: center;
    color: #ffda88;
  }
  &__container {
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    column-gap: 30px;
    row-gap: 98px;
    &__artist {
      width: 100%;
      &__image {
        width: 100%;
      }
      &__title {
        margin-top: 20px;
        margin-bottom: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > span {
          font-family: 'Noto Sans KR', sans-serif;
          font-size: 16px;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.5px;
          color: #ffffff;
        }
        &__icons {
          & > img {
            color: white;
            width: 16px;
            height: 16px;
            cursor: pointer;
            &:hover {
              filter: invert(0.5) sepia(1);
              transition: 0.5s;
            }
          }
          img + img {
            margin-left: 3px;
          }
        }
      }
      &__work {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 14px;
        font-weight: 300;
        line-height: 1.57;
        letter-spacing: -0.5px;
        color: #ffffff;
      }
    }
  }
}
</style>
