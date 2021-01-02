<template>
  <div
    class="default-layout"
  >
    <Toolbar />
    <Nuxt />
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue'
// import Footer from '@/components/Footer.vue'

export default {
  components: {
    Toolbar
    // Footer
  },
  created () {
    // const artistDataPayload = [
    //   {
    //     storageName: 'artist-list',
    //     collectionName: 'artist',
    //     mutationName: 'setArtistList'
    //   },
    //   {
    //     storageName: 'works-list',
    //     collectionName: 'works',
    //     mutationName: 'setWorksList'
    //   },
    //   {
    //     storageName: 'artist-work-list',
    //     collectionName: 'artistWork',
    //     mutationName: 'setArtistWorkList'
    //   },
    //   {
    //     storageName: 'work-detail-list',
    //     collectionName: 'workDetail',
    //     mutationName: 'setWorkDetailList'
    //   }
    // ]

    // artistDataPayload.forEach(payload => this.$store.dispatch('fetchInitialArtistData', payload))
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
  background: rgba(0, 0, 0);
  position: relative;
}

.arrow {
  cursor: pointer;
  opacity: 0;
  width: 24px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

// Animation
@keyframes arrow-movement-not-hover {
  to {
    opacity: 1;
  }
  from {
    opacity: 0;
  }
}

@keyframes arrow-movement {
  0% {
    opacity: 0;
    top: 45%;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
