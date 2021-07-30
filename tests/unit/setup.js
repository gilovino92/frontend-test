import Vue from 'vue';
import Vuex from 'vuex';
import globalMixin from '@/mixins/global.mixins';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.mixin(globalMixin);
