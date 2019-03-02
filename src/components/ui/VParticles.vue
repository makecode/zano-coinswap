<template>
  <div id='particles-js' v-bind:style="{ height: bodyHeight }"></div>
</template>

<script>
export default {
  data: () => ({
    bodyHeight: '100%'
  }),

  mounted: function() {
    this.bodyHeight = this.windowHeight();

    require('particles.js')
    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },

  methods: {
    windowHeight: function() {
      return document.body.scrollHeight + 'px';
    },
    initParticlesJS () {
      /* eslint-disable */
      particlesJS('particles-js', {
        'particles': {
          'number': {
            'value': 21,
            'density': {
              'enable': true,
              'value_area': 1000
            }
          },
          'move': {
            'speed': 1
          },
          'color': {
            'value': '#ffffff'
          },
          'opacity': {
            'value': 0.2,
            'random': true,
            'anim': {
              'enable': false
            }
          },
          'size': {
            'value': 3,
            'random': true,
            'anim': {
              'enable': false
            }
          },
          'line_linked': {
            'enable': true,
            'distance': 320,
            'color': '#1796ff',
            'opacity': 0.2,
            'width': 1
          }
        },
        'retina_detect': true
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
#particles-js
  position: absolute
  top: 0
  left: 0
  width: 100%
  z-index: 1
</style>
