import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/HomeView.vue')
    // },
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
