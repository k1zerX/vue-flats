export const state = () => ({
  flats: {},
  likes: {},
})

export const mutations = {
  SET_FLATS(state, { flats }) {
    state.flats = flats;
  },

  SET_LIKE(state, { id, val }) {
    if (!state.flats[id])
      return;
    state.likes[id] = val;
    this.$cookies.set(`${id}`, val);
  },

  INIT_LIKES(state) {
    const likes = this.$cookies.getAll();
    for (let id in likes)
      state.likes[id] = JSON.parse(likes[id]);
  }
}

export const actions = {
  async nuxtClientInit({ commit }) {
    commit('INIT_LIKES');
  },

  async UPDATE_FLATS({ commit }) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // simulating request to DB
    const { response } = await this.$axios.$get('/api/flats.json');

    let flats = {};
    response.forEach(flat => {
      flats[flat.id] = flat;
    });

    commit('SET_FLATS', { flats });
  },
}
