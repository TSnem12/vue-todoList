<template>
  <div id="app">
    <TaskList />
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue';

export default {
  components: { TaskList }
}
</script>

<style>
#app {
  text-align: center;
  font-family: Arial, sans-serif;
}
.task-container {
    width: 800px;

}
</style>






