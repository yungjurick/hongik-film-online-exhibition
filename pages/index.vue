<template>
  <no-ssr>
    <full-page ref="fullpage" :options="options">
      <div class="section section__video">
        <div class="section__video__embed-container">
          <iframe
            src="https://player.vimeo.com/video/495384491?background=1&autoplay=1&loop=1&byline=0&title=0&muted=0"
            frameborder="0"
            allow="autoplay"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          />
          <iframe id="audio" src="@/assets/1-minute-of-silence.mp3" allow="autoplay" style="display: none" />
        </div>
        <transition name="fade">
          <div
            class="section__container__arrow section__video__arrow"
            @click="$refs.fullpage.api.moveSectionDown()"
          >
            <div class="section__container__arrow__block">
              <img src="@/assets/icon/arrow-down.svg" class="arrow arrow-first">
              <img src="@/assets/icon/arrow-down.svg" class="arrow arrow-second">
            </div>
          </div>
        </transition>
      </div>
      <div class="section section--two">
        <div class="section__container">
          <div class="section__container__left">
            <img src="@/assets/img/poster.png" alt="poster">
          </div>
          <div class="section__container__right">
            <div class="section__container__right__top">
              <h1>榮華</h1>
              <p>
                <span>영화<sup>1</sup>(映畫)</span>
                <span>일정한 의미를 갖고 움직이는 대상을 촬영하여영사기로 영사막에 재현하는 종합 예술.</span>
              </p>
              <p>
                <span>영화<sup>2</sup>(榮華)</span>
                <span>몸이 귀하게 되어 이름이 세상에 빛남</span>
              </p>
            </div>
            <div class="section__container__right__bottom">
              <p>——</p>
              <p>
                제18회 홍익대학교 영상애니메이션전공 졸업 상영회<br>
                &lt;영화&gt; 속 이야기들은 우리가 매일 마주치는 일상으로부터 시작되었습니다.<br>
                우리의 이야기들은 이번 졸업상영회를 통해<br>
                세상 밖에 나와 많은 이들과 함께 하게 되었습니다.<br>
                졸업 상영회 &lt;영화&gt;를 기점으로 새롭게 시작될 우리의 이야기가<br>
                고유의 색채로 아름답게, 영화롭길 바라며 준비하였습니다.<br><br>
                일상을 영화롭게.
              </p>
            </div>
          </div>
          <transition name="fade">
            <div
              class="section__container__arrow"
              @click="$refs.fullpage.api.moveSectionDown()"
            >
              <div class="section__container__arrow__block">
                <img src="@/assets/icon/arrow-down.svg" class="arrow arrow-first">
                <img src="@/assets/icon/arrow-down.svg" class="arrow arrow-second">
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="section fp-auto-height section--three">
        <div class="section__container section__container--three">
          <div class="section__container--three__left">
            <img src="@/assets/img/second-poster.png" alt="poster">
          </div>
          <div class="section__container--three__right">
            <h1>축하의 말</h1>
            <p class="text--first">
              “아이디어가 떠오르지 않아.”<br>
              “구성이 좀 별로...”<br>
              “예산이 문제야.”<br>
              “섭외가 되질 않아.”<br>
              “봐도 뭔 소리인지 모르겠어.”<br>
              “...”<br>
              “코로나 때문에 괜찮을까?”<br>
            </p>
            <p>
              작품을 만드는 일은 이야기 속 영웅의 서사와도 같아서<br>
              늘 앞을 가로막는 수많은 방해물과 갈등을 빚습니다.<br>
              예측하지 못한 팬데믹까지 더해졌지만,<br>
              여러분들은 젊은 패기과 열정으로 상황을 이겨내고 작품을 훌륭하게 만들었습니다.
            </p>
            <p class="text--large">
              “정말 수고 많았습니다.”
            </p>
            <p>
              큰 어려움이 있던 만큼, 큰 힘이 될 것이라 확신합니다. 작품을 완성하며 쌓은 경험은<br>
              새로운 시간과 풍경을 마주할 든든한 바탕이 될 것입니다.<br>
              다시 한번 작품을 완성한 여러분들의 노력에 박수를 보냅니다.<br>
              꾸준히 학생들에게 가르침을 주신 교수님들,<br>
              묵묵히 지원해 준 조교 선생님들,<br>
              모든 지원을 아낌없이 해주신 학부모님들께<br>
              진심으로 감사의 마음을 전합니다.
            </p>
            <p class="text--large">
              “모두 감사합니다.”
            </p>
            <p class="text--bottom">
              4학년 지도교수
            </p>
            <p class="text--bold">
              이찬호, 노광민
            </p>
          </div>
        </div>
        <div class="section__bottom">
          <p>지도교수</p>
          <div class="section__bottom__professors">
            <div>
              <span>노광민</span>
              <span>교수님</span>
            </div>
            <div>
              <span>이찬호</span>
              <span>교수님</span>
            </div>
            <div>
              <span>원일훈</span>
              <span>교수님</span>
            </div>
            <div>
              <span>안상원</span>
              <span>교수님</span>
            </div>
            <div>
              <span>송정진</span>
              <span>교수님</span>
            </div>
          </div>
          <p>졸업준비위원회</p>
          <div class="section__bottom__committee">
            <div>
              <span>위원장</span>
              <span>김태령</span>
            </div>
            <div>
              <span>부위원장</span>
              <span>박수민</span>
            </div>
            <div>
              <span>운영부</span>
              <span>이산하</span>
            </div>
            <div>
              <span></span>
              <span>황주원</span>
            </div>
            <div>
              <span>기술부</span>
              <span>박서경</span>
            </div>
            <div>
              <span></span>
              <span>이재진</span>
            </div>
            <div>
              <span></span>
              <span>황현지</span>
            </div>
            <div>
              <span>총무부</span>
              <span>박지수</span>
            </div>
            <div>
              <span>디자인부</span>
              <span>강예슬</span>
            </div>
            <div>
              <span></span>
              <span>강주희</span>
            </div>
            <div>
              <span></span>
              <span>서가연</span>
            </div>
            <div>
              <span>기획 · 홍보부</span>
              <span>변지선</span>
            </div>
          </div>
        </div>
        <Footer class="section__bottom__footer" />
      </div>
    </full-page>
  </no-ssr>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  layout: 'main',
  components: {
    Footer
  },
  data () {
    return {
      options: {
        licenseKey: 'FF5E07F3-C37541D9-A51363A4-DB2A970F',
        scrollOverflow: true,
        navigation: true,
        onLeave: (origin, destination, direction) => {
          if (origin.isFirst) {
            this.isFirst = false
          } else if (destination.isFirst) {
            this.isFirst = true
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
.section {
  &__video {
    &__embed-container {
      z-index: -1;
      position: absolute;
      height: 100%;
      top: 0;
      width: 150%;
      left: 50%;
      transform: translateX(-50%);
      iframe {
        z-index: -1;
        width: 100%;
        height: 100%;
        position: absolute;
      }
    }
    &__arrow {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &__container {
    position: relative;
    max-width: 1200px;
    width: 100%;
    height: 100%;
    display: flex;
    padding-top: 120px;
    padding-right: 0.0125%;
    margin: 0 auto;
    &__left {
      & > img {
        max-width: 480px;
        @media only screen and (max-height: 860px) {
            & {
              max-width: 420px;
            }
          }
      }
    }
    &__right {
      margin-left: 4.2%;
      &__top {
        font-family: 'Noto Serif KR', serif;
        margin-top: 20px;
        color: #ffda88;
        & > h1 {
          font-size: 40px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: normal;
          margin-bottom: 35px;
        }
        & > p {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.71;
          letter-spacing: -0.44px;
          & > span {
            display: block;
          }
          & span:nth-child(2) {
            font-size: 12px;
          }
        }
        p + p {
          margin-top: 20px;
        }
      }
      &__bottom {
        margin-top: 75px;
        & > p {
          font-family: 'Noto Sans KR', sans-serif;
          font-size: 14px;
          font-weight: 300;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.86;
          letter-spacing: -0.5px;
          color: #ffffff;
        }
      }
    }
    &__arrow {
      background: transparent;
      position: absolute;
      z-index: 500;
      bottom: 0;
      width: 1200px;
      height: 96px;
      display: flex;
      justify-content: center;
      align-items: center;
      &__block {
        $ani-speed: 2s;
        $ani-delay: 1s;
        height: 100%;
        width: 24px;
        position: relative;
        .arrow-first {
          animation: arrow-movement $ani-speed ease-in-out infinite;
        }
        .arrow-second {
          animation: arrow-movement $ani-speed $ani-delay ease-in-out infinite;
        }
        &:hover {
          .arrow-first {
            opacity: 1;
            animation: arrow-movement-not-hover 1s;
          }
          .arrow-second {
            animation: arrow-movement-not-hover 1s;
          }
        }
      }
    }
    &--three {
      min-height: 100vh;
      padding-top: 100px;
      margin-bottom: 200px;
      &__left {
        padding-left: 160px;
        & > img {
          max-width: 320px;
        }
      }
      &__right {
        margin-left: 4.2%;
        font-family: 'Noto Sans KR', sans-serif;
        & > h1 {
          font-size: 18px;
          font-weight: 500;
          line-height: 1;
          letter-spacing: -0.5px;
          color: #ffda88;
          margin-bottom: 35px;
        }
        & > p {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.71;
          letter-spacing: -0.5px;
          color: #ffffff;
        }
        & > p.text--first {
          margin-bottom: 14px;
        }
        & > p.text--large {
          font-size: 17px;
          margin: 19px 0;
        }
        & > p.text--bottom {
          margin-top: 21px;
        }
        & > p.text--bold {
          margin-top: 10px;
          font-weight: normal;
        }
      }
    }
  }
  &__bottom {
    display: grid;
    grid-template-columns: 135px auto;
    column-gap: 10%;
    row-gap: 80px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    font-family: 'Noto Sans KR', sans-serif;
    color: #ffffff;
    padding-right: 11.3%;
    padding-bottom: 120px;
    & > p {
      font-size: 16px;
      font-weight: bold;
      line-height: 1;
      letter-spacing: 4px;
    }
    &__professors {
      display: flex;
      justify-content: space-between;
      & > div {
        span {
          display: inline-block;
          font-weight: 300;
        }
      }
      div span:first-child {
        font-size: 16px;
        font-weight: 500;
      }
    }
    &__committee {
      display: grid;
      grid-auto-flow: column;
      grid-template-rows: repeat(4, 1fr);
      grid-template-columns: repeat(3, 1fr);
      column-gap: 102px;
      row-gap: 20px;
      & > div {
        font-weight: 300;
        display: flex;
        justify-content: space-between;
      }
      div span {
        display: inline-block;
      }
      div span:first-child {
        font-weight: 500;
        margin-right: 19px;
      }
    }
    &__footer {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
    }
  }
}
#fp-nav ul li a span {
  background: #ffffff;
  height: 12px;
  width: 12px;
  margin: 0;
  left: 0;
  top: 0;
}
#fp-nav ul li a.active span {
  background: #ffda88;
  margin: 0;
}
#fp-nav ul {
  li + li {
    margin-top: 40px;
  }
  li:hover {
    a span, a.active span {
      margin: 0;
      height: 12px;
      width: 12px;
    }
  }
}
#fp-nav.fp-right {
  right: 14.6%;
}
.fp-viewing-0 #fp-nav{
   display: none;
}
</style>
