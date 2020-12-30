<template>
    <div v-if="exercises.length" class="exercises-container">
      <h2>My Exercises</h2>
      <exercise-card
        v-for="exercise in exercises"
        :key="exercise.name"
        :name="exercise.name"
        :type="exercise.type"
        :muscleGroups="exercise.muscleGroups"
      />
    </div>
    <empty-screen
      v-else
      :title="'No Exercises'"
      :text="`You don't have any exercises. Tap the button below to create your first exercise.`"
      :btnText="'+ New Exercise'"
      :btnLink="'/exercises/add'"
    />
</template>

<script>
import EmptyScreen from './EmptyScreen.vue';
import ExerciseCard from './ExerciseCard.vue';

export default {
  name: 'ExercisesContainer',
  components: {
    EmptyScreen,
    ExerciseCard,
  },
  computed: {
    exercises() { return this.$store.state.exercises; },
  },
};
</script>

<style lang="scss" scoped>
</style>
