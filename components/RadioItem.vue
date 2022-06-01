<template>
  <label class="w-full cursor-pointer">
    <input
      v-model="context.model"
      class="sr-only"
      type="radio"
      :name="context.name"
      :value="value"
    />
    <div
      class="flex items-center justify-between px-8 rounded-md radio-card input"
      :class="{
        'h-14': size === 'sm',
        'h-20': size === 'md',
        'h-32': size === 'lg',
      }"
    >
      <div v-if="size === 'sm'" class="flex items-center space-x-5">
        <span class="">{{ label }}</span>
      </div>
      <div v-if="size === 'md'" class="flex items-center space-x-5">
        <component :is="icon" width="40" height="40" />
        <span class="">{{ label }}</span>
      </div>
      <div v-if="size === 'lg'" class="flex flex-col items-start">
        <component :is="icon" width="57" height="57" />
        <span class="mt-2 text-left font-rope">{{ label }}</span>
        <span class="text-lg font-700 font-rope">NGN {{ subtext }}</span>
      </div>
    </div>
  </label>
</template>

<script>
export default {
  name: 'RadioItem',

  inject: ['context'],
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: Object,
      default: undefined,
    },
    size: {
      type: String,
      default: 'md',
    },
    subtext: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="postcss" scoped>
.radio-card::after {
  content: '';
  display: block;
  background-image: url('~/assets/icons/checkmark-box.svg?data');
  width: 24px;
  height: 24px;
  opacity: 0;
}

input:checked ~ .radio-card {
  @apply bg-green-50 border-green-200/75 text-green-900;
}

input:checked ~ .radio-card::after {
  opacity: 1;
}
</style>
1
