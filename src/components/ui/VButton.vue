<template>
  <button class="button" :class="{ disabled, blue }" @click="onClick">
    <span class="button-text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    blue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="stylus" scoped>
.button
  padding: 2px
  display: inline-block
  width: 154px
  height: 50px
  line-height: 46px
  border-radius: 10px
  text-decoration: none
  color: white
  font-size: 13px
  font-weight: 700
  text-transform: uppercase
  letter-spacing: 1px
  cursor: pointer
  background-image: linear-gradient(to right, $button-gradient-one, $button-gradient-two)
  box-sizing: border-box
  position: relative
  border: none

.button.blue
  background-image: linear-gradient(to bottom, $button-gradient-one, $button-gradient-two)
  border: none

.button.blue::after
  pseudo()
  top: 0
  left: 0
  width: 100%
  height: 100%
  border-radius: 10px
  background-image: linear-gradient(to bottom, $button-gradient-two, $button-gradient-one)
  transition: $tr
  z-index: 0
  opacity: 0

.button.blue:hover::after
  opacity: 1

.button.blue .button-text
  background-color: transparent

.button .icon.download
  margin-right: 8px

.button .icon.button-triangle
  margin-left: 8px

.button span
  z-index: 1

.button-text
  display: block
  text-align: center
  border-radius: 10px
  width: 100%
  height: 100%
  background-color: $bg-button
  position: relative
  z-index: 1
  transition: $tr

.button:hover .button-text
  background-color: transparent

.button.disabled
  opacity: 0.2
  pointer-events: none
  user-select: none

</style>
