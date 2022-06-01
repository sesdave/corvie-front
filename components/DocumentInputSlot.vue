<template>
  <div>
    <label class="cursor-pointer" :for="context.id">
      <input
        :name="context.name"
        type="file"
        class="sr-only"
        @input="context.rootEmit('input', $event.target.files)"
      />
      <div class="flex items-center space-x-4 input">
        <div class="flex items-center p-2 space-x-2 bg-gray-200 rounded">
          <span
            class="inline-flex text-green-400 bg-white rounded-full shadow flex-center w-7 h-7"
          >
            <PlusIcon />
          </span>
          <span>Upload CAC Document</span>
        </div>
        <span>No file chosen yet</span>
      </div>
    </label>
  </div>
</template>

<script>
import Vue from 'vue'
import PlusIcon from '~/assets/icons/plus.svg?inline'

export default Vue.extend({
  name: 'DocumentInputSlot',
  components: {
    PlusIcon,
  },
  inheritAttrs: false,
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
})
</script>
