<template>
      <li>
        <span>{{ note.content }} - {{ note.date }}</span>
        <button @click="$emit('edit-note', index)">✒</button>
        <button @click="$emit('delete-note', index)">❎</button>
      </li>  
</template>

<script>
export default {
    props: ["note", "index"]
};
</script>

<style scoped>
button {
  padding: 8px;
  cursor: pointer;
  color: green;
  font-size: 10px;
}
</style>