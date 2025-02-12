<template>
  <header class="flex flex-col justify-center text-center p-2 h-screen">
    <h1 class="text-5xl">404</h1>
    <h2 class="text-3xl mt-1">Page not found</h2>
    <p class="text-xl mt-2">The page you are looking for does not exist!<br>Return to the home page by button the link
      below.</p>
    <nav class="mt-8 text-2xl">
      <router-link to="/">Home</router-link>
    </nav>
  </header>
</template>

<style scoped>
nav a {
  color: darkcyan;
}

nav a:hover {
  text-decoration: underline;
}

</style>
