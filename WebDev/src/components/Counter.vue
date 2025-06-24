// new firebase code starts--! 
const email = ref('');
const password = ref('');

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log('Logged in!');
  } catch (error) {
    alert(error.message);
  }
};

const signUp = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    console.log('Signed up!');
  } catch (error) {
    alert(error.message);
  }
}; 
// new firebase code ends--!

// router.js
import { createRouter, createWebHistory } from 'vue';
import { auth, db } from './firebase';

const routes = [
  {
    path: '/',
    component: () => import('./App.vue'), //It's the parent component not child
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: () => import('./App.vue')
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
// router.js