<template>
  <div class="text-center">
    <div
      class="bg-green-50 rounded-full mx-auto flex flex-center w-[184px] h-[184px]"
    >
      <TrophyIcon />
    </div>

    <h1 class="mt-10 text-3xl font-700">Congratulations!!!</h1>
    <p class="text-lg font-manrope">You have completed your registration.</p>

    <div class="mt-14">
      <button class="px-32 py-4 btn btn-primary font-700">Log in</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TrophyIcon from '~/assets/icons/trophy.svg?inline'

export default Vue.extend({
  name: 'FirmOnboardingInformationPage',
  components: {
    TrophyIcon,
  },
  layout: 'auth',
})
</script>
