<template>
  <div
    class="default-layout"
    :class="{
      'apply-background': useImageBackground,
      'modal-open': isModalOpen
    }"
  >
    <Toolbar />
    <div class="default-layout__container">
      <transition name="fade">
        <Nuxt />
      </transition>
      <Footer v-if="!is2020Page" />
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
  data () {
    return {
      hasVisited: false
    }
  },
  computed: {
    useImageBackground () {
      return this.$route.name !== 'profile'
    },
    isModalOpen () {
      return this.$store.state.isModalConfirmOpen
    },
    is2020Page () {
      return this.$route.name === '2020'
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
      },
      {
        storageName: 'work-detail-list',
        collectionName: 'workDetail',
        mutationName: 'setWorkDetailList'
      }
    ]

    artistDataPayload.forEach(payload => this.$store.dispatch('fetchInitialArtistData', payload))
  }
}
</script>

<style lang="scss">
$ani-speed: 2s;
$ani-delay: 1s;

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
  &__container {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }
}
.apply-background {
  background: linear-gradient(0deg,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('../assets/img/background.jpg');
  background-size: 100%;
  background-repeat: repeat-y;
}

.nav__link {
  margin-left: 20px;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

.arrow-first {
  animation: arrow-movement $ani-speed ease-in-out infinite;
}
.arrow-second {
  animation: arrow-movement $ani-speed $ani-delay ease-in-out infinite;
}

// Animation
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

.arrow-right {
  cursor: pointer;
  opacity: 0;
  height: 14px;
  position: absolute;
  right: -35%;
  top: 50%;
  transform: translateY(-50%);
}

.arrow-right-first {
  animation: arrow-movement-right $ani-speed ease-in-out infinite;
}
.arrow-right-second {
  animation: arrow-movement-right $ani-speed $ani-delay ease-in-out infinite;
}

@keyframes arrow-movement-right-hover {
  to {
    opacity: 1;
  }
  from {
    opacity: 0;
  }
}

// Animation
@keyframes arrow-movement-right {
  0% {
    opacity: 0;
    right: -28%;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
