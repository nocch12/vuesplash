const state = {
  loading: false
};

const mutations = {
  setLoading(state, loading) {
    state.loading = loading;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
