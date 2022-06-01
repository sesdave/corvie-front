<template>
  <section class="w-full">
    <div class="flex flex-col lg:flex-row">
      <div
        class="left-rect px-4 lg:pl-28 py-28 w-full lg:w-[70%] bg-green-700 h-full lg:h-[747px]"
      >
        <div class="flex flex-col">
          <h1 class="text-6xl font-700 text-white">
            Become A Registered<br />
            & Recognized<br />
            Engineer Today
          </h1>
          <p class="text-white text-xl font-rope font-400 mt-4">
            We have made it super easy to become a certified<br />
            engineer in Nigeria. Let's help you begin the process.
          </p>
          <button class="btn btn-primary px-14 py-4 w-full lg:w-80 mt-11">
            Start application here
          </button>
        </div>
      </div>
      <div
        class="right-rect static lg:relative w-full lg:w-[30%] px-4 lg:px-0 py-28 lg:py-0 h-full lg:h-[747px]"
      >
        <img
          class="lg:absolute w-full lg:min-w-[654px] lg:top-[22px] lg:right-[100px]"
          src="https://res.cloudinary.com/coren/image/upload/v1643848546/Group_145_mvdq6u.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'HeroComp',
})
</script>

<style lang="css" scoped>
.left-rect {
  background-image: url('https://res.cloudinary.com/coren/image/upload/v1643853324/Patterns_szmkhg.svg');
}
.right-rect {
  background: #0db431;
  min-height: 747px;
}
</style>
