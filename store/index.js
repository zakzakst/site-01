import axios from 'axios'

export const state = () => ({
  eventList: null,
  loading: true,
  error: false,
})

export const mutations = {
  setEventList(state, payload) {
    state.eventList = payload;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  setError(state, payload) {
    state.error = payload;
  }
}

export const actions = {
  loadEventList({commit}) {
    commit('setError', false);
    axios
      .get(process.env.SITE_ROOT_PATH + 'event-data/event-list.json')
      .then(res => {
        commit('setEventList', res.data);
        console.log('イベント情報セット');
      })
      .catch(error => {
        commit('setError', true);
        console.log(error);
      })
      .finally(() => {
        commit('setLoading', false);
      });
  },
}

export const getters = {
  eventList(state) {
    return state.eventList;
  },
  loading(state) {
    return state.loading;
  },
  error(state) {
    return state.error;
  }
}
