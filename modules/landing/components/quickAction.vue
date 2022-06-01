/* eslint-disable vue/no-v-html */
<template>
  <section class="w-full">
    <div class="flex flex-col mx-3 lg:mx-28 pt-28 pb-8">
      <h4 class="text-green-200 tracking-widest text-4xl font-700">
        QUICK ACTIONS
      </h4>
      <div
        class="flex flex-col items-center lg:flex-row lg:justify-between w-full mt-16"
      >
        <div
          v-for="item of actionData"
          :key="item.title"
          class="bg-green-25/5 rounded-3xl h-full lg:h-[219px] w-[228px] flex-col flex items-center py-9 my-2 lg:my-0"
        >
          <img :src="item.image" />
          <p
            class="text-green-400 text-xl font-500 mt-6 text-center"
            v-html="item.title"
          ></p>
        </div>
      </div>
      <h4 class="text-green-200 tracking-widest text-4xl font-700 mt-28">
        MEET THE PRESIDENT
      </h4>
    </div>
  </section>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'QuickAction',
  data() {
    return {
      actionData: [
        {
          image:
            'https://res.cloudinary.com/coren/image/upload/v1643853698/Frame_cnvn43.svg',
          title: `<span>Make a<br />Payment</span>`,
        },
        {
          image:
            'https://res.cloudinary.com/coren/image/upload/v1643853715/Frame_1_lp68vj.svg',
          title: `<span>Pay from<br />Remita</span>`,
        },
        {
          image:
            'https://res.cloudinary.com/coren/image/upload/v1643853715/Frame_2_tfsz4t.svg',
          title: `<span>Request<br />Accreditation</span>`,
        },
        {
          image:
            'https://res.cloudinary.com/coren/image/upload/v1643853715/Frame_2_tfsz4t.svg',
          title: `<span>Go to<br />COREN Portal</span>`,
        },
        {
          image:
            'https://res.cloudinary.com/coren/image/upload/v1643853716/Frame_4_bdsinv.svg',
          title: `   <span>         Search for<br />
            Engineer or firm </span>`,
        },
      ],
    }
  },
})
</script>
