<template>
  <StepLayout
    title="Firm Registration"
    subtitle="You are one step away from completing your registration."
    :steps="steps"
  >
    <FormulateForm>
      <div class="mt-14">
        <FormulateInput
          label="CAC Document"
          type="file"
          name="cacDocument"
          validation="required"
          prompt="Upload CAC Document"
        >
          <template #element="context">
            <DocumentInputSlot :context="context" />
          </template>
        </FormulateInput>
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

export default Vue.extend({
  name: 'FirmOnboardingDocumentPage',
  components: {
    StepLayout,
  },
  layout: 'auth',
  data() {
    return { steps: FIRM_ONBOARDING_STEPS }
  },
})
</script>
