<template>
  <label class="block mb-3 text-sm font-rope font-600" :for="context.id">
    <span>{{ context.label }}</span>
    <span v-if="isRequired" class="text-red-100">*</span>
  </label>
</template>

<script>
export default {
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isRequired() {
      return this.context.rules.some(({ ruleName }) => ruleName === 'required')
    },
  },
}
</script>
