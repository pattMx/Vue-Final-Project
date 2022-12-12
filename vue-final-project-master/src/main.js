import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import css from './static/main.css';
import router from './router';

const pinia = createPinia().use(piniaPersist);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
window.app = app;
