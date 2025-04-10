createApp(App).mount('#app')
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // استدعاء الراوتر

createApp(App)
    .use(router)
    .mount('#app');