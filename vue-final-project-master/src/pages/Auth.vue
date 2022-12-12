<script setup>
import { ref } from "vue";

import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

const signup = ref(false);
</script>

<template>
  <article class="auth">
    <SignIn v-if="!signup" />
    <SignUp v-if="signup" />
    <nav class="buttons mt-20">
      <button
        v-if="!signup"
        class="button-dark"
        id="signup"
        @click="signup = true"
      >
        Click to Sign Up
      </button>
      <button
        v-if="signup"
        class="button-dark"
        id="signin"
        @click="signup = false"
      >
        Click to Sign In
      </button>
    </nav>
  </article>
</template>

<style scoped>
.auth {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
  width: 100%;
}
.buttons {
  display: grid;
  margin-bottom: 2rem;
}
</style>
