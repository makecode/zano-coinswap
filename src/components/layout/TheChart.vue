<template>
  <section class="section visualization container">
    <div class='titles'>
      <div class="left">
        <v-title
          :title='data.counterTotal.text' 
          :shadow='data.counterTotal.shadow'
          small
        />
        <div class="count"><span>{{ data.counterTotal.counter }}</span><span class="text-blue"> BBR</span></div>
      </div>
      <div class="right">
        <v-title
          :title='data.counterDone.text' 
          :shadow='data.counterDone.shadow'
          shadowAlign='right'
          small
        />
        <div class="count"><span>{{ data.counterDone.counter }}</span><span class="text-blue"> BBR</span></div>
      </div>
    </div>

    <div class="chart">
      <img class='chart__img' src="../../assets/chart.png" alt="">
    </div>

    <div class="periods">
      <div class="period current">
        <v-title 
          :title='data.periodCurrent.title.text'
          :shadow='data.periodCurrent.title.shadow'
          small
        />
        <div class="period__data">
          <p class="period__value">
            <span>Period </span>
            <span class='period__num'>{{ data.periodCurrent.periodNum }}</span>
          </p>
          <p class="period__value">
            <span>{{ data.periodCurrent.monthFirst.title }} </span>
            <span class='period__num'>{{ data.periodCurrent.monthFirst.day }}<sup>st</sup></span>
            <span> – {{ data.periodCurrent.monthSecond.title }} </span>
            <span class="period__num">{{ data.periodCurrent.monthSecond.day }}<sup>st</sup></span>
          </p>
          <p class="period__value">
            <span>Swap Ratio: </span>
            <span class="period__num">{{ data.periodCurrent.ratio.bbr }}</span>
            <span> BBR = </span>
            <span class="period__num">{{ data.periodCurrent.ratio.zan }}</span>
            <span> ZAN</span>
          </p>
        </div>
      </div>
      <div class="period next">
        <v-title 
          :title='data.periodNext.title.text' 
          :shadow='data.periodNext.title.shadow'
          shadowAlign='right'
          small
        />
        <div class="period__data">
          <p class="period__value">
            <span>Period </span>
            <span class='period__num'>{{ data.periodNext.periodNum }}</span>
          </p>
          <p class="period__value">
            <span>{{ data.periodNext.monthFirst.title }} </span>
            <span class='period__num'>{{ data.periodNext.monthFirst.day }}<sup>st</sup></span>
            <span> – {{ data.periodNext.monthSecond.title}} </span>
            <span class="period__num">{{ data.periodNext.monthSecond.day }}<sup>st</sup></span>
          </p>
          <p class="period__value">
            <span>Swap Ratio: </span>
            <span class="period__num">{{ data.periodNext.ratio.bbr}}</span>
            <span> BBR = </span>
            <span class="period__num">{{ data.periodNext.ratio.zan }}</span>
            <span> ZAN</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { VTitle } from '../ui';
import { CHART_SECTION } from '../../framework/data';

export default {
  components: {
    VTitle
  },
  data: () => ({
    data: CHART_SECTION
  })
}
</script>

<style lang="stylus" scoped>
.titles
  display: flex
  flex-direction: row
  justify-content: space-between

.left
  text-align: left

.right
  text-align: right

.count
  font-size: 20px

.periods
  display: flex
  flex-direction: row
  justify-content: space-between

.period

  &__num
    color: white

  &.current
    .period__data
      color: $text-yellow
  &.next
    text-align: right

    .period__data
      color: $text-orange

.chart
  margin-top: 40px

  &__img
    width: 100%
</style>
