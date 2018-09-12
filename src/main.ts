import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { db } from 'baqend/realtime';

Vue.config.productionTip = false;

db.connect('techcamp18', true);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
