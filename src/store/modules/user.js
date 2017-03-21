const actionTypes = {
  user: {
    fetch: {
      success: 'user/fetch/success',
    },
  },
};

export default {
  state: {
    users: [{
      id: 0,
      name: 'Mr Zero',
    }],
  },

  mutations: {
    [actionTypes.user.fetch.success](state) {
      state.users = [ // eslint-disable-line no-param-reassign
        ...state.users,
        {
          id: 1,
          name: 'John Wallson',
          disabled: true,
        },
        {
          id: 2,
          name: 'Sharelos',
          disabled: false,
        },
      ];
    },
  },

  getters: {
    enabledUsers(state) {
      return state.users.filter(user => !user.disabled);
    },
  },

  actions: {
    fetchUsers({ commit }) {
      setTimeout(() => {
        commit(actionTypes.user.fetch.success);
      }, 1000);
    },
  },
};
