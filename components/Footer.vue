<template>
  <div class="footer">
    <span>
      2020 Hongik Univ. Graduation Film Festival
    </span>
    <div class="footer__logos">
      <img src="../assets/img/film-major-logo.png" alt="film-logo">
      <img src="../assets/img/hongik-logo.png" alt="hongik-logo">
    </div>
  </div>
</template>

<style lang="scss">
  .footer {
    padding: 34px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > span {
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 12px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      letter-spacing: normal;
      color: #ffffff;
    }
    &__logos {
      display: flex;
      align-items: center;
      & > img {
        height: 30px;
        width: 30px;
      }
      img + img {
        margin-left: 20px;
      }
    }
  }
</style>
