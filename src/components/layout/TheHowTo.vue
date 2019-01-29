<template>
  <section class="section how">
    <div class="section-wrap container">
      <div class="section-left">
        <v-title 
          :title="title"
          shadow="How"
        />
        <p class="section-text">{{ description }}</p>
      </div>
      <div class="section-right">
        <div class="steps">
          <transition-group
            name='change-step'
            tag="div"
          >
            <v-step
              v-for="(step, index) in steps"
              :key="step.icon"
              class="step"
              :active='index === 0'
              :icon='step.icon'
              :title='step.title'
              :subtitle='step.subtitle'
              :description='step.description'
              :onArrowClick='nextStep'
            />
          </transition-group>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { VTitle, VStep } from '../ui';
import { steps, stepsTitle, stepsDescription } from '../../framework/data';

export default {
  components: {
    VTitle,
    VStep
  },
  computed: {
    stepsLength: function() {
      return this.steps.length - 1;
    }
  },
  data: () => ({
    timeout: null,
    steps,
    activeStep: 0,
    title: stepsTitle,
    description: stepsDescription
  }),
  methods: {
    nextStep: function() {
      const { steps } = this;
      const first = steps.splice(0, 1);// eslint-disable-line
      steps.push(first[0]);
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  display: flex
  flex-direction: row

.section
  overflow: hidden

.section-left
  width: 42%
  flex-shrink: 0

.section-right
  position: relative

.section-wrap
  display: flex
  flex-direction: row
  align-items: flex-end

.steps > div
  display: flex
  flex-direction: row
  margin-left: 100px

.step
  margin-right: 30px

.change-step
  display: flex
  flex-direction: row

.change-step-move
  position: relative

.change-step-move:last-child
  z-index: 0
  opacity: 0
</style>
