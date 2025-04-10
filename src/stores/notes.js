import { defineStore } from 'pinia'
import axios from 'axios'

const API = 'https://67f80ceb2466325443ebada6.mockapi.io/api/notes' // بدّلي ده بالرابط بتاعك

export const useNotesStore = defineStore('notes', {
  state: () => ({
    notes: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchNotes() {
      this.loading = true
      try {
        const res = await axios.get(API)
        this.notes = res.data
      } catch (err) {
        this.error = 'فشل تحميل النوتات'
      } finally {
        this.loading = false
      }
    },

    async addNote(content) {
      try {
        const res = await axios.post(API, { content })
        this.notes.push(res.data)
      } catch (err) {
        console.error('فشل إضافة النوت')
      }
    },

    async deleteNote(id) {
      try {
        await axios.delete(`${API}/${id}`)
        this.notes = this.notes.filter(note => note.id !== id)
      } catch (err) {
        console.error('فشل حذف النوت')
      }
    }
  }
})