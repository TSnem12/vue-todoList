<template>
      <li>
        <span>{{ note.text }} - {{ note.date }}</span>
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
.note-input {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

input {
  flex: 1;
  padding: 8px;
  color: black;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
}

button {
  padding: 8px;
  cursor: pointer;
  color: green;
  font-size: 20px;
}
</style>