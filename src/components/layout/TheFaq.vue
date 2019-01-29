<template>
  <section class="section faq">
    <v-title :title="title" shadow="Faq" centred />
    <VQuestions :questions="questions" />
  </section>
</template>

<script>
import { VTitle, VQuestions } from './../ui';
import { faq, faqTitle } from './../../framework/data';

export default {
  components: {
    VTitle,
    VQuestions
  },
  data: () => ({
    title: faqTitle,
    questions: faq
  })
}
</script>

<style lang="stylus">
.title
  text-align: center
</style>
