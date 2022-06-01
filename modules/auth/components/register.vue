<template>
  <div>
    <div class="text-center">
      <h1 class="text-3xl font-700">Registration</h1>
      <p class="mt-4 text-lg font-rope">
        You can start your application if you are not yet registered
      </p>
    </div>

    <div class="flex justify-center mt-14">
      <button class="px-8 py-3 text-green-200 font-500 btn btn-outline">
        See application & payment guides
      </button>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 mt-24">
      <button
        class="rounded-3xl bg-green-25/5 h-full lg:h-72 w-full flex flex-col items-center py-16"
        @click="$emit('firmNav')"
      >
        <BuildingIcon class="h-14 lg:h-[115px]" />

        <p class="font-500 text-xl mt-7 text-green-700">Register as a firm</p>
      </button>
      <button
        class="rounded-3xl bg-green-25/5 h-full lg:h-72 w-full flex flex-col items-center py-16"
        @click="$emit('personnelNav')"
      >
        <EngineeringIcon class="h-14 lg:h-[115px]" />

        <p class="font-500 text-xl mt-7 text-green-700">
          Register as a professional
        </p>
      </button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import BuildingIcon from '~/assets/icons/Building-red.svg?inline'
import EngineeringIcon from '~/assets/icons/engineer-red.svg?inline'

export default Vue.extend({
  name: 'RegisterModal',
  components: { BuildingIcon, EngineeringIcon },
  data() {
    return { BuildingIcon, EngineeringIcon }
  },
})
</script>
