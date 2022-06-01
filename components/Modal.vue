<template>
  <div
    class="fixed inset-0 flex items-start justify-center py-16 overflow-auto"
    :class="{ 'pointer-events-none': !show }"
  >
    <transition name="fade-in">
      <div
        v-if="show"
        class="fixed inset-0 bg-green-900/50 backdrop-filter backdrop-blur-sm"
        @click="$emit('close')"
      />
    </transition>
    <transition name="scale-fade">
      <div
        v-if="show"
        class="relative flex flex-col bg-white rounded-3xl"
        :class="{
          'w-11/12 lg:w-2/6': size == 'sm',
          'w-11/12 lg:w-6/12': size == 'md',
          'w-11/12 lg:w-10/12': size == 'lg',
        }"
      >
        <div class="relative flex flex-col px-14 py-14">
          <div class="flex justify-end">
            <button @click="$emit('close')">
              <CloseIcon />
            </button>
          </div>
          <slot name="content" />
          <!-- <div class="h-80"></div> -->
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Vue from 'vue'
import CloseIcon from '~/assets/icons/close.svg?inline'
export default Vue.extend({
  name: 'ModalComponent',
  components: { CloseIcon },
  props: {
    size: {
      type: String,
      default: 'md',
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return { CloseIcon }
  },
  watch: {
    show(isShown) {
      const body = document.body
      if (isShown) {
        const scrollbarWidth = body.offsetWidth - body.clientWidth
        body.style.overflow = 'hidden'
        body.style.paddingRight = scrollbarWidth
      } else {
        body.style.overflow = ''
        body.style.paddingRight = ''
      }
    },
  },
})
</script>

<style scoped>
.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: 400ms linear;
}

.fade-in-leave-active {
  transition: 200ms linear;
  transition-delay: 300ms;
}

.scale-fade-enter,
.scale-fade-leave-to {
  transform: scale(0.5);
  opacity: 0;
}

.scale-fade-enter-active {
  transition: transform 400ms theme('transitionTimingFunction.out-expo'),
    opacity 200ms linear;
  transition-delay: 100ms, 100ms;
}

.scale-fade-leave-active {
  transition: transform 300ms theme('transitionTimingFunction.in-expo'),
    opacity 200ms linear 100ms;
}
</style>
