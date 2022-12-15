<script setup>
import { ref } from 'vue'
import { useUserStore } from '../store/user.js'
import { useTaskStore } from '../store/task.js'

const userStore = useUserStore()
const taskStore = useTaskStore()
const title = ref(null)
const description = ref(null)

const clearInput = () => {
  title.value = ""
}
const clearInput2 = () => {
  description.value = ""
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
  <div class="AddNewTask">
    <h1 class="titleAddNT"> Add a new Task</h1>
    <div class="w-101 flex-colum">
      <form
      class="new-task"
      @submit.prevent="createNewTask">
        <!-- <div class="form-input"> -->
          <input
          v-model="title"
          type="text"
          name="new-task"
          class="form-inputtask"
          minlength="4"
          placeholder="New Task">
          <button class="button-dark">Add</button>
        <!-- </div> -->
        
      </form>      
    </div>
  </div>
</template>
