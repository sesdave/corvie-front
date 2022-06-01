<template>
  <div class="relative">
    <button class="absolute top-0 left-0" @click="handleBack">
      <BackIcon />
    </button>
    <div class="text-center">
      <h1 class="text-3xl font-700">{{ title }}</h1>
      <p class="mt-4 text-lg font-rope">{{ subtitle }}</p>
    </div>

    <div class="flex justify-center mt-14">
      <button class="px-8 py-3 text-green-200 font-500 btn btn-outline">
        See application & payment guides
      </button>
    </div>

    <div class="mt-20">
      <FormStep :steps="steps" />
    </div>

    <div>
      <slot />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import FormStep from './FormStep.vue'
import BuildingIcon from '~/assets/icons/building-iso.svg?inline'
import EngineeringIcon from '~/assets/icons/engineering.svg?inline'
import BackIcon from '~/assets/icons/back.svg?inline'

export default Vue.extend({
  name: 'FirmSignupPage',
  components: {
    BackIcon,
    FormStep,
  },
  props: {
    steps: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return { BuildingIcon, EngineeringIcon }
  },
  methods: {
    handleBack() {
      this.$router.back()
    },
  },
})
</script>
