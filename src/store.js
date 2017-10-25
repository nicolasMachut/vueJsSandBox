import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const state = {
  test : 15
};

const mutations = {
  INCREMENT_TEST(state) {
    state.test++;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
