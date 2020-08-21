import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import JavascriptCrashCourse from './components/JavascriptCrashCourse.vue';
import StateManagement from './components/StateManagement.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/JavaScript',
      name: 'JavasScript Review',
      component: JavascriptCrashCourse,
    },
    {
      path: '/StateManagement',
      name: 'State Management: Vuex Store',
      component: StateManagement,
    },
  ],
});
