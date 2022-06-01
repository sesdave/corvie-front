<template>
  <div
    class="flex items-center px-6 py-8 space-x-3 bg-white shadow-sm rounded-xl"
  >
    <div class="text-green-700 flex-center h-14 w-14 bg-green-50 rounded-xl">
      <component :is="icon" width="30" height="30" />
    </div>

    <div>
      <p class="text-xs text-gray-500 font-rope font-500">{{ label }}</p>
      <p class="text-lg font-700">
        {{ value }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: { type: String, required: true },
    value: { type: String, required: true },
    icon: { type: Object, default: undefined },
  },
})
</script>
