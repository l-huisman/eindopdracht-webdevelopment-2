<script lang="ts" setup>

</script>

<template>
  <header class="flex justify-between items-center px-10 py-5 bg-gray-50 drop-shadow-sm">
    <h1 class="text-2xl">Calendar App</h1>
    <nav>
      <router-link class="router-link" to="/login">Login</router-link>
      <router-link class="router-link" to="/get-started">Register</router-link>
      <router-link class="router-link" to="/admin-dashboard">Admin</router-link>
      <router-link class="router-link" to="/calendar">Calendar</router-link>
      <router-link class="router-link" to="/logout">Logout</router-link>

      <router-link class="special-button" to="/get-started">Get Started For Free</router-link>
    </nav>
  </header>
</template>

<style scoped>
.router-link {
  border: var(--color-cyan-900) 1px solid;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
}

.special-button {
  background-color: var(--color-cyan-900);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
}
</style>
