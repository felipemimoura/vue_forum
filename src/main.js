import { createApp } from 'vue';
import HomePage from '@/components/PageHome.vue';
import PageThreadShow from '@/components/PageThreadShow.vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  {
    path: '/thread/:id', name: 'Thread', component: PageThreadShow, props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
