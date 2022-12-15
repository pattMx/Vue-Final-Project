<template>
    <footer>

    <h4 class="footer">&copy; Bootcamp Frontend Ironhack | Patricia Sanchez</h4>
</footer>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user.js";
import { computed, readonly } from "vue";
import { ref } from 'vue'
import { useTaskStore } from '../store/task.js'
</script>