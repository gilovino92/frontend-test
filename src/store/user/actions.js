import { api } from '@httpClient/axios';
export default {
  async getUserProfile({ commit }) {
    try {
      const response = await api.get('profile');
      if (response.status !== 200) return;
      commit('setValue', {
        key: 'profile',
        value: response.data
      });
    } catch (error) {
      console.log(error);
    }
  }
};
