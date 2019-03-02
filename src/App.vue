<template>
  <div id="app">
    <div class="out">
      <the-header />
      <the-hero />
      <the-chart />
      <the-how-to />
      <the-faq />
      <the-footer />
    </div>
    <VParticles />
  </div>
</template>

<script>
import 'normalize.css';
import { TheHeader, TheFooter, TheHero, TheChart, TheHowTo, TheFaq } from './components/layout';
import { VParticles } from './components/ui';
export default {
  components: {
    TheHeader,
    TheFooter,
    TheHero,
    TheChart,
    TheHowTo,
    TheFaq,
    VParticles
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
  background-color: $bg-body
  color: $text-main
  font-size: 16px
  font-weight: 400
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.out
  z-index: 2

.container
  max-width: 1180px
  width: 1180px
  margin: 0 auto
  padding: 0 20px

.section
  margin: 100px 0
</style>
