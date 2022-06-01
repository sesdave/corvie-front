import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'

Vue.use(VueFormulate, {
  library: {
    'radio-card': {
      component: 'RadioField',
    },
    file: {
      slotComponents: {
        element: 'DocumentInputSlot',
      },
    },
  },
  slotComponents: {
    label: 'LabelSlot',
  },
  classes: {
    input: 'input',
    errors: 'input-errors',
  },
})
