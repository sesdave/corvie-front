<template>
  <div>
    <Hero />
    <QuickAction />
    <President />
    <NewsEvents />
    <Newsletter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Hero from '~/modules/landing/components/hero.vue'
import NewsEvents from '~/modules/landing/components/newsEvents.vue'
import Newsletter from '~/modules/landing/components/newsletter.vue'
import President from '~/modules/landing/components/president.vue'
import QuickAction from '~/modules/landing/components/quickAction.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { Hero, QuickAction, President, NewsEvents, Newsletter },
  layout: 'landing',
})
</script>
