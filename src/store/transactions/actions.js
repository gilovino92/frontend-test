import { api } from '@/httpClient/axios';
export default {
  async createTransaction({ dispatch }, payload) {
    try {
      const response = await api.post('transactions', payload);
      if (response.status !== 201) return;
      await dispatch('getTransactions');
      dispatch(
        'app/toggleMessage',
        {
          display: true,
          text: 'Repaid',
          color: 'success'
        },
        { root: true }
      );
    } catch (error) {
      dispatch(
        'app/toggleMessage',
        {
          display: true,
          text: 'Error',
          color: 'error'
        },
        { root: true }
      );
      console.log(error);
    }
  },
  async getTransactions({ commit, rootState }) {
    try {
      const response = await api.get('transactions', {
        params: {
          ownerID: rootState.user.profile.id
        }
      });
      if (response.status !== 200) return;
      commit('setValue', {
        key: 'transactions',
        value: response.data.sort((b, a) => {
          if (a.createdAt > b.createdAt) {
            return 1;
          }
          if (a.createdAt < b.createdAt) {
            return -1;
          }
          return 0;
        })
      });
    } catch (error) {
      console.log(error);
    }
  }
};
