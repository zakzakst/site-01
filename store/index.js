import axios from 'axios'

export const state = () => ({
  eventList: null,
})

export const mutations = {
  setEventList(state, payload) {
    state.eventList = payload;
  },
}

export const actions = {
  loadEventList({commit}) {
    axios
      .get('/event-list.json')
      .then(res => {
        commit('setEventList', res.data);
        console.log(res.data);
        console.log('イベント情報セット');
      });
  },
}

export const getters = {
  eventList(state) {
    return state.eventList;
  }
}
