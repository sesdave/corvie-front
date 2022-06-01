<template>
  <div
    :class="`formulate-input-element formulate-input-element--${context.class}`"
    :data-type="context.type"
  >
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RadioField',
  provide() {
    return { context: this.context }
  },
  inheritAttrs: false,
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
})
</script>
