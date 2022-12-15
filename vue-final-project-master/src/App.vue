<template>
  <section class="app-container">
    <h1 class="white" v-if="!user">To Do App</h1>
    <!-- <AppHeader class="app-header" v-if="user" /> -->
    <Nav class="main-nav" v-if="user" />
    <router-view class="app-main" />
    <!-- <YourAccount class="YourAccount" v-if="user"/> -->
    <Footer class="footer" v-if="user"/>
    
    <!-- <yourAccount class="YourAccount" v-if="user"/>
    <Avatar class="Avatar" v-if="user"/> -->

  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./store/user.js";
// import YourAccount from "./pages/YourAccount.vue"
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
// import YourAccount from "./pages/YourAccount.vue";

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

</style>
