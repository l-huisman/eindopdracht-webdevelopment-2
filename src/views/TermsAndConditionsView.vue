<script lang="ts" setup>

import NavigationBar from "@/views/NavigationBar.vue";
</script>

<template>
  <div class="flex flex-col h-svh">
    <NavigationBar/>
    <main class="h-svh flex flex-col items-center gap-5">
      <div class="w-128 mb-5 py-5 border-b-[1px] flex">
        <h1 class="text-2xl">Terms and Conditions</h1>
      </div>
      <p class="w-128">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi
        commodi distinctio
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi commodi distinctio
        eaque magni mollitia
        numquam repellendus sint voluptas! Fuga sit, totam. Hic possimus quos unde vel. Corporis,
        similique, voluptate.</p>
      <div class="w-128 mb-5 py-5 border-b-[1px] flex">
        <h2 class="text-xl">Introduction</h2>
      </div>
      <p class="w-128">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi
        commodi distinctio
        eaque magni mollitia numquam repellendus sint voluptas! Fuga sit, totam. Hic possimus quos
        unde vel. Corporis, similique, voluptate.</p>
      <div class="w-128 mb-5 py-5 border-b-[1px] flex">
        <h2 class="text-xl">Acceptance of Terms</h2>
      </div>
      <p class="w-128">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi
        commodi distinctio
        eaque magni mollitia numquam repellendus sint voluptas! Fuga sit, totam. Hic possimus quos
        unde vel. Corporis, similique, voluptate.</p>
      <div class="w-128 mb-5 py-5 border-b-[1px] flex">
        <h2 class="text-xl">Eligibility</h2>
      </div>
      <p class="w-128">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi
        commodi distinctio
        eaque magni mollitia numquam repellendus sint voluptas! Fuga sit, totam. Hic possimus quos
        unde vel. Corporis, similique, voluptate.</p>
      <div class="w-128 mb-5 py-5 border-b-[1px] flex">
        <h2 class="text-xl">Privacy Policy</h2>
      </div>
      <p class="w-128">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi
        commodi distinctio
        eaque magni mollitia numquam repellendus sint voluptas! Fuga sit, totam. Hic possimus quos
        unde vel. Corporis, similique, voluptate.</p>
      <router-link class="text-cyan-900 underline" to="/get-started">Continue registering
      </router-link>
    </main>
  </div>
</template>
