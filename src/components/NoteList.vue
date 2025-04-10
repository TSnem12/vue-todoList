<template>
      <ul>
       <NoteItem 
         v-for="(note, index) in notes"
         :key="note.id"
         :note="note"
         :index="index"
         @edit-note="editNote"
         @delete-note="deleteNote"
        />
      </ul> 
</template>

<script>
import axios from 'axios';
import NoteItem from "./NoteItem.vue";

const API = 'https://67f80ceb2466325443ebada6.mockapi.io/api/notes'
export default {
    components: { NoteItem },
    data() {
        return {
            notes:[],
        };
    },

    async mounted() {
        try {
          const res = await axios.get(API)
          this.notes = res.data
        } catch (err) {
            console.error("فشل تحميل النوتات", err)
        }   
    },

    methods: {
        async editNote(index) {
            const note = this.notes[index]
            const updatedText = prompt("Edit note:", note.content);
                if (updatedText !== null) {
                   try {
                    await axios.put(`${API}/${note.id}`, {content: updatedText})
                    this.notes[index].content = updatedText;
                   } catch (err) {
                    console.error("فشل تعديل النوت", err)
                   }
                }
            }, 

        async deleteNote(index) {
            const note = this.notes[index]
            try {
                await axios.delete(`${API}/${note.id}`)
                this.notes.splice(index, 1)
            } catch (err) {
                console.error("فشل حذف النوتات", err)
            }
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
