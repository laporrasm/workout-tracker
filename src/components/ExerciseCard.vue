<template>
  <div v-show="exercise" class="exercise-card">
    <h4>{{ exercise.exerciseName }}</h4>
    <div>
      <router-link :to="`/exercises/edit/${exerciseId}`">
        <font-awesome-icon :icon="['fas', 'edit']"/>
      </router-link>
      <button @click="$emit('deleteRequest', exerciseId)">
        <font-awesome-icon :icon="['fas', 'trash-alt']"/>
      </button>
    </div>
    <div>
      <span class="muscle-group" v-for="muscleGroup in exercise.muscleGroups" :key="muscleGroup">
        {{ muscleGroup }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExerciseCard',
  props: {
    exerciseId: String,
  },
  computed: {
    exercise() {
      return this.$store.getters.getExerciseById(this.exerciseId);
    },
  },
};
</script>

<style lang="scss" scoped>
.exercise-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1em;
  border: 2px solid var(--color-lightgray);
  border-radius: 10px;

  & + & { margin-top: 1em; }

  h4 { margin: 0 0 .5em; }

  button { color: var(--color-gray); }

  button + button { margin-left: 1em; }

  div:last-child { flex-basis: 100%; }

  span {
    padding: .25em .5em;
    color: white;
    font-size: .8rem;
    text-transform: capitalize;
    background-color: var(--color-primary);
    border-radius: 25px;

    & + span { margin-left: .5em; }
  }
}
</style>
