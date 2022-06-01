<template>
  <StepLayout
    title="Personnel Registration"
    subtitle="You can start your application if you are not yet registered"
    :steps="steps"
  >
    <FormulateForm @submit="handleSubmit">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 mt-14">
        <FormulateInput
          label="Live and work in Nigeria?"
          name="location"
          type="select"
          validation="required"
          placeholder="Please choose"
          :options="['Yes', 'No']"
        />
        <FormulateInput
          label="State of Practice"
          name="state"
          type="select"
          validation="required"
          placeholder="Please select from the list"
          :options="stateOptions"
        />
        <div class="col-span-full">
          <FormulateInput
            validation="required"
            label="What category do you fall under?"
            name="catOption"
            type="radio-card"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4">
              <RadioItem label="Nigerian" value="Nigerian" size="sm" />
              <RadioItem label="Expatriate" value="exp" size="sm" />
            </div>
          </FormulateInput>
        </div>
        <div class="col-span-full">
          <FormulateInput
            type="radio-card"
            name="firmType"
            label="Firm Type"
            validation="required"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4">
              <RadioItem
                v-for="item in firmTypes"
                :key="item.label"
                size="lg"
                :icon="item.icon"
                :label="item.label"
                :value="item.label"
                :subtext="item.price"
              />
            </div>
          </FormulateInput>
        </div>
        <FormulateInput
          label="Proposer 1"
          name="proposer_1"
          validation="required"
          placeholder="Eg R1525262"
        />
        <FormulateInput
          label="Proposer 2"
          name="proposer_2"
          validation="required"
          placeholder="Eg R1525262"
        />
        <div class="col-span-full">
          <FormulateInput
            validation="required"
            label="Are you a member of an Engineering Professional Body?*"
            name="proBody"
            type="radio-card"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4">
              <RadioItem label="Yes I am" value="Nigeria" size="sm" />
              <RadioItem label="No I am not" value="exp" size="sm" />
            </div>
          </FormulateInput>
        </div>
        <div class="col-span-full">
          <FormulateInput
            validation="required"
            label="Choose a professional body"
            placeholder="Please choose from the list"
            type="select"
            :options="professionalBodyOptions"
            name="professionalBody"
          />
        </div>
        <div class="col-span-full">
          <FormulateInput
            validation="required"
            label="Professional Membership Number"
            placeholder="E.g  234567891"
            name="membershipNumber"
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
import EngineerUser from '~/assets/icons/engineer-user.svg?inline'
import EngineerTechnician from '~/assets/icons/engineer-technician.svg?inline'
import EngineerTechnologist from '~/assets/icons/engineer-technologist.svg?inline'
import EngineerCraftsman from '~/assets/icons/engineer-craftsman.svg?inline'
import StepLayout from '~/modules/onboarding/components/StepLayout.vue'
import {
  PERSONNEL_ONBOARDING_STEPS,
  STATE_OPTIONS,
} from '~/modules/onboarding/constants'
import { handleOnbordingNext } from '~/modules/onboarding/utils'

const FIRM_TYPES = [
  {
    label: 'Engineer',
    icon: EngineerUser,
    price: '57,000',
  },
  {
    label: 'Engineer Technologist',
    icon: EngineerTechnologist,
    price: '57,000',
  },
  {
    label: 'Engineer Technician',
    icon: EngineerTechnician,
    price: '57,000',
  },
  {
    label: 'Engineering craftsmen',
    icon: EngineerCraftsman,
    price: '57,000',
  },
]

const PROFESSIONAL_BODIES = [
  {
    label: 'NAEC (Nigeria) - MNAEC',
    value: 'MNAEC',
  },
  {
    label: 'NATE (Nigeria) - MNATE',
    value: 'MNATE',
  },
  {
    label: 'NISET (Nigeria) - MNISET',
    value: 'MNISET',
  },
  {
    label: 'NSE (Nigeria) - MNSE',
    value: 'MNSE',
  },
  {
    label: 'NSE (Nigeria) - NSE PIN',
    value: 'NSE PIN',
  },

  {
    label: 'CCPE (Engineers Canada) - P.Eng',
    value: 'P.Eng',
  },
  {
    label: 'NCEES (USA) - PE',
    value: 'PE',
  },
  {
    label: 'Engineering Council (UK) - C.Eng',
    value: 'C.Eng',
  },
  {
    label: 'IET - IET',
    value: 'IET',
  },
]

export default Vue.extend({
  name: 'PersonnelOnboardingInformationPage',
  components: {
    StepLayout,
  },
  layout: 'auth',
  data() {
    return {
      firmTypes: FIRM_TYPES,
      steps: PERSONNEL_ONBOARDING_STEPS,
      stateOptions: STATE_OPTIONS,
      professionalBodyOptions: PROFESSIONAL_BODIES,
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
