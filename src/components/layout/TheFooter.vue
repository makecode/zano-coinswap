<template>
  <footer class="footer">
    <VLogo />
    <VNavigation />
    <VSocial />
    <span class="footer__copyright">Copyright © 2019 ZANO.org</span>
  </footer>
</template>

<script>
import { VLogo, VNavigation, VSocial } from './../ui';

export default {
  components: {
    VLogo,
    VNavigation,
    VSocial
  }
}
</script>

<style lang="stylus">
.footer
  padding: 50px 0
  display: flex
  flex-direction: column
  justify-content: space-around
  text-align: center
  height: 340px
  background-image: linear-gradient(to bottom, $bg-footer-top, $bg-footer-bottom)

  &__copyright
    font-size: 11px
</style>
