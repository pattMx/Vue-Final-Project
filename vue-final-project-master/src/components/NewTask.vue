<script setup>
import { ref } from 'vue'
import { useUserStore } from '../store/user.js'
import { useTaskStore } from '../store/task.js'

const userStore = useUserStore()
const taskStore = useTaskStore()
const title = ref(null)

const clearInput = () => {
  title.value = ""
}

async function createNewTask() {
  try {
    console.log(title.value)
    await taskStore.createTask(title.value, userStore.user.id)
    clearInput()
  } catch (e) {
    alert('could not add task')
  }
}
</script>

<template>
  <form
    id="new-task"
    @submit.prevent="createNewTask"
  >
    <input
      v-model="title"
      type="text"
      name="new-task"
      class="text"
      minlength="4"
      placeholder="New Task"
    >
    <button class="submit">
      Submit
    </button>
  </form>
</template>
