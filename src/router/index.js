import HomePage from '@/components/PageHome.vue';
import PageThreadShow from '@/components/PageThreadShow.vue';
import PageNotFound from '@/components/PageNotFound.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  {
    path: '/thread/:id', name: 'Thread', component: PageThreadShow, props: true,
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
