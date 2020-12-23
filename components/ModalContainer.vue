<template>
  <transition name="fade">
    <div class="modal-container">
      <slot />
    </div>
  </transition>
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
    overscroll-behavior: contain;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
