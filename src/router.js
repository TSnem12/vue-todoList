import { createRouter, createWebHistory } from 'vue-router';
import NotesPage from './components/NotesPage.vue'; 
import AboutPage from './components/AboutPage.vue';

const routes = [
  { path: '/', component: NotesPage },
  { path: '/about', component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;