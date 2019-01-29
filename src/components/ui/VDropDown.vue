<template>
  <div class="drop-down" :class="{opened: showMenu}" @mouseenter="() => showMenu = true" @mouseleave="showMenu = false">
    <VButton class="drop-down-toggler" blue>
      <slot></slot>
    </VButton>
    <div class="drop-down-menu" v-if="showMenu">
      <a class="drop-down-link" v-for="(item, index) in items" :key="index" :href="item.link" target="_blank">
        {{ item.title }}
      </a>
    </div>
  </div>
</template>

<script>
import VButton from './VButton';

export default {
  components: {
    VButton
  },
  props: {
    title: String,
    items: Array
  },
  data: () => ({
    showMenu: false
  })
}
</script>

<style lang="stylus" scoped>
.drop-down
  display: inline-block
  position: relative

.drop-down.opened
  .drop-down-toggler
  .drop-down-toggler::after
    transition: none
    border-radius: 10px 10px 0 0

.drop-down-menu
  width: 100%
  height: auto
  position: absolute
  left: 0
  bottom: 0
  transform: translateY(100%)
  background-color: $bg-drop-down-menu
  border-color: white
  border-radius: 0 0 10px 10px
  overflow: hidden
  box-sizing: border-box
  text-align: left

.drop-down-link
  display: block
  height: 50px
  line-height: 50px
  cursor: pointer
  transition: $tr
  font-size: 13px
  font-weight: 700
  color: $text-main
  text-transform: uppercase
  letter-spacing: 1px
  text-align: center
  box-sizing: border-box

.drop-down-link:last-child
  border-bottom: none  

.drop-down-link:hover
  background-color: $blue
  color: white
</style>
