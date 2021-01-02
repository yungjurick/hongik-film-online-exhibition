<template>
  <div class="footer">
    <div class="footer__top">
      <div class="footer__logos footer__logos--left">
        <img src="../assets/img/indiestory.png" alt="film-logo">
        <img src="../assets/img/indieplug.png" alt="hongik-logo">
      </div>
      <div class="footer__logos">
        <img src="../assets/img/film-major-logo.png" alt="film-logo">
        <img src="../assets/img/hongik-logo.png" alt="hongik-logo">
      </div>
    </div>
    <p>
      Copyright ⓒ 2020 Hongik University. All right reserved
    </p>
  </div>
</template>

<style lang="scss">
  .footer {
    padding-top: 120px;
    padding-bottom: 22px;
    & > p {
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 10px;
      font-weight: 300;
      line-height: 1;
      letter-spacing: normal;
      color: #ffffff;
      text-align: right;
      margin-top: 24px;
    }
    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__logos {
      display: flex;
      align-items: center;
      & > img {
        height: 40px;
        width: 40px;
      }
      img + img {
        margin-left: 20px;
      }
      &--left {
        img {
          width: 54px;
          height: 40px;
        }
        img:first-child {
          width: 78px;
        }
        img + img {
          margin-left: 23px;
        }
      }
    }
  }
</style>
