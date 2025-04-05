import {ref} from 'vue';
import {defineStore} from 'pinia';

export const useAuthStore = defineStore('auth', () => {
  const id = ref<number | null>(null);
  const token = ref<string | null>(null);
  const admin = ref<boolean>(false);

  function getId(): number | null {
    return id.value;
  }

  function setId(newId: number) {
    id.value = newId;
  }

  function setToken(newToken: string) {
    token.value = newToken;
  }

  function setIsAdmin(newAdmin: boolean) {
    admin.value = newAdmin;
  }

  function clear() {
    id.value = null;
    token.value = null;
    admin.value = false;
  }

  function isAuthenticated() {
    return token.value !== null;
  }

  function isAdmin() {
    return admin.value
  }

  return {token, getId, setId, setToken, setIsAdmin, clear, isAuthenticated, isAdmin};
});
