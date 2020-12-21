<template>
  <div class="default-layout" :class="{ 'apply-background': useImageBackground }">
    <div class="default-layout__container">
      <Toolbar />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Toolbar,
    Footer
  },
  computed: {
    useImageBackground () {
      return this.$route.name !== 'profile'
    }
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

*::-webkit-scrollbar {
  display: none;
}

button {
  cursor: pointer;
  &:focus {
  outline: none;
  box-shadow: none;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

body {
  font-family: 'Noto Serif KR', serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
.default-layout {
  width: 100%;
  min-height: 100vh;
  background: rgba(28, 25, 25);
  &__container {
    max-width: 1200px;
    margin: 0 auto;
  }
}
.apply-background {
  background: linear-gradient(0deg,rgba(28, 25, 25, 0.8), rgba(28, 25, 25, 0.8)), url('../assets/img/background.jpg');
  background-size: 100%;
  background-repeat: repeat-y;
}

.nav__link {
  margin-left: 20px;
}
</style>
