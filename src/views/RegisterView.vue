<script setup lang="ts">
import {ref} from 'vue';
import router from "@/router";

const username = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');
const confirmPassword = ref<string>('');
const rememberMe = ref<boolean>(false);

const register = () => {
  const usernameError = document.getElementById('usernameError') as HTMLLabelElement;
  const emailError = document.getElementById('emailError') as HTMLLabelElement;
  const passwordError = document.getElementById('passwordError') as HTMLLabelElement;
  const confirmPasswordError = document.getElementById('confirmPasswordError') as HTMLLabelElement;

  usernameError.textContent = emailError.textContent = passwordError.textContent = confirmPasswordError.textContent = '';

  if (!username.value) {
    usernameError.textContent = 'Please enter your username';
    return;
  }

  if (!email.value) {
    emailError.textContent = 'Please enter your email';
    return;
  } else if (!email.value.includes('@')) {
    emailError.textContent = 'Please enter a valid email';
    return;
  }

  if (!password.value) {
    passwordError.textContent = 'Please enter your password';
    return;
  }

  if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = 'Passwords do not match';
    return;
  }

  if (rememberMe.value) {
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);

    // Save the username to local storage
    localStorage.setItem('username', username.value);

    // Redirect to the calendar page
    router.push('/calendar');
    return;
  }

  // Redirect to the calendar page
  router.push('/login');
}


const showPassword = (event: Event) => {
  const button = event.target as HTMLButtonElement;
  const passwordInput = button.previousElementSibling as HTMLInputElement;

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }

  button.textContent = passwordInput.type === 'password' ? 'Show' : 'Hide';
}
</script>

<template>
  <main class="h-svh flex justify-center items-center">
    <div class="w-sm px-10 py-5 flex flex-col justify-center items-center gap-5 bg-gray-50 drop-shadow-sm">
      <h1 class="text-2xl">Register</h1>
      <form class="flex flex-col gap-3">
        <div class="flex flex-col gap-1">
          <label class="text-sm" for="username">Username</label>
          <input v-model="username" class="border-2 p-2 border-gray-300" type="text" id="username"/>
          <label id="usernameError" class="text-sm text-red-600" for="usernameError"></label>
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm" for="email">Email</label>
          <input v-model="email" class="border-2 p-2 border-gray-300" type="email" id="email"/>
          <label id="emailError" class="text-sm text-red-600" for="emailError"></label>
        </div>
        <div>
          <label class="text-sm" for="password">Password</label>
          <div class="border-2 border-gray-300 flex items-center gap-0.5">
            <input v-model="password" class="p-2 flex-1" type="password" id="password"/>
            <button class="text-sm h-10 w-16 hover:bg-gray-300 bg-gray-200 active:bg-gray-400" @click.prevent="showPassword($event)">Show</button>
          </div>
          <label id="passwordError" class="text-sm text-red-600" for="passwordError"></label>
        </div>
        <div>
          <label class="text-sm" for="confirm-password">Confirm Password</label>
          <div class="border-2 border-gray-300 flex items-center gap-0.5">
            <input v-model="confirmPassword" class="p-2" type="password" id="confirm-password"/>
            <button class="text-sm h-10 w-16 hover:bg-gray-300 bg-gray-200 active:bg-gray-400" @click.prevent="showPassword($event)">Show</button>
          </div>
          <label id="confirmPasswordError" class="text-sm text-red-600" for="confirmPasswordError"></label>
        </div>
        <div class="flex items-center gap-2 mt-1">
          <input v-model="rememberMe" type="checkbox" id="remember-me"/>
          <label class="text-sm" for="remember-me">Remember me</label>
        </div>
        <button @click.prevent="register" class="my-2 bg-cyan-900 py-2.5 text-white">Register</button>
        <router-link to="/login" class="text-center text-cyan-900 my-2">Already have a password?</router-link>
      </form>
    </div>
  </main>
</template>

<style scoped>

</style>
