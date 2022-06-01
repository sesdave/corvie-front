<template>
  <NuxtChild />
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'AdminPage',
  layout: 'admin',
  middleware: ['cache'],

  meta: {
    cache: 'static',
  },
})
</script>
