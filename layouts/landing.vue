<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '~/modules/landing/components/header.vue'

export default Vue.extend({
  name: 'LandingLayout',
  components: { Header },
})
</script>
