<template>
  <h1 class="title" :class='{centred: centred, small: small}'>
      <span
        class='title__word'
        v-for="(word, index) in title"
        :key="index"
        :class="{blue: word.blue}"
      >
        {{ word.title }}
      </span>
      <span class="title__shadow" :class='shadowAlign'>{{ shadow }}</span>
  </h1>
</template>

<script>
export default {
  props: {
    title: Array,
    blueTitle: String,
    shadow: String,
    shadowAlign: {
      type: String,
      default: 'left'
    },
    centred: Boolean,
    small: Boolean
  }
}
</script>

<style lang='stylus' scoped>
.title
  display: inline-block
  position: relative
  white-space: nowrap

  &__shadow
    position: absolute
    bottom: 30px
    font-size: 144px
    font-weight: 900
    opacity: 0.03
    text-transform: uppercase

    &.left
      left: 0
    &.right
      right: 0

    +m($tablet)
      font-size: 100px
      bottom: 20px

    +m($mobile)
      font-size: 70px
      bottom: 14px

  &.centred .title__shadow
    left: 50%
    transform: translateX(-50%)

  .blue    
    color: $blue
  
  &.small
    .title__word
      font-size: 36px

    .title__shadow
      bottom: 8px
      font-size: 60px
</style>
