<template>
  <StepLayout
    title="Firm Registration"
    subtitle="You can start your application if you are not yet registered"
    :steps="steps"
  >
    <FormulateForm @submit="handleSubmit">
      <div class="grid grid-cols-2 gap-x-4 gap-y-8 mt-14">
        <div class="col-span-full">
          <FormulateInput
            label="Name of Company"
            name="name"
            validation="required"
            placeholder="E.g  Samkins Technology"
          />
        </div>

        <FormulateInput
          label="Year Of Incorporation"
          name="year"
          type="text"
          validation="required"
          placeholder="E.g  2013"
        />

        <FormulateInput
          label="State of Practice"
          name="state"
          type="select"
          validation="required"
          placeholder="E.g  Lagos"
          :options="stateOptions"
        />
        <div class="col-span-full">
          <FormulateInput
            label="RC Number"
            name="rcNumber"
            validation="required"
            placeholder="E.g  234567891"
          />
        </div>
        <div class="col-span-full">
          <FormulateInput
            type="radio-card"
            name="type"
            label="Firm Type"
            validation="required"
          >
            <div class="flex space-x-4">
              <RadioItem
                v-for="item in firmTypeOptions"
                :key="item.value"
                :icon="item.icon"
                :label="item.label"
                :value="item.value"
              />
            </div>
          </FormulateInput>
        </div>
        <div class="col-span-full">
          <FormulateInput
            label="Firm Category"
            name="category"
            type="select"
            validation="required"
            placeholder="Please choose from the list"
            :options="firmCategoryOptions"
          />
        </div>
        <div class="col-span-full">
          <FormulateInput
            label="Firm Size"
            name="size"
            type="select"
            validation="required"
            placeholder="Please choose from the list"
            :options="firmSizeOptions"
          />
        </div>
        <div class="col-span-full">
          <FormulateInput
            label="Registration Type"
            name="registrationType"
            type="select"
            validation="required"
            placeholder="Select CAC Reg. Type"
            :options="regTypeOptions"
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
import BuildingIcon from '~/assets/icons/building-iso.svg?inline'
import EngineeringIcon from '~/assets/icons/engineering.svg?inline'
import StepLayout from '~/modules/onboarding/components/StepLayout.vue'
import {
  FIRM_ONBOARDING_STEPS,
  STATE_OPTIONS,
} from '~/modules/onboarding/constants'
import { handleOnbordingNext } from '~/modules/onboarding/utils'

const FIRM_TYPE_OPTIONS = [
  {
    label: 'Consulting Firm',
    value: 'Consulting',
    icon: BuildingIcon,
  },
  {
    label: 'Engineering Firm',
    value: 'Engineering',
    icon: EngineeringIcon,
  },
]

const REG_TYPE_OPTIONS = [
  {
    label: 'Corporate',
    value: '4',
  },
  {
    label: 'Limited Liability',
    value: '3',
  },
  {
    label: 'Partnership',
    value: '2',
  },
  {
    label: 'Sole Proprietorship',
    value: '1',
  },
]

const FIRM_CATEGORY_OPTIONS = [
  {
    label: 'Engineering (Special) Services Provision',
    value: '4',
  },
  {
    label: 'Engineering Construction',
    value: '1',
  },
  {
    label: 'Engineering Fabrication/Repairs/Maintenance',
    value: '5',
  },
  {
    label: 'Engineering Manufacturing / Production',
    value: '2',
  },
  {
    label: 'Engineering Vendoring',
    value: '3',
  },
]

const FIRM_SIZE_OPTIONS = [
  {
    label: 'A (For Business Value N1m - N20m)',
    value: '1',
  },
  {
    label: 'B (For Business Value N21m - N100m)',
    value: '2',
  },
  {
    label: 'C (For Business value N101m – N500m)',
    value: '3',
  },
  {
    label: 'D (For Business Value > N500m)',
    value: '4',
  },
]

export default Vue.extend({
  name: 'FirmOnboardingInformationPage',
  components: {
    StepLayout,
  },
  layout: 'auth',
  data() {
    return {
      BuildingIcon,
      EngineeringIcon,
      steps: FIRM_ONBOARDING_STEPS,
      stateOptions: STATE_OPTIONS,
      regTypeOptions: REG_TYPE_OPTIONS,
      firmSizeOptions: FIRM_SIZE_OPTIONS,
      firmTypeOptions: FIRM_TYPE_OPTIONS,
      firmCategoryOptions: FIRM_CATEGORY_OPTIONS,
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
