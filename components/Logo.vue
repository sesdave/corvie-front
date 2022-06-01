<template>
  <img src="/assets/logo.png" :width="width" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'CorenLogo',
  props: {
    width: {
      type: Number,
      default: 200,
    },
  },
})
</script>
