<template>
  <section class="w-full mt-36">
    <h4 class="text-green-200 tracking-widest text-4xl font-700 mx-3 lg:mx-28">
      NEWSLETTER
    </h4>
    <div class="flex flex-col lg:flex-row mt-11">
      <div
        class="flex-col flex newsletter-card w-full lg:w-6/12 py-20 px-3 lg:px-28 h-full lg:h-[473px]"
      >
        <h1 class="text-[40px] font-700 text-white">
          Subscribe To Our <br />
          Newsletter Today
        </h1>
        <p class="font-rope text-xl font-500 text-white">
          By subscribing to our mailing list you will always<br />
          be update with the latest news from us.
        </p>
        <div class="flex flex-row mt-10 w-full">
          <input
            style="border-radius: 30px; outline: none"
            class="py-5 px-8 mr-1 w-3/4"
            type="text"
            placeholder="Enter your email"
          />
          <button class="btn btn-primary py-4 px-5">Subscribe</button>
        </div>
      </div>
      <div class="flex-col flex w-full lg:w-6/12">
        <img
          class="w-full h-full"
          src="https://res.cloudinary.com/coren/image/upload/v1643884746/Mask_Group_5_saouxr.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'NewsLetterComp',
})
</script>

<style scoped>
.newsletter-card {
  background-image: url('https://res.cloudinary.com/coren/image/upload/v1643884485/100_x0v2uv.svg');
  height: 473px;
}
</style>
