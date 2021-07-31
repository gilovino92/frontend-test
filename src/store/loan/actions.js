import { api } from '@/httpClient/axios';
export default {
  async createLoan({ dispatch }, payload) {
    try {
      const response = await api.post('loans', payload);
      if (response.status !== 201) return;
      await dispatch('getLoans');
      dispatch(
        'app/toggleMessage',
        {
          display: true,
          text: 'Loan Created',
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
  async getLoans({ commit, dispatch, rootState }) {
    try {
      const response = await api.get('loans', {
        params: {
          ownderID: rootState.user.profile.id
        }
      });
      if (response.status !== 200) return;
      commit('setValue', {
        key: 'loans',
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
  }
};
