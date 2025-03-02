<template>
  <div class="notes-app">
    <div class="note-input">
       <h1>My Daily Notes</h1>
       <input v-model="newNote"  placeholder="Write your note here..">
       <button @click="addNote">Addition</button>
    </div>
    <NoteList :notes="notes" @update-notes="updateNotes" />
  </div>  
</template>

<script>
import NoteList from './components/Notelist.vue';

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
</style>







