<template>
  <div
    class="default-layout"
  >
    <!-- <v-overlay
      class="default-overlay"
      :value="!hasVisited"
      opacity="1"
      color="#000000"
    >
      <img src="@/assets/icon/pc-icon.svg" alt="pc-icon">
      <p>PC에 최적화된 웹페이지입니다</p>
      <p>
        모바일, 태블릿으로 접근 시 불편함이 있을 수 있습니다.<br>
        원활한 작품 관람을 위해 PC 접속을 권장드립니다.
      </p>
      <button @click="$router.go()">
        상영관 홈으로 이동하기
      </button>
    </v-overlay> -->
    <!-- TEMP MEASURE THAT HAS TO BE DELETED -->
    <!-- FOR PRODUCTION, HAVE TO ENABLE AUTOPLAY! -->
    <v-overlay
      class="default-overlay"
      :value="true"
      opacity="1"
      color="#000000"
    >
      <img src="@/assets/icon/movie-icon.svg" alt="movie-icon">
      <p>상영 준비중입니다.</p>
      <p>
        2021.01.08 오전 9시부터 상영됩니다.
      </p>
      <button @click="openSNSLink()">
        공식 SNS 바로가기
      </button>
    </v-overlay>
    <Toolbar />
    <Nuxt />
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue'

export default {
  components: {
    Toolbar
  },
  data () {
    return {
      hasVisited: false
    }
  },
  created () {
    const hasVisited = +localStorage.getItem('hasVisited') === 1

    if (hasVisited) {
      this.hasVisited = true
      localStorage.setItem('hasVisited', 0)
    } else {
      this.hasVisited = false
      localStorage.setItem('hasVisited', 1)
    }
  },
  methods: {
    openSNSLink () {
      window.open('https://www.instagram.com/hgff_2020/')
    }
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

.default-overlay {
  text-align: center;
  img {
    margin-bottom: 32px;
    width: 54px;
    height: 48px;
  }
  p {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.57;
    letter-spacing: -0.5px;
    text-align: center;
    color: #ffffff;
  }
  p:first-of-type {
    font-size: 22px;
    margin-bottom: 20px;
    color: #ffda88;
  }
  button {
    margin-top: 36px;
    padding: 15px 55px 17px;
    border-radius: 6px;
    background-color: #ffda88;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.5px;
    text-align: center;
    color: #1c1919;
  }
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
