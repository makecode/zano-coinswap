<template>
  <div class="countdown">
    <h4 class="countdown-title">Coinswap ends in</h4>
    <div class="countdown-time">
      <div class="countdown-section">
        <span class="countdown-section-data">
          <span class="countdown-item" v-for="(item, index) in distance.days" :key="index">
            {{ item }}
          </span>
        </span>
        <span class="countdown-section-title">Days</span>
      </div>
      <div class="countdown-section">
        <span class="countdown-section-data">
          <span class="countdown-item" v-for="(item, index) in distance.hours" :key="index">
            {{ item }}
          </span>
        </span>
        <span class="countdown-section-title">Hours</span>
      </div>
      <div class="countdown-section">
        <span class="countdown-section-data">
          <span class="countdown-item" v-for="(item, index) in distance.minutes" :key="index">
            {{ item }}
          </span>
        </span>
        <span class="countdown-section-title">Minutes</span>
      </div>
      <div class="countdown-section">
        <span class="countdown-section-data">
          <span class="countdown-item" v-for="(item, index) in distance.seconds" :key="index">
            {{ item }}
          </span>
        </span>
        <span class="countdown-section-title">Seconds</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    futureDate: new Date('1 Mar, 2020').getTime(),
    distance: {
      days: [ 0, 0 ],
      hours: [ 0, 0 ],
      minutes: [ 0, 0 ],
      seconds: [ 0, 0 ]
    },
    timeout: null
  }),
  mounted: function() {
    this.timeout = setInterval(this.calcTime, 1000);
  },
  methods: {
    calcTime: function() {
      const currentTime = new Date().getTime();
      // differense with future date and current time
      const dist = this.futureDate - currentTime;

      this.distance.days = Math.floor(dist / (1000 * 60 * 60 * 24)).toString().split('');
      this.distance.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().split('');
      this.distance.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60)).toString().split('');
      this.distance.seconds = Math.floor((dist % (1000 * 60)) / 1000).toString().split('');
    }
  }
}
</script>

<style lang="stylus" scoped>
$countdown-gradient-one = #1d2d62
$countdown-gradient-two = #17234a

.countdown
  margin-top: 100px

.countdown-title
  margin-bottom: 50px
  display: block
  text-transform: uppercase

.countdown-time
  display: inline-flex
  flex-direction: row

.countdown-section
  margin: 0 10px

.countdown-section-title
  margin-top: 26px
  display: block
  font-size: 13px
  letter-spacing: 1px
  text-transform: uppercase

.countdown-item
  margin: 0 4px
  display: inline-block
  width: 54px
  height: 72px
  line-height: 72px
  font-size: 22px
  color: #4083ec
  background-image: linear-gradient(to bottom, $countdown-gradient-one, $countdown-gradient-two)
  border-radius: 6px
</style>
