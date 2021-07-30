export default {
  toggleOverlay({ commit }, value) {
    commit('setValue', { key: 'showOverlay', value });
  },
  toggleLoading({ commit }, value) {
    commit('setValue', { key: 'showOverlay', value });
    commit('setValue', { key: 'isLoading', value });
  },
  toggleMessage({ commit }, value) {
    commit('setValue', { key: 'message', value });
  }
};
