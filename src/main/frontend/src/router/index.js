import { createRouter, createWebHistory } from 'vue-router'
import Homeview from '../views/HomeView.vue'
import loginView from '../views/LoginView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'login',
      component: loginView
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Homeview
    },
    {
      path: '/mymovies',
      name: 'mymovies',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MyMoviesView.vue')
    }

  ]
})

export default router
