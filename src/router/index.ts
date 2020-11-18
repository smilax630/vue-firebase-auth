import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { getCurrentUser } from '@/firebase';
import TopScreen from '@/views/TopScreen.vue';
import SignUpScreen from '@/views/SignUpScreen.vue';
import SignInScreen from '@/views/SignInScreen.vue';
import SignOutScreen from '@/views/SignOutScreen.vue';
import MyPageScreen from '@/views/MyPageScreen.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'TopScreen',
    component: TopScreen,
  },
  {
    path: '/signup',
    name: 'SignUpScreen',
    component: SignUpScreen,
  },
  {
    path: '/signin',
    name: 'SignInScreen',
    component: SignInScreen,
  },
  {
    path: '/signout',
    name: 'SignOutScreen',
    component: SignOutScreen,
  },
  {
    path: '/mypage',
    name: 'MyPageScreen',
    component: MyPageScreen,
    meta: { requiredAuth: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((recode) => recode.meta.requiredAuth);
  if (requiresAuth && !(await getCurrentUser())) {
    next({ path: '/signin', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;
