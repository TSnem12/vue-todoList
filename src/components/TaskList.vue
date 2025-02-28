<template>
  <div class="task-container">
    <h1>قائمة المهام</h1>
    <input v-model="newTask" @keyup.enter="addTask">
    <button @click="addTask">إضافة</button>

    <ul>
      <TaskItem 
        v-for="(task, index) in tasks" 
        :key="index" 
        :task="task" 
        :index="index"
        @delete-task="removeTask"
        @update-task="updateTask"
        @toggle-task="toggleDone"
      />
    </ul>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  mounted() {
    localStorage.removeItem("tasks");
    this.tasks = [];
  },

  components: { TaskItem },
  
  data() {
    return {
      newTask: "",
      tasks: [],
    };  
  },

  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ text: this.newTask, color: this.getRandomColor(), isEditing: false, isDone: false });
        this.newTask = "";
      }
    },
    

    removeTask(index) {
      this.tasks.splice(index, 1);
    },

    updateTask(index, updatedTask) {
      this.tasks[index] = {...updatedTask};
    },

    getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },

    toggleDone(index) {
      this.tasks[index].isDone = !this.tasks[index].isDone;
    }
  }
}
</script>