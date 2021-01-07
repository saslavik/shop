import Vue from 'vue';

// plugins
import VueCarousel from 'vue-carousel';

import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/scss/main.scss';

Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render(h) { return h(App); },
}).$mount('#app');
