<template>
  <section class="section hero">
    <v-title
      :title="heroTitle"
      shadow="Coinswap"
      centred
    />
    <p class="section__text">
      {{ heroText }}
    </p>
    <div class="buttons">
      <VDropDown class="hero-button" :items='dropDownItems'>
        <a class="hero-link" href="https://zano.org/downloads/zano_wp.pdf" target="_blank">
          Whitepaper
          <VIcon icon="button-triangle" />
        </a>
      </VDropDown>
      <!-- <VButton class="hero-button">Stats</VButton> -->
      <VButton class="hero-button">Manual</VButton>
    </div>
    <VCountdown />
  </section>
</template>

<script>
import { VTitle, VButton, VIcon, VDropDown, VCountdown } from './../ui';
import { heroTitle, heroDescription } from './../../framework/data';

export default {
  components: {
    VTitle,
    VButton,
    VDropDown,
    VIcon,
    VCountdown
  },
  data: () => ({
    heroTitle,
    heroText: heroDescription,
    dropDownItems: [
      { title: 'Github', link: 'https://github.com/zano-project/zano' }
    ]
  })
}
</script>

<style lang="stylus">
  .buttons
    margin-top: 10px

  .hero-button
    margin: 0 10px

  .hero-link
    color: white
</style>
