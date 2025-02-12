<script setup lang="ts">

</script>

<template>
  <header class="flex justify-between items-center px-10 py-5 bg-gray-50 drop-shadow-sm">
    <h1 class="text-2xl">Calendar App</h1>
    <nav >
      <router-link to="/get-started" class="router-link">Get Started For Free</router-link>
    </nav>
  </header>
  <main class="px-10 py-5">
    <h2 class="text-2xl">Welcome to the Calendar App</h2>
    <p class="text-lg mt-1">This is a simple calendar app built with Vue 3 and Vite.</p>
    <router-link to="/login" class="bg-cyan-950 text-white px-10 py-2.5 mt-5">Sign up now</router-link>
  </main>
</template>

<style scoped>
.router-link {
  border: #333 1px solid;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
}
</style>
