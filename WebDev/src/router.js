// router.js
import { createRouter, createWebHistory } from 'vue-router';
import { auth } from './firebase';

const routes = [
  {
    path: '/',
    component: () => import('./views/TaskManager.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: () => import('./views/Login.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.currentUser) {
    next('/login');
  } else {
    next();
  }
});