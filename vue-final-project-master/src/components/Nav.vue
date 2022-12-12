<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user.js";
const router = useRouter();
const userStore = useUserStore();

async function signOut() {
  try {
    router.push({ path: "/auth" });
    userStore.signOut();
  } catch (e) {
    alert(e);
  }
}
</script>

<template>
  <nav>
    <a id="signout" class="button-red" @click="signOut">Sign Out</a>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
}
</style>
