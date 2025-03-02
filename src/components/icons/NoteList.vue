<template>
    <ul>
       <NoteItem 
         v-for="(note, index) in notes"
         :key="index"
         :note="note"
         :index="index"
         @edit-note="editNote"
         @delete-note="deleteNote"
        />
    </ul> 
</template>

<script>
import NoteItem from "./NoteItem.vue";

export default {
    components: { NoteItem },
    props: ["notes"],
    methods: {
        editNote(index) {
            const updatedText = prompt("Edit note:", this.notes[index].text);
                if (updatedText !== null) {
                    this.notes[index].text = updatedText;
                    this.$emit("update-notes", [...this.notes]);
                }
            }, 

        deleteNote(index) {
            this.notes.splice(index, 1);
            this.$emit("update-notes", [...this.notes]);

        },
    },
};
</script>

<style scoped>
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
