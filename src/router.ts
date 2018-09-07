import Vue from 'vue';
import Router, { NavigationGuard } from 'vue-router';
import QuestionList from './views/QuestionList.vue';
import { db } from 'baqend/realtime';

Vue.use(Router);

const dbReady: NavigationGuard = (to, from, next) => {
  db.ready(() => next());
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'questionList',
      component: QuestionList,
      beforeEnter: dbReady,
    },
    {
      path: '/question/:key',
      name: 'questionDetails',
      component: () => import(/* webpackChunkName: "questionDetails" */ './views/QuestionDetails.vue'),
      beforeEnter: dbReady,
    },
    {
      path: '/ask',
      name: 'questionDetails',
      component: () => import(/* webpackChunkName: "questionDetails" */ './views/Ask.vue'),
    },
  ],
});
