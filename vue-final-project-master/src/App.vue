<template>
  <section class="app-container">
    <h1 class="white" v-if="!user">Welcome to the Vue Task App</h1>
    <AppHeader class="app-header" v-if="user" />
    <Nav class="main-nav" v-if="user" />
    <router-view class="app-main" />
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./store/user.js";

import AppHeader from "./components/AppHeader.vue";
import Nav from "./components/Nav.vue";

const router = useRouter();

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

onMounted(async () => {
  try {
    await userStore.fetchUser();
    if (!user.value) {
      router.push({ path: "/auth" });
    } else {
      router.push({ path: "/" });
    }
  } catch (e) {
    console.log(e);
  }
});
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
  height: 100vh;
}

.app-header {
  grid-area: hd;
}

.app-main {
  grid-area: main;
  background: white;
  margin-top: 2rem;
}

.main-nav {
  grid-area: nav;
}

h1 {
  grid-area: welcome;
  text-align: center;
}
</style>
