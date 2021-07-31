import app from '@/store/app';
import user from '@/store/user';
import loan from '@/store/loan';
import transactions from '@/store/transactions';

export const store = {
  state: {},
  actions: {},
  getters: {},
  mutations: {},
  modules: {
    app,
    user,
    transactions,
    loan
  }
};
export default store;
