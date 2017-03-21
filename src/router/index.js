import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import NotFound from '@/components/NotFound';
import User from '@/components/User';
import Setting from '@/components/Setting';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/user',
      name: 'User',
      component: User,
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
