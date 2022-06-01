<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex items-start justify-center flex-grow py-20 bg-green-50">
      <div
        class="w-full max-w-3xl p-16 pb-20 bg-white shadow-lg rounded-xl pt-"
      >
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '~/modules/landing/components/header.vue'

export default Vue.extend({
  name: 'AuthLayout',
  components: { Header },
})
</script>

<style scoped>
main {
  background-image: url('https://res.cloudinary.com/coren/image/upload/v1644096575/Patterns_1_vbetbm.svg');
}
</style>
