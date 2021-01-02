<template>
  <no-ssr>
    <full-page :options="options">
      <div class="section section__video">
        <div class="section__video__embed-container">
          <iframe
            src="https://player.vimeo.com/video/491520430?background=1&autoplay=1&loop=1&byline=0&title=0&muted=0"
            frameborder="0"
            allow="autoplay"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          />
          <iframe id="audio" src="@/assets/1-minute-of-silence.mp3" allow="autoplay" style="display: none" />
        </div>
      </div>
      <div class="section">
        TEST
      </div>
    </full-page>
  </no-ssr>
</template>

<script>
export default {
  layout: 'main',
  data () {
    return {
      options: {
        licenseKey: 'FF5E07F3-C37541D9-A51363A4-DB2A970F'
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
  }
}
</style>
