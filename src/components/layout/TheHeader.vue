<template>
  <header class="header" id="header">
    <div class="header__wrap container">
      <div class="header__left">
        <VLogo />
      </div>
      <div class="header__center">
        <VNavigation />
      </div>
      <div class="header__right">
        <VSocial />
      </div>
    </div>
  </header>
</template>

<script>
import { VLogo, VNavigation, VSocial } from './../ui';

export default {
  name: 'TheHeader',
  components: {
    VNavigation,
    VLogo,
    VSocial
  }
}
</script>

<style lang='stylus'>
.header
  padding: 50px 20px

  +m($tablet)
    position: fixed
    top: 0
    left: 0
    width: 100%
    padding: 10px 20px
    justify-content: center
    background-color: rgba($bg-body, 0.9)
    box-shadow: 10px 0px 50px 0px rgba(0,0,0,0.75)
    z-index: $z-header

  &__wrap
    position: relative
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: space-between
    align-items: center

  &__center
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

    +m($tablet)
      display: none

  &__right
    display: flex
    flex-direction: row
    align-items: center
    
    +m($tablet)
      display: none

  .language
    margin-right: 20px

</style>
