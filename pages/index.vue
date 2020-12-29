<template>
  <no-ssr>
    <full-page :options="options">
      <div class="section">Three</div>
      <div class="section">Four</div>
    </full-page>
  </no-ssr>
</template>

<script>
export default {
  data () {
    return {
      options: {
        licenseKey: 'FF5E07F3-C37541D9-A51363A4-DB2A970F'
      }
    }
  }
}
</script>

<style>

</style>
