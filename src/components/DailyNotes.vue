<template>
  <div class="notes-app">
    <div class="note-input">
       <h1>My Daily Notes</h1>
       <input v-model="newNote" placeholder="Write your note here..">
       <button @click="addNote">Addition</button>
    </div>

    <ul>
      <li v-for="(note, index) in notes" :key="index">
        <span>{{ note.text }} - {{ note.date }}</span>
        <button @click="editNote(index)">✒</button>
        <button @click="deleteNote(index)">❎</button>
      </li>  
    </ul>
  </div>  
</template>

<script>
export default {
   data() {
    return {
        newNote: "",
        notes:
           JSON.parse(localStorage.getItem("notes")) || [] 
    };
   },

   methods: {
    addNote() {
        if (!this.newNote.trim()) 
            this.notes.push({ text: this.newNote, date: newDate().toLocaleDateString() });
            this.newNote = "";
            this.saveNotes();
        },

    editNote(index) {
        const updatedText = prompt("edit note:", this.notes[index].text);
        if (updatedText !== null) {
            this.notes[index].text = updatedText;
            this.saveNotes();
        }
    },

    deleteNote(index) {
        this.notes.splice(index, 1);
        this.saveNotes();
    },

    saveNotes() {
        localStorage.setItem("notes", JSON.stringify(this.notes));
    }
   }
}
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
}
input {
  flex: 1;
  padding: 8px;
}
button {
  padding: 8px;
  cursor: pointer;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
</style>
