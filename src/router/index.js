import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cards')
  },
  {
    path: '/payments',
    name: 'Payments',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Payments')
  },
  {
    path: '/credit',
    name: 'Credit',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Credit')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Account')
  },
  {
    path: '/**',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/NotFound')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
