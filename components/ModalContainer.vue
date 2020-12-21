<template>
  <div class="modal-container">
    <slot />
  </div>
</template>

<style lang="scss">
  .modal-container  {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
