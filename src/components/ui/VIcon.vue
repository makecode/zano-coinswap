<template>
  <span class="icon" v-bind:class="icon"></span>
</template>

<script>
export default {
  props: {
    icon: String
  }
}
</script>

<style lang='stylus' scoped>
.icon
  position: relative
  display: inline-block
  background-size: cover
  background-position: center

  &.button-triangle
    width: 8px
    height: 6px
    &::after
      pseudo()
      top: 0
      left: 0
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 6px 4px 0 4px;
      border-color: #ffffff transparent transparent transparent;

  // STEPS
  &.step-one
    width: 40px
    height: 40px
    background-image: url('../../assets/step-one.svg')

  &.step-two
    width: 40px
    height: 40px
    background-image: url('../../assets/step-two.svg')

  &.step-three
    width: 40px
    height: 40px
    background-image: url('../../assets/step-three.svg')

  &.step-four
    width: 40px
    height: 40px
    background-image: url('../../assets/step-four.svg')

  &.step-active
    width: 27px
    height: 11px
    background-image: url('../../assets/icon-arrow.svg')

// SOCIAL
  &.discord
    width: 20px
    height: 20px
    background-image: url('../../assets/icon-discord.svg')

  &.telegram
    width: 20px
    height: 20px
    background-image: url('../../assets/icon-telegram.svg')

  &.medium
    width: 20px
    height: 20px
    background-image: url('../../assets/icon-medium.svg')

  &.twitter
    width: 20px
    height: 20px
    background-image: url('../../assets/icon-twitter.svg')
</style>
