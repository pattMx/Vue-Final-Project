<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import TaskItem from '../components/TaskItem.vue';
import NewTask from '../components/NewTask.vue';

import { useUserStore } from '../store/user.js';
import { useTaskStore } from '../store/task.js';

const userStore = useUserStore();
const taskStore = useTaskStore();
const { tasks } = storeToRefs(taskStore);
const { user } = storeToRefs(userStore);

let loading = ref(true);
let editedTask = ref(null);
let editingTask = ref(null);
const errorMsg = ref(null);

const updateTask = async(taskId) => {
  try {
    await taskStore.editTask(taskId, editedTask.value);
    editingTask.value = null;
  } catch (e) {
    errorMsg.value = e.message;
  }
}

const updateTask1 = async(taskId) => {
  try {
    await taskStore.editTask1(taskId, editedTask1.value);
    editingTask.value = null;
  } catch (e) {
    errorMsg.value = e.message;
  }
}

const editTask = async (title, taskId) => {
  editedTask.value = title;
  editingTask.value = taskId;
}
const editTask1 = async (description, taskId) => {
  editedTask.value = description;
  editingTask.value = taskId;
}

onMounted(async () => {
  console.log('tasks', tasks.value);
  try {
    await taskStore.fetchTasks();
    loading.value = false;
  } catch (e) {
    errorMsg.value = e.message;
    loading.value = false;
  }

  if (!user.value.confirmed_at) {
    alert('Supabase has sent an email to ${user.value.email} please click the link in this email to confirm your account')
  }
})


</script>

<template>
  <section
    v-if="user"
    class="tasklist"
  >
    <header class="tasklist-header">
      <!-- <h3 class="header-title">
        Welcome {{ user.email }}
      </h3> -->
      <div>
        <NewTask />
      </div>
    </header>
    <div
      v-if="errorMsg"
      class="error"
    >
      {{ errorMsg }}
    </div>
    <h1 v-if="loading">
      Loading...
    </h1>
    <h1 v-if="!loading && !tasks">
      No tasks
    </h1>
    <main
      v-if="tasks"
      class="tasklist-main"
    >
    <div class="titletasks">
      <h3>Tasks</h3>
    </div>
      <div class="tasklist-all">
        
        <TaskItem
          v-for="task in tasks.filter(t => t.is_complete === false)"
          :id="`task-${task.id}`"
          :key="task.id"
        >
          <template #content>
            <div v-if="editingTask !== task.id">
              {{ task.title }}
            </div>
            <div v-if="editingTask === task.id">
              <input
                :key="task.id"
                v-model="editedTask"
                class="edit-input"
              >
              <button
                name="update"
                @click="updateTask(task.id)"
              >
                OK
              </button>
            </div>
          </template>
          <template #buttons>
            <button
              class="edit"
              name="edit"
              @click="editTask(task.title, task.id)"
            >
            </button>
            
            <button
              class="complete"
              name="complete"
              @click="taskStore.changeStatus(task.id, { complete: true })"
            >
            
            </button>
            <button
              class="delete"
              name="delete"
              @click="taskStore.deleteTask(task.id)"
            >
              
            </button>
          </template>
        </TaskItem>
      </div>
    </main>

      <main
      v-if="tasks"
      class="tasklist-main"
    >
<h3>Completed</h3>
      <div class="tasklist-complete">
        
        <TaskItem
          v-for="task in tasks.filter(t => t.is_complete === true)"
          :id="`task-${task.id}`"
          :key="task.id"
        >
          <template #content>
            <div v-if="editingTask !== task.id">
              {{ task.title }}
            </div>
            <div v-if="editingTask === task.id">
              <input
                :key="task.id"
                v-model="editedTask"
                class="edit-input"
              >
              <button
                name="update"
                @click="updateTask(task.id)"
              >
                OK
              </button>
            </div>
          </template>
          <template #buttons>
            <button
              class="edit"
              name="edit"
              @click="editTask(task.title, task.id)"
            >
            </button>
            <button
              class="re-open"
              name="reopen"
              @click="taskStore.changeStatus(task.id, {complete: false })"
            >
            
            </button>
            <button
              class="delete"
              name="delete"
              @click="taskStore.deleteTask(task.id)"
            >
              
            </button>
          </template>
        </TaskItem>
      </div>
    </main>
  </section>
</template>

<style scoped>
</style>
