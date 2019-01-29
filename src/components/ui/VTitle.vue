<template>
  <h1 class="section__title title" :class='{centred: centred}'>
      <span
        v-for="(word, index) in title"
        :key="index"
        :class="{blue: word.blue}"
      >
        {{ word.title }}
      </span>
      <span class="title__shadow">{{ shadow }}</span>
  </h1>
</template>

<script>
export default {
  props: {
    title: Array,
    blueTitle: String,
    shadow: String,
    centred: Boolean
  }
}
</script>

<style lang='stylus' scoped>
.title
  display: block
  position: relative
  white-space: nowrap

  &__shadow
    position: absolute
    bottom: 30px
    left: 0
    font-size: 144px
    font-weight: 900
    opacity: 0.03
    text-transform: uppercase

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
  
</style>
