<template>
    <div v-if="exercises.length" class="exercises-container">
      <div class="filter-buttons">
      </div>
      <h2>My Exercises</h2>
      <exercise-card
        v-for="exercise in exercises"
        :key="exercise.exerciseName"
        :name="exercise.exerciseName"
        :type="exercise.exerciseType"
        :muscleGroups="exercise.muscleGroups"
      />
      <Button btnType="internalLink" link="/exercises/add">+ New Exercise</Button>
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
import Button from './Button.vue';
import EmptyScreen from './EmptyScreen.vue';
import ExerciseCard from './ExerciseCard.vue';

export default {
  name: 'ExercisesContainer',
  components: {
    EmptyScreen,
    ExerciseCard,
    Button,
  },
  computed: {
    exercises() { return this.$store.state.exercises; },
  },
};
</script>

<style lang="scss" scoped>
</style>
