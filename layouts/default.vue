<template>
  <div class="default-layout">
    <div class="default-layout__container">
      <Toolbar />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Toolbar from '~/components/Toolbar.vue'
export default {
  components: {
    Toolbar
  },
  created () {
    const artistDataPayload = [
      {
        storageName: 'artist-list',
        collectionName: 'artist',
        mutationName: 'setArtistList'
      },
      {
        storageName: 'works-list',
        collectionName: 'works',
        mutationName: 'setWorksList'
      },
      {
        storageName: 'artist-work-list',
        collectionName: 'artistWork',
        mutationName: 'setArtistWorkList'
      }
    ]

    artistDataPayload.forEach(payload => this.$store.dispatch('fetchInitialArtistData', payload))
  }
}
</script>

<style lang="scss">
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
body {
  font-family: 'Noto Serif KR', serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background-color: #1c1919;
}
.default-layout {
  width: 100%;
  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
  }
}
.nav__link {
  margin-left: 20px;
}
</style>
