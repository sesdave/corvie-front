<template>
  <section class="w-full" style="background: rgba(13, 180, 49, 0.08)">
    <div
      class="flex flex-col-reverse lg:flex-row mx-3 px-3 py-7 lg:py-0 lg:mx-28 justify-between items-center"
    >
      <div class="flex flex-col w-full lg:w-6/12">
        <h1 class="text-green-400 text-[40px] font-700">
          Engr. Ali Alimasuya <br />
          Rabiu <span class="text-base">FNSE</span>
        </h1>
        <p class="text-xl font-400 font-rope text-green-400 mt-6 lg:mt-11">
          Engr. Ali .Alimasuya Rabiu FNSE, was Born on April 24th, 1963, in<br />
          Lafia, Nasarawa State . He is a Registered Engineer, Fellow of the<br />
          Nigerian Society of Engineers and was a COREN Council Member.
        </p>
        <button class="btn btn-primary py-3 w-full lg:w-80 mt-7 lg:mt-14">
          View Profile
        </button>
      </div>
      <div class="flex flex-col py-6 w-full lg:w-5/12 items-center">
        <img
          src="https://res.cloudinary.com/coren/image/upload/v1643855442/Group_128_r2ivqe.svg"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'PresidentComp',
})
</script>
