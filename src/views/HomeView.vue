<script lang="ts" setup>

import NavigationBar from "@/views/NavigationBar.vue";
</script>

<template>
  <NavigationBar/>
  <main class="px-10 py-5 flex flex-1 flex-col justify-center">
    <h2 class="text-2xl">Welcome to the Calendar App</h2>
    <p class="text-lg mt-1">This is a simple calendar app built with Vue 3 and Vite.</p>
    <div class=" text-white mt-5">
      <router-link class="bg-cyan-900 py-2.5 px-10" to="/login">Sign up now</router-link>
    </div>
  </main>
  <footer class="px-10 py-5 bg-gray-50 drop-shadow-sm">
    <p>&copy; 2025 Calendar App</p>
  </footer>
</template>

