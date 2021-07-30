import Vue from 'vue';
import App from './App.vue';
import store from '@/store';
import globalMixin from '@/mixins/global.mixins';
import vuetify from './plugins/vuetify';
import router from './router';
import i18n from './i18n';
import currencyFormat from '@/filters/currencyFormat';
import VueAwesomeSwiper from 'vue-awesome-swiper';

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css';
Vue.use(VueAwesomeSwiper /* { default options with global component } */);
Vue.config.productionTip = false;
Vue.filter('currency', currencyFormat);

Vue.mixin(globalMixin);
new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
