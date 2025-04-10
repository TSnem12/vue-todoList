<template>
  <div class="notes-app">

    <nav>
      <router-link to="/">Notes</router-link>
      <router-link to="/about">About</router-link>   
    </nav>

    <div class="note-input">
        <input v-model="newNote" placeholder="اكتب نوتة جديدة" />
        <button @click="addNote">Addition</button>
    </div>

    <NoteList :notes="notes" @update-notes="updateNotes" />

    <router-view/>
  </div>  
</template>

<script>
import NoteList from './components/NoteList.vue';

export default {
  components: { NoteList },
  data() {
    return {
      newNote: "",
      notes:
        JSON.parse(localStorage.getItem("notes")) || [],
    };
  },

  methods: {
    addNote() {
      if (!this.newNote.trim()) return;

      this.notes.push({ text: this.newNote, date: new Date().toLocaleDateString() });
      this.newNote = "";
      this.saveNotes();
    },

    updateNotes(updatedNotes) {
      this.notes = updatedNotes;
      this.saveNotes();
    },

    saveNotes() {
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },
  },  
};
</script>

<style scoped>

.notes-app {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.note-input {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  width: 200px;
  padding: 10px;
  border: 2px;
}


input {
  flex: 1;
  padding: 8px;
  color: black;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>







