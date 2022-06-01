<template>
  <StepLayout
    title="Firm Registration"
    subtitle="You are one step away from completing your registration."
    :steps="steps"
  >
    <FormulateForm v-model="values" @submit="handleSubmit">
      <div class="grid grid-cols-2 gap-x-4 gap-y-8 mt-14">
        <div class="col-span-full">
          <FormulateInput
            label="Company Name"
            name="email"
            type="email"
            disabled
            ignore
          />
        </div>
        <div class="col-span-full">
          <FormulateInput label="Amount" name="amount" disabled ignore />
        </div>
        <div class="col-span-full">
          <FormulateInput
            type="radio-card"
            label="Payment Option"
            name="option"
            validation="required"
          >
            <div class="flex space-x-4">
              <RadioItem label="Pay with Debit Card" value="debit-card" />
              <RadioItem label="Pay with Remita" value="remita" />
            </div>
          </FormulateInput>
        </div>
      </div>
      <div class="flex mt-16 flex-center">
        <button class="py-4 text-lg btn btn-primary px-28 font-700">
          Proceed to payment
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
  name: 'FirmOnboardingPaymentPage',
  components: {
    StepLayout,
  },
  layout: 'auth',
  data() {
    return {
      steps: FIRM_ONBOARDING_STEPS,
      values: {
        email: 'test@co.com',
        amount: 'NGN 4,500',
      },
    }
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
