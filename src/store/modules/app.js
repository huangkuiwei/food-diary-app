const appStore = {
  namespaced: true,

  state: {
    isLogin: false,
    userInfo: {},
    systemInfo: {},
  },

  mutations: {
    _setIsLogin(state, payload) {
      state.isLogin = payload;
    },

    _setUserInfo(state, payload) {
      state.userInfo = payload;
    },

    _setSystemInfo(state, payload) {
      state.systemInfo = payload;
    },
  },

  actions: {},
};

export default appStore;
