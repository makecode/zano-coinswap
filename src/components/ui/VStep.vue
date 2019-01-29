<template>
  <div class="step" :class="{ 'step-active': active }">
    <div class="step-title">
      <v-icon :icon="icon" />
      <span class="step-title-text">{{ title }}</span>
      <span class="step-title-active" @click="onArrowClick">
        <v-icon icon="step-active"  />
      </span>
    </div>
    <h5 class="step-subtitle">{{ subtitle }}</h5>
    <p class="step-description">{{ description }}</p>
  </div>
</template>

<script>
import VIcon from './VIcon'
export default {
  components: {
    VIcon
  },
  props: {
    title: String,
    icon: String,
    subtitle: String,
    description: String,
    active: {
      type: Boolean,
      default: false
    },
    onArrowClick: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="stylus" scoped>
$bg-slider-item-color-one = #16234d
$bg-slider-item-color-two = #1d2e6a

.step
  position: relative
  padding: 40px
  width: 350px
  height: 350px
  display: inline-block
  border-radius: 20px
  background-image: linear-gradient(to right, $bg-slider-item-color-one, $bg-slider-item-color-two)
  transition: all 2s ease-in-out
  z-index: 10
  opacity: 0.5

.step:nth-child(1),
.step:nth-child(2)
  opacity: 1

.step.step-active .step-title-active
  opacity: 1

.step-title
  position: relative
  margin-bottom: 30px
  display: flex
  flex-direction: row
  align-items: center
  color: white

.step-title-active
  padding: 14px 0 14px 14px
  position: absolute
  top: 50%
  right: 0
  transform: translateY(-50%)
  transition: all 0.5s ease-in-out
  opacity: 0
  cursor: pointer

.step-title-active:hover
  right: -10px

.step-title-text
  margin-left: 14px
  font-weight: 600
  text-transform: uppercase

.step-subtitle
  margin: 0 0 10px
  font-size: 15px
  line-height: 2
  text-transform: uppercase
  color: $text-controls

.step-description
  margin: 0
  font-size: 14px
</style>
