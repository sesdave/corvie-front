<template>
  <Popper
    trigger="clickToToggle"
    :options="popperOptions"
    @show="toggleShown"
    @hide="toggleShown"
  >
    <div class="wrapper">
      <div class="animation-container">
        <div data-arrow class="arrow"></div>
        <slot />
      </div>
    </div>
    <slot slot="reference" :isShown="isShown" name="button" />
  </Popper>
</template>

<script>
import Popper from 'vue-popperjs'

const defaultOptions = {}

export default {
  components: {
    Popper,
  },
  props: {
    offsetX: {
      type: String,
      default: '0px',
    },
    offsetY: {
      type: String,
      default: '10px',
    },
  },
  data() {
    return {
      isShown: false,
    }
  },
  computed: {
    popperOptions() {
      return {
        ...defaultOptions,
        modifiers: {
          offset: {
            offset: `${this.offsetX}, ${this.offsetY}`,
          },
          arrow: {
            element: '[data-arrow]',
          },
        },
      }
    },
  },
  methods: {
    toggleShown() {
      this.isShown = !this.isShown
    },
  },
}
</script>

<style scoped>
.arrow {
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: white;
  position: absolute;
  top: -18px;
  left: 0;
}

.animation-container {
  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.2))
    drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03))
    drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08));

  transform-origin: 50% 0%;
  animation: fade-in 200ms ease,
    slide-in 400ms theme('transitionTimingFunction.out-expo');
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slide-in {
  from {
    transform: scale(0.8) translateY(-25px);
  }

  to {
    transform: scale(1) translateY(0);
  }
}
</style>
