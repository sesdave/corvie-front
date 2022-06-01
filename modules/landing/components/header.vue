<template>
  <header class="sticky top-0 z-50 flex-none w-full bg-white">
    <nav
      class="flex flex-row justify-start mx-3 lg:justify-between lg:mx-28 py-9"
    >
      <div>
        <Nuxt-link to="/">
          <img
            src="https://res.cloudinary.com/coren/image/upload/v1643843751/MainLogo-Coren_1_uduqb5.png"
            alt=""
          />
        </Nuxt-link>
      </div>
      <div
        class="flex-row items-center justify-between hidden ml-5 text-base lg:flex font-500"
      >
        <a class="mx-5 text-green-400">Home</a>
        <a class="mx-5 text-green-400">About</a>
        <a class="mx-5 text-green-400">Accreditation</a>
        <a class="mx-5 text-green-400">Download Resources</a>
        <a class="mx-5 text-green-400">Eye Witness</a>
      </div>
      <div class="flex-row hidden lg:flex">
        <button class="px-8 py-2 mx-1 text-base btn btn-outline font-700">
          Log In
        </button>
        <button
          class="px-8 py-2 mx-1 text-base btn btn-primary font-700"
          @click="isModalVisible = !isModalVisible"
        >
          Register
        </button>
      </div>
      <div class="flex lg:hidden">
        <button @click="isNavVisible = !isNavVisible">show nav</button>
      </div>
    </nav>
    <transition name="drawer-slide">
      <div
        v-show="isNavVisible"
        class="absolute top-0 left-0 z-30 flex flex-col w-0 h-screen px-2 py-2 bg-white lg:hidden"
        :class="{ 'w-2/4': isNavVisible }"
      >
        <Nuxt-link to="/">
          <img
            src="https://res.cloudinary.com/coren/image/upload/v1643843751/MainLogo-Coren_1_uduqb5.png"
            alt=""
          />
        </Nuxt-link>
        <div
          class="flex flex-col items-center justify-between my-5 text-base font-500"
        >
          <a class="my-2 text-green-400">Home</a>
          <a class="my-2 text-green-400">About</a>
          <a class="my-2 text-green-400">COREN Portal</a>
          <a class="my-2 text-green-400">Accreditation</a>
          <a class="my-2 text-green-400">Download Resources</a>
          <a class="my-2 text-green-400">Eye Witness</a>
        </div>
        <div class="flex flex-col">
          <button class="px-8 py-2 mx-1 text-base btn btn-outline font-700">
            Log In
          </button>
          <button
            class="px-8 py-2 my-1 text-base btn btn-primary font-700"
            @click="
              isModalVisible = !isModalVisible
              isNavVisible = !isNavVisible
            "
          >
            Register
          </button>
        </div>
      </div>
    </transition>
    <transition name="mask-fade">
      <div
        v-show="isNavVisible"
        class="absolute top-0 right-0 z-20 flex w-0 h-screen bg-green-900/30 lg:hidden"
        :class="{ 'w-screen': isNavVisible }"
        @click="isNavVisible = !isNavVisible"
      ></div>
    </transition>
    <Modal
      :show="isModalVisible"
      size="md"
      @close="isModalVisible = !isModalVisible"
    >
      <template #content>
        <register
          @firmNav="
            isModalVisible = !isModalVisible
            $router.push({ path: '/signup/firm-information' })
          "
          @personnelNav="
            isModalVisible = !isModalVisible
            $router.push({ path: '/signup/personnel-information' })
          "
        />
      </template>
    </Modal>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Modal from '~/components/Modal.vue'
import Register from '~/modules/auth/components/register.vue'
export default Vue.extend({
  name: 'LandingHeader',
  components: { Modal, Register },
  data() {
    return {
      isModalVisible: false,
      isNavVisible: false,
    }
  },
})
</script>

<style>
.drawer-slide-enter,
.drawer-slide-leave-to {
  transform: translateX(-1000px);
}

.drawer-slide-enter-active,
.drawer-slide-leave-active {
  transition: transform 0.5s ease;
}
.mask-fade-enter,
.mask-fade-leave-to {
  opacity: 0;
}

.mask-fade-enter-active,
.mask-fade-leave-active {
  transition: opacity 0.2s ease;
}
</style>
