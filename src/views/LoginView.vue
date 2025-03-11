<script lang="ts" setup>
import axios from 'axios';

import router from "@/router";
import {ref} from 'vue';
import NavigationBar from "@/views/NavigationBar.vue";

const email = ref<string>('');
const password = ref<string>('');
const rememberMe = ref<boolean>(false);

const login = () => {
  const emailError = document.getElementById('emailError') as HTMLLabelElement;
  const passwordError = document.getElementById('passwordError') as HTMLLabelElement;
  emailError.textContent = passwordError.textContent = '';

  // Guard clause to check if the email and password are empty
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

  axios.post('http://localhost:3000/login', {
    email: email.value,
    password: password.value,
  }).then(response => {
    if (response.status === 200) {
      console.log(response);
    }
  }).catch(error => {
    if (error.response.status === 401) {
      emailError.textContent = 'Invalid email or password';
    }
  });
}

const showPassword = () => {
  const passwordInput = document.getElementById('password') as HTMLInputElement;
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }

  // Change the button text to Show or Hide
  const button = document.querySelector('button') as HTMLButtonElement;
  button.textContent = passwordInput.type === 'password' ? 'Show' : 'Hide';
}
</script>

<template>
  <div class="flex flex-col h-svh">
    <NavigationBar/>
    <main class="h-full flex justify-center items-center">
      <div
        class="w-sm px-10 py-5 flex flex-col justify-center items-center gap-5 bg-gray-50 drop-shadow-sm">
        <h1 class="text-2xl">Login</h1>
        <form class="flex flex-col gap-3 w-72">
          <div class="flex flex-col gap-1">
            <label class="text-sm" for="email">Email</label>
            <input id="email" v-model="email" class="border-2 p-2 border-gray-300" type="email"/>
            <p id="emailError" class="text-sm text-red-600"></p>
          </div>
          <div>
            <label class="text-sm" for="password">Password</label>
            <div class="border-2 border-gray-300 flex items-center gap-0.5">
              <input id="password" v-model="password" class="p-2 w-4 flex-1"
                     type="password"/>
              <button class="text-sm h-10 w-16 hover:bg-gray-300 bg-gray-200 active:bg-gray-400"
                      @click.prevent="showPassword">Show
              </button>
            </div>
            <p id="passwordError" class="text-sm text-red-600"></p>
          </div>
          <router-link class="text-sm text-cyan-900" to="/forgot-password">Forgot password?
          </router-link>
          <div class="flex items-center gap-2 mt-1">
            <input id="remember-me" v-model="rememberMe" type="checkbox"/>
            <label class="text-sm" for="remember-me">Remember me</label>
          </div>
          <button class=" my-2 bg-cyan-900 py-2.5 text-white" @click.prevent="login">Login
          </button>
        </form>
        <router-link class="text-sm text-cyan-900 my-2" to="/get-started">Don't have an account?
          Register
        </router-link>
      </div>
    </main>
  </div>
</template>
