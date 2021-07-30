import Vue from 'vue';
import Vuex from 'vuex';
import app from './app';
import user from './user';
import loan from './loan';
import transactions from './transactions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    user,
    transactions,
    loan
  }
});
