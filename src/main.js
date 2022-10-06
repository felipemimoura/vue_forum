import { createApp } from 'vue';
import router from '@/router'
import createStore from '@/store'
import App from './App.vue';



const app = createApp(App);
app.use(router);
app.use(createStore)
app.mount('#app');
