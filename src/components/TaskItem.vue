<template>
  <li class="task-item"
      :class="{done: task.isDone}"
      :style="{ color: task.color }">
    <span v-if="!task.isEditing">{{ task.text }}</span>
    <input v-else v-model="task.text" @keyup.enter="saveEdit">
    
    <button v-if="!task.isEditing" @click="editTask">**</button>
    <button v-else @click="saveEdit">✔</button>
    <button @click="toggleDone">✔</button>
    <button @click="removeTask">X</button>  
  </li>
</template>

<script>
export default {
  props: ["task", "index"],
  emits: ["delete-task", "update-task", "toggle-task"],

  methods: {
    editTask() {
      this.$emit("update-task", this.index, { ...this.task, isEditing: true });
    },

    saveEdit() {
      this.$emit("update-task", this.index, { ...this.task, isEditing: false });
    },

    removeTask() {
      this.$emit("delete-task", this.index);  
    },

    toggleDone() {
      this.$emit("toggle-task", this.index);
    }
  
  }
}
</script>

<style scoped>
  
.task-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.task-item.done {
  text-decoration: line-through;
  color: gray;
}
</style>