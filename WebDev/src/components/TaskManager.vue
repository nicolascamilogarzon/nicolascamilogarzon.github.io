<script setup>
// My understanding: Auto-detect for all the app. 
// Question: Is it auto-detect or auto-render?

import { ref, computed, onMounted, watch } from 'vue';
// My understanding: ref is a reactivity feature. 
// Question: Is reactivity an easy feature?

const tasks = ref([
  // My understanding: . 
  // Question: ?
  //{ id: 1, text: "Learn Vue", done: false },
  //{ id: 2, text: "Build a project", done: false },
  //{ id: 3, text: "Annotate last project", done: false}  
  // My understanding: Creates a reactive array of task objects. 
  // Question: How fluid are props?
]);
const newTask = ref("");
// My understanding: Declares a reactive string for the input field. 
// Question: Do the quotations matter?
const filter = ref('all');

const filteredTasks = computed(() => {
  /* ...filter logic below...*/
  switch (filter.value) {
    case 'done': return tasks.value.filter(task => task.done);
    case 'undone': return tasks.value.filter(task => !task.done);
    default: return tasks.value;
  }
});

function addTask() {
  // My understanding: Declares addTask function. 
  // Question: n/a
  if (newTask.value.trim()) {
    // My understanding: trims string. 
    // Question: Why trim?
    tasks.value.push({ id: Date.now(), text: newTask.value, done: false });
    // My understanding: add updated props. 
    // Question: What is Date.now() doing? A: It's a random key for lesser code
    newTask.value = "";
    // My understanding: Resets the input field.
    // Question: Why newTask and not tasks?
  };
}

function removeTask(id) {
  tasks.value = tasks.value.filter(task => task.id !== id);
}

onMounted(() => {
  const savedTasks = localStorage.getItem('tasks');
  //console.log("Loaded:", savedTasks);
  if (savedTasks) {
    tasks.value = JSON.parse(savedTasks);
    //console.log("Parsed:", tasks.value);
  }
});

watch(tasks, (newTasks) => {
  localStorage.setItem('tasks', JSON.stringify(newTasks));
}, { deep: true });

function clearAllTasks() {
  if (confirm("Clear all tasks?")) {
    tasks.value = []; // Reset the array immutably
    alert("All tasks deleted!");
  }
}
</script>



<template>
  <div class="filters">
    <h1>Task Manager</h1>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Type and press Enter" />
    <ul>
      <TransitionGroup name="task-anim" tag="ul"> <!-- Animation added -->
        <li v-for="task in filteredTasks" :key="task.id">
          <input type="checkbox" v-model="task.done" />
          <span :class="[task.done ? 'done' : [], 'task-text']">{{ task.text }}</span>
          <button @click="removeTask(task.id)" class="trash-btn">🗑️</button>
        </li>
      </TransitionGroup>
    </ul>
    <button @click="filter = 'all'" class="all-btn">All</button> <!-- New button -->
    <button @click="filter = 'done'" class="done-btn">Done</button> <!-- New button -->
    <button @click="filter = 'undone'" class="undone-btn">Undone</button> <!-- New button -->
    <button @click="clearAllTasks" class="clear-btn">Clear All</button> <!-- New button -->
  </div>
</template>



<style>
.all-btn,
.done-btn,
.undone-btn,
.clear-btn
{
  background: none;
  color: #ff4444;
  border: solid, #ff4444;
  border-radius: 10px;
  padding: 8px 12px;
  margin-left: 3px;
  cursor: pointer;
}

.clear-btn:hover {
  background: #cc0000;
  color: white;
  border: solid, #cc0000;
}

.trash-btn {
  background: none;
  color: #ff4444;
  border: none;
  border-radius: 4px;
  padding: 0px 0px;
  margin-left: 3px;
  cursor: pointer;
}
.trash-btn:hover {
  color: white;
  border: solid, 1px, #ff4444;

}

/* Enter/Leave animations */
.task-anim-move {
  transition: transform 0.5s ease;
}

.task-anim-enter-active,
.task-anim-leave-active {
  transition: all 0.5s ease 0.1s;
}

.task-anim-enter-from,
.task-anim-leave-to {
  opacity: 0;
  transform: translateX(30px);
}


/* Optional: Animation for task completion (strikethrough) */
.done {
  transition: all 0.3s ease;
  text-decoration: line-through;
  color: #888;
}
</style>