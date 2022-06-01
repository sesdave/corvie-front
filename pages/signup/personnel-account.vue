<template>
  <StepLayout
    title="Firm Registration"
    subtitle="Great job! You are on track"
    :steps="steps"
  >
    <FormulateForm @submit="handleSubmit">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 mt-14">
        <FormulateInput
          label="First Name"
          name="firstName"
          validation="required"
          type="text"
          placeholder="Please type here"
        />
        <FormulateInput
          label="Last Name"
          name="lastName"
          type="text"
          validation="required"
          placeholder="Please type here"
        />
        <FormulateInput
          label="Email Address"
          name="email"
          validation="required"
          type="email"
          placeholder="E.g hello@example.com"
        />
        <FormulateInput
          label="Confirm Email Address"
          name="confirmEmail"
          type="email"
          validation="required"
          placeholder="E.g hello@example.com"
        />
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
        <div class="col-span-full">
          <FormulateInput
            label="Phone number"
            name="phoneNumber"
            type="tel"
            validation="required"
          />
        </div>
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
import { PERSONNEL_ONBOARDING_STEPS } from '~/modules/onboarding/constants'
import { handleOnbordingNext } from '~/modules/onboarding/utils'

export default Vue.extend({
  name: 'PersonnelOnboardingAccountPage',
  components: {
    StepLayout,
  },
  layout: 'auth',
  data() {
    return { steps: PERSONNEL_ONBOARDING_STEPS }
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
