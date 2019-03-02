<template>
  <ul class="questions">
    <li v-for="q in questions" :key="q.id" class="question" :class="{ active: q.id === selected }" @click="selected = q.id">
      <div class="question__header">
        <span class="question__icon" />
        <h5 class="question__title">{{ q.title }}</h5>
      </div>
      <p class="question__description">{{ q.description }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    questions: Array
  },
  data: () => ({
    selected: 0
  })
}
</script>

<style lang="stylus" scoped>
  .questions
    margin: 100px auto
    display: flex
    flex-direction: column
    max-width: 1000px
    width: 100%
  
  .question
    padding: 30px 60px
    width: 100%
    border-radius: 30px
    background: none
    box-sizing: border-box
    cursor: pointer

    &__header
      display: flex
      flex-direction: row
      align-items: center

    &__icon
      margin-right: 10px
      display: inline-block
      width: 70px
      height: 70px
      background-image: url('../../assets/icon-whatis.svg')

    &__title
      color: white
      font-size: 16px
      font-weight: 500

    &__description
      display: none
      margin-top: 10px
      font-size: 14px
      line-height: 20px
      letter-spacing: 0.8px

    &.active
      background: linear-gradient(to right, #16234d, #1d2e6a)
      box-shadow: 0px 20px 100px -20px rgba(0,0,0,0.75)

      .question__description
        display: block
</style>