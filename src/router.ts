import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import JavascriptCrashCourse from './views/JavascriptCrashCourse.vue';
import StateManagement from './views/StateManagement.vue';
import DataBinding from './views/DataBinding.vue';
import EventBinding from './views/EventBinding.vue';
import InputBinding from './views/InputBinding.vue';

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
    {
      path: '/data-binding',
      name: 'DataBinding',
      component: DataBinding,
    },
    {
      path: '/event-binding',
      name: 'EventBinding',
      component: EventBinding,
    },
    {
      path: '/input-binding',
      name: 'InputBinding',
      component: InputBinding
    }
  ],
});
