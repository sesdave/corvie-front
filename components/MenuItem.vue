<template>
  <details
    v-if="children"
    :key="label"
    :class="{
      'bg-green-600 border-r-[10px] border-red-100 rounded-l-xl':
        isChildMatched,
    }"
    :open="isChildMatched"
  >
    <summary
      class="relative inline-flex items-center w-full py-3 pl-5 space-x-5 text-green-100 hover:bg-green-600 rounded-l-xl"
      :class="{
        'font-700 text-white': isChildMatched,
      }"
    >
      <component :is="icon" />
      <div>{{ label }}</div>

      <CaretDownIcon class="absolute right-5 top-5 arrow" />
    </summary>

    <div class="pb-4 pl-16 text-sm">
      <NuxtLink
        v-for="subitem in children"
        :key="subitem.to"
        :to="subitem.to"
        class="block py-2 pl-4 no-underline hover:bg-green-600 rounded-l-xl"
        exact-active-class="text-white font-700"
      >
        {{ subitem.label }}
      </NuxtLink>
    </div>
  </details>
  <NuxtLink
    v-else
    :key="label"
    class="inline-flex py-3 pl-5 space-x-5 no-underline hover:bg-green-600 rounded-l-xl"
    exact-active-class="bg-green-600 border-r-[10px] border-red-100 text-white"
    :to="to"
  >
    <component :is="icon" />
    <span>{{ label }}</span>
  </NuxtLink>
</template>

<script>
import Vue from 'vue'

import CaretDownIcon from '~/assets/icons/caret-down.svg?inline'

export default Vue.extend({
  components: {
    CaretDownIcon,
  },
  props: {
    children: {
      type: Array,
      default: undefined,
      required: false,
    },
    to: {
      type: String,
      default: undefined,
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isChildMatched() {
      if (!this.children) {
        return false
      }
      return this.children.some((child) => child.to === this.$route.path)
    },
  },
})
</script>

<style lang="postcss" scoped>
.arrow {
  @apply transition-transform duration-300 ease-in-out-back transform rotate-90;
}

details[open] .arrow {
  @apply rotate-0;
}
</style>
