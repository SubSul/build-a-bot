import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.card.push(robot);
    },
  },
});
