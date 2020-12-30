import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    exercises: [],
    workouts: [],
  },
  mutations: {
    addExercise(state, payload) {
      state.exercises.push(payload);
    },
  },
  actions: {
  },
  modules: {
  },
});
