<script lang="ts" setup>
import {ref} from 'vue';
import router from "@/router";
import NavigationBar from "@/views/NavigationBar.vue";
import axios from "axios";

const username = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');
const confirmPassword = ref<string>('');
const rememberMe = ref<boolean>(false);
const acceptTerms = ref<boolean>(false);

const register = () => {
  const usernameError = document.getElementById('usernameError') as HTMLLabelElement;
  const emailError = document.getElementById('emailError') as HTMLLabelElement;
  const passwordError = document.getElementById('passwordError') as HTMLLabelElement;
  const confirmPasswordError = document.getElementById('confirmPasswordError') as HTMLLabelElement;
  const termsError = document.getElementById('termsError') as HTMLLabelElement;

  usernameError.textContent = emailError.textContent = passwordError.textContent = confirmPasswordError.textContent = termsError.textContent = '';

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

  if (!acceptTerms.value) {
    termsError.textContent = 'You must accept the terms and conditions';
    return;
  }

  axios.post('http://localhost:3000/register', {
    username: username.value,
    email: email.value,
    password: password.value,
  }).then(response => {
    if (response.status === 201) {
      console.log(response.data);
    }
  })


  if (rememberMe.value) {
    return;
  }
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
  <div class="flex flex-col h-svh">
    <NavigationBar/>
    <main class="h-svh flex justify-center items-center">
      <div
        class="w-sm px-10 py-5 flex flex-col justify-center items-center gap-5 bg-gray-50 drop-shadow-sm">
        <h1 class="text-2xl">Get Started</h1>
        <form class="flex flex-col gap-3 w-72">
          <div class="flex flex-col gap-1">
            <label class="text-sm" for="username">Username</label>
            <input id="username" v-model="username" class="border-2 p-2 border-gray-300"
                   type="text"/>
            <p id="usernameError" class="text-sm text-red-600"></p>
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-sm" for="email">Email</label>
            <input id="email" v-model="email" class="border-2 p-2 border-gray-300" type="email"/>
            <p id="emailError" class="text-sm text-red-600"></p>
          </div>
          <div>
            <label class="text-sm" for="password">Password</label>
            <div class="border-2 border-gray-300 flex items-center gap-0.5">
              <input id="password" v-model="password" class="p-2 w-4 flex-1" type="password"/>
              <button class="text-sm h-10 w-16 hover:bg-gray-300 bg-gray-200 active:bg-gray-400"
                      @click.prevent="showPassword($event)">Show
              </button>
            </div>
            <p id="passwordError" class="text-sm text-red-600"></p>
          </div>
          <div>
            <label class="text-sm" for="confirm-password">Confirm Password</label>
            <div class="border-2 border-gray-300 flex items-center gap-0.5">
              <input id="confirm-password" v-model="confirmPassword" class="p-2 w-4 flex-1"
                     type="password"/>
              <button class="text-sm h-10 w-16 hover:bg-gray-300 bg-gray-200 active:bg-gray-400"
                      @click.prevent="showPassword($event)">Show
              </button>
            </div>
            <p id="confirmPasswordError" class="text-sm text-red-600"></p>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <input id="accept-terms" v-model="acceptTerms" type="checkbox"/>
              <label class="text-sm" for="accept-terms">I accept to the
                <router-link class="text-cyan-900 underline" to="/terms-and-conditions">terms and
                  conditions
                </router-link>
              </label>
            </div>
            <p id="termsError" class="text-sm text-red-600"></p>
          </div>
          <div class="flex items-center gap-2">
            <input id="remember-me" v-model="rememberMe" type="checkbox"/>
            <label class="text-sm" for="remember-me">Remember me</label>
          </div>
          <button class="my-2 bg-cyan-900 py-2.5 text-white" @click.prevent="register">Register
          </button>
          <router-link class="text-sm text-center text-cyan-900 my-2" to="/login">Already have a
            account? Login
          </router-link>
        </form>
      </div>
    </main>
  </div>
</template>
