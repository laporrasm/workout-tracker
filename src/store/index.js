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
    setExercises(state, payload) {
      state.exercises = payload;
    },
  },
  actions: {
    setExercises(context) {
      fetch('https://my-json-server.typicode.com/laporrasm/workout-tracker/exercises')
        .then((res) => res.json())
        .then((exercises) => context.commit('setExercises', exercises));
    },
    addExercise(context, payload) {
      fetch('https://my-json-server.typicode.com/laporrasm/workout-tracker/exercises', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then(() => context.commit('addExercise', payload));
    },
  },
  modules: {
  },
});
