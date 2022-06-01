<template>
  <StepLayout
    title="Firm Registration"
    subtitle="Great job! You are on track"
    :steps="steps"
  >
    <FormulateForm @submit="handleSubmit">
      <div class="grid grid-cols-2 gap-x-4 gap-y-8 mt-14">
        <div class="col-span-full">
          <FormulateInput
            label="Email Address"
            name="email"
            validation="required"
            type="email"
            placeholder="E.g hello@example.com"
          />
        </div>
        <div class="col-span-full">
          <FormulateInput
            label="Confirm Email Address"
            name="confirmEmail"
            type="email"
            validation="required"
            placeholder="E.g hello@example.com"
          />
        </div>
        <FormulateInput
          label="Password"
          name="password"
          type="password"
          validation="required"
        />
        <FormulateInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          validation="required"
        />
      </div>
      <div class="flex mt-16 flex-center">
        <button class="py-4 text-lg btn btn-primary px-28 font-700">
          Continue
        </button>
      </div>
    </FormulateForm>
  </StepLayout>
</template>

<script>
import Vue from 'vue'
import StepLayout from '~/modules/onboarding/components/StepLayout.vue'
import { FIRM_ONBOARDING_STEPS } from '~/modules/onboarding/constants'
import { handleOnbordingNext } from '~/modules/onboarding/utils'

export default Vue.extend({
  name: 'FirmOnboardingAccountPage',
  components: {
    StepLayout,
  },
  layout: 'auth',
  data() {
    return { steps: FIRM_ONBOARDING_STEPS }
  },
  methods: {
    handleSubmit(values) {
      const nextRoute = handleOnbordingNext(
        values,
        this.steps,
        this.$route.path
      )

      this.$router.push(nextRoute)
    },
  },
})
</script>
