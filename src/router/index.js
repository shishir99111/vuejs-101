import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Main',
    component: Main,
    children: [{
      path: 'home',
      name: 'home',
      component: resolve => {
        require(['../components/Home.vue'], resolve);
      },
    }],
  }],
});