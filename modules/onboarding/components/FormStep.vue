<template>
  <div class="flex justify-between">
    <div
      v-for="(item, idx) in steps"
      :key="item.name"
      class="flex flex-col items-center flex-1 step"
    >
      <div
        class="flex w-12 h-12 rounded-full flex-center font-500"
        :class="{
          'bg-green-200 text-white': idx <= active,
          'border-2 border-current bg-white text-green-200': idx > active,
        }"
      >
        <CheckIcon v-if="idx < active" />
        <span v-else>{{ idx + 1 }}</span>
      </div>
      <div class="mt-8 text-sm text-rope">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import CheckIcon from '~/assets/icons/checkmark.svg?inline'

export default Vue.extend({
  name: 'FormStep',
  components: {
    CheckIcon,
  },

  props: {
    steps: {
      type: Array,
      required: true,
    },
  },

  computed: {
    active() {
      return this.steps.findIndex((step) => step.path === this.$route.path)
    },
  },
})
</script>

<style scoped>
.step {
  --radius: 25%;
  --thickness: 2px;
  --offset: 24px;
  --color: theme('colors.green.200');

  background-image: linear-gradient(var(--color), var(--color)),
    linear-gradient(var(--color), var(--color));
  background-size: var(--radius) var(--thickness),
    var(--radius) var(--thickness);
  background-position: top var(--offset) left 0, top var(--offset) right 0;
  background-repeat: no-repeat;
}

.step:first-child {
  background-image: linear-gradient(var(--color), var(--color));
  background-size: var(--radius) var(--thickness);
  background-position: top var(--offset) right 0;
}

.step:last-child {
  background-image: linear-gradient(var(--color), var(--color));
  background-size: var(--radius) var(--thickness);
  background-position: top var(--offset) left 0;
}
</style>
