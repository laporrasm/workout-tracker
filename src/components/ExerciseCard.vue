<template>
  <div class="exercise-card">
    <h4>{{ name }}</h4>
    <span class="muscle-group" v-for="muscleGroup in muscleGroups" :key="muscleGroup">
      {{ muscleGroup }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'ExerciseCard',
  props: {
    name: String,
    type: String,
    muscleGroups: Array,
  },
};
</script>

<style lang="scss" scoped>
.exercise-card {
  padding: .75em;
  border: 2px solid var(--color-lightgray);
  border-radius: 10px;

  & + & { margin-top: 1em; }

  h4 {
    margin: 0 0 .5em;
  }

  span {
    display: inline-block;
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
