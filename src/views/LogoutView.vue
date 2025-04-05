<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import router from "@/router";
import {useAuthStore} from "@/stores/auth";

const countdown = ref(3);
const authStore = useAuthStore();

onMounted(() => {
  const interval = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
    } else {
      authStore.clear();
      clearInterval(interval);
      router.push('/');
    }
  }, 1000);
});
</script>

<template>
  <main>
    <p>We're logging you out in {{ countdown }} seconds...</p>
  </main>
</template>
