<script setup lang="ts">

</script>

<template>
  <main class="h-svh flex justify-center items-center">
    <div class="w-sm px-10 py-5 flex  flex-col justify-center gap-5 bg-gray-50 drop-shadow-sm">
      <h1 class="text-2xl">Login</h1>
      <form class="flex flex-col gap-3">
        <label class="text-sm" for="email">Email</label>
        <input class="border-2 p-2 border-gray-300" type="email" id="email"/>
        <label class="text-sm" for="password">Password</label>
        <input class="border-2 p-2 border-gray-300" type="password" id="password"/>
        <div class="flex items-center gap-2 mt-1">
          <input type="checkbox" id="remember-me"/>
          <label class="text-sm" for="remember-me">Remember me</label>
        </div>
        <button class="mt-3 mb-3 bg-cyan-900 py-2.5 text-white">Login</button>
      </form>
    </div>
  </main>
</template>

<style scoped>

</style>
