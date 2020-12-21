<template>
  <div class="profile">
    <h1 class="profile__title">
      PROFILE<br>
      -
    </h1>
    <div class="profile__container">
      <div
        v-for="profile in artistProfile"
        :key="profile.id"
        class="profile__container__artist"
      >
        <img src="" alt="">
        <div class="profile__container__artist__title">
          <span>{{ profile.name }}</span>
        </div>
        <p
          v-for="(work, index) in profile.works"
          :key="index"
        >
          {{ `${work.genre} ${work.title} ${work.role}` }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    artistProfile () {
      const profile = this.$store.getters.getArtistProfile
      console.log(profile)
      return profile.sort((a, b) => {
        return Number(a.id) - Number(b.id) || a.name.localeCompare(b.name)
      })
    }
  }
}
</script>

<style>

</style>
