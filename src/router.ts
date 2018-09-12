import Vue from 'vue';
import Router, { NavigationGuard } from 'vue-router';
import QuestionList from './views/QuestionList.vue';
import { db } from 'baqend/realtime';

Vue.use(Router);
db.connect('techcamp18', true);

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
      name: 'ask',
      component: () => import(/* webpackChunkName: "ask" */ './views/Ask.vue'),
    },
  ],
});
