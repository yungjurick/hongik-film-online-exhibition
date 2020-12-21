<template>
  <header class="toolbar">
    <div class="toolbar__logo" @click="navigateToHome()">
      <img src="@/assets/img/hgff_logo.png" alt="logo">
      <p>
        2020 HONGIK UNIV.<br>
        GRADUATION FILM FESTIVAL
      </p>
    </div>
    <div class="toolbar__nav">
      <NuxtLink class="toolbar__nav__link" to="/flashback/" active-class="toolbar__nav__link--active">
        FLASHBACK
      </NuxtLink>
      <NuxtLink class="toolbar__nav__link" to="/2020/" active-class="toolbar__nav__link--active">
        2020
      </NuxtLink>
      <NuxtLink class="toolbar__nav__link" to="/profile/" active-class="toolbar__nav__link--active">
        PROFILE
      </NuxtLink>
      <NuxtLink class="toolbar__nav__link" to="/guest/" active-class="toolbar__nav__link--active">
        GUEST
      </NuxtLink>
    </div>
    <!-- <nav class="nav">
      <NuxtLink class="nav__link" to="/">Home</NuxtLink>
      <NuxtLink class="nav__link" to="/about/">About</NuxtLink>
    </nav> -->
  </header>
</template>

<script>
export default {
  methods: {
    navigateToHome () {
      if (this.$route.path !== '/') {
        this.$router.push('/')
      } else {
        this.$router.go()
      }
    }
  }
}
</script>

<style lang="scss">
  .toolbar {
    font-family: 'Noto Sans KR', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0;
    &__logo {
      display: flex;
      align-items: center;
      cursor: pointer;
      & > img {
        height: 46px;
        width: 52px;
        object-fit: contain;
        margin-right: 12px;
      }
      & > p {
        font-size: 17px;
        font-weight: 500;
        line-height: 1.35;
        letter-spacing: -0.5px;
        color: #d0d0d0;
      }
    }
    &__nav {
      &__link {
        font-size: 18px;
        font-weight: 500;
        line-height: 1;
        letter-spacing: 0.5px;
        text-align: center;
        color: #ffffff;
        text-decoration: none;
        &--active {
          color: #ffda88;
        }
        & + & {
          margin-left: 36px;
        }
      }
    }
  }
</style>
