import { Store } from 'vuex';
import createLogger from 'vuex/dist/logger';

import user from './modules/user';

export default function createStore() {
  return new Store({
    state: {
      count: 0,
    },

    mutations: {
      increment(state, payload) {
        state.count += payload.count; // eslint-disable-line no-param-reassign
      },
    },

    plugins: [
      createLogger({
        collapsed: false,
      }),
    ],

    strict: process.env.NODE_ENV !== 'production',

    actions: {
      incrementAsync({ commit }) {
        setTimeout(() => {
          commit('increment', { count: 1 });
        }, 1000);
      },
    },

    modules: {
      user,
    },
  });
}
