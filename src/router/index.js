import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/workouts',
    // name: 'Workouts',
    component: () => import('../views/Workouts.vue'),
    children: [
      {
        path: '',
        component: () => import('../components/Timer.vue'),
      },
    ],
  },
  {
    path: '/exercises',
    component: () => import('../views/Exercises.vue'),
    children: [
      {
        path: '',
        component: () => import('../components/ExercisesContainer.vue'),
      },
      {
        path: 'add',
        component: () => import('../components/ExerciseForm.vue'),
      },
      {
        path: 'edit/:id',
        component: () => import('../components/ExerciseForm.vue'),
      },
    ],
  },
  {
    path: '/tracker',
    name: 'Tracker',
    component: () => import('../views/Tracker.vue'),
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/Account.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
