import HomePage from '@/pages/Home.vue';
import ThreadShow from '@/pages/ThreadShow.vue';
import NotFound from '@/pages/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router';
import sourceData from '@/data.json'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  {
    path: '/thread/:id',
    name: 'Thread',
    component: ThreadShow,
    props: true,
    beforeEnter(to, from, next) {
      // ...
      const threadExists = sourceData.threads.find((thread) => thread.id === to.params.id)

      if (threadExists) return next()

      return next({
        name: 'NotFound',
        params: { pathMatch: to.path.substring(1).split('/') },
        query: to.query,
        hash: to.hash,
      })
    },

  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
