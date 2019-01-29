<template>
  <div class="logo">
    <img src="./../../assets/logo.svg" alt="Zano logo" class="logo__img">
    <span class="logo__title">Zano</span>
  </div>
</template>

<script>
export default {
  name: 'VNavigation'
}
</script>

<style lang='stylus' scoped>
.logo
  position: relative
  display: inline-flex
  flex-direction: row
  align-items: center
  justify-content: center
  cursor: pointer

  &__img
    width: 50px
    height: 50px
    transition: transform 1s ease-in-out

  &__title
    margin-left: 14px
    text-transform: uppercase
    font-weight: 700
    font-size: 12px
    letter-spacing: 1px
    color: $text-controls

    +m($tablet)
      display: none

.logo:hover .logo__img
  transform: rotateY(180deg)
</style>
