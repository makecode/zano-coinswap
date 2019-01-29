<template>
  <ul class="social">
    <li
      v-for="icon in socialIcons"
      :key="icon.title"
      class="social__el"
    >
      <a class="social__link" v-bind:href='icon.link' v-bind:title='icon.title'>
        <VIcon v-bind:icon='icon.title' />
      </a>
    </li>
  </ul>
</template>

<script>
import VIcon from './VIcon';

export default {
  components: {
    VIcon
  },
  data: () => ({
    socialIcons: [
      { title: 'twitter', link: 'https://twitter.com/zano_project' },
      { title: 'medium', link: 'https://medium.com/@zano_project' },
      { title: 'discord', link: 'https://discord.gg/wE3rmYY' },
      { title: 'telegram', link: 'https://t.me/zanocoin' }
    ]
  })
}
</script>

<style lang='stylus' scoped>
.social
  display: flex
  flex-direction: row
  align-items center
  justify-content: center

  &__el
    transition: $tr

  &__el:hover
    transform: rotate(-15deg)

  &__el
    margin-left: 14px

  &__el:first-child
    margin-left: 0

  &__el,
  &__link
    line-height: 0
</style>
