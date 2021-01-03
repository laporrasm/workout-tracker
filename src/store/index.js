import Vue from 'vue';
import Vuex from 'vuex';
import * as fb from '../firebase';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    exercises: [],
    workouts: [],
  },
  getters: {
    getExerciseById: (state) => (id) => state.exercises.find((exercise) => exercise.id === id),
  },
  mutations: {
    addExercise(state, payload) {
      state.exercises.push(payload);
    },
    setExercises(state, payload) {
      state.exercises = payload;
    },
    deleteExercise(state, payload) {
      state.exercises = state.exercises.filter((exerciseObject) => exerciseObject.id !== payload);
    },
  },
  actions: {
    setExercises({ commit }) {
      fb.exercisesCollection.get().then((querySnapshot) => {
        const exercisesArray = [];
        querySnapshot.forEach((doc) => {
          exercisesArray.push({ id: doc.id, ...doc.data() });
        });
        commit('setExercises', exercisesArray);
      });
    },
    addExercise(context, exerciseObject) {
      fb.exercisesCollection.add(exerciseObject)
        .then((docRef) => {
          console.log('Document: ', docRef);
          context.commit('addExercise', exerciseObject);
          router.push('./');
        });
    },
    deleteExercise(context, id) {
      fb.exercisesCollection.doc(id).delete()
        .then(() => {
          console.log('Document successfully deleted!');
          this.commit('deleteExercise', id);
        })
        .catch((e) => {
          console.error('Error removing document: ', e);
        });
    },
  },
  modules: {
  },
});
