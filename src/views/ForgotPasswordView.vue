<script lang="ts" setup>
import {ref} from 'vue';
import NavigationBar from "@/views/NavigationBar.vue";

const email = ref<string>('');

const forgotPassword = () => {
  const emailError = document.getElementById('emailError') as HTMLLabelElement;
  emailError.textContent = '';

  // Guard clause to check if the email is empty
  if (!email.value) {
    emailError.textContent = 'Please enter your email';
    return;
  } else if (!email.value.includes('@')) {
    emailError.textContent = 'Please enter a valid email';
    return;
  }

  // Send the email to the server
  console.log('Sending email to the server');
}

</script>

<template>
  <div class="flex flex-col h-svh">
    <NavigationBar/>
    <main class="h-svh flex justify-center items-center">
      <div
        class="w-sm px-10 py-5 flex flex-col justify-center items-center gap-5 bg-gray-50 drop-shadow-sm">
        <h1 class="text-2xl">Forgot Password</h1>
        <form class="flex flex-col gap-3">
          <div class="flex flex-col gap-1 w-72">
            <label class="text-sm" for="email">Email</label>
            <input id="email" v-model="email" class="border-2 p-2 border-gray-300" type="email"/>
            <p id="emailError" class="text-sm text-red-600"></p>
          </div>
          <button class="my-2 bg-cyan-900 py-2.5 text-white cursor-pointer" @click.prevent="forgotPassword">Submit
          </button>
        </form>
        <router-link class="text-sm text-cyan-900 my-2" to="/login">Remembered your password? Login
        </router-link>
      </div>
    </main>
  </div>

</template>
