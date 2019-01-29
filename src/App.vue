<template>
  <div id="app">
    <the-header />
    <the-hero />
    <the-how-to />
    <the-faq />
    <the-footer />
  </div>
</template>

<script>
import 'normalize.css';
import { TheHeader, TheFooter, TheHero, TheHowTo, TheFaq } from './components/layout';

export default {
  components: {
    TheHeader,
    TheFooter,
    TheHero,
    TheHowTo,
    TheFaq
  }
}
</script>

<style lang='stylus'>
#app
  min-height: 100%
  display: flex
  flex-direction: column
  font-size: 16px
  font-family: 'Roboto', sans-serif
  background: $bg-body url('assets/bg-coinswap.png') no-repeat
  background-size: cover
  color: $text-main
  font-size: 16px
  font-weight: 400
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.container
  max-width: 1180px
  width: 1180px
  margin: 0 auto
  padding: 0 20px

.section
  margin: 100px 0
</style>
