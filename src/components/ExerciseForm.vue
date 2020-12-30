<template>
  <div class="form-container">
    <h2>Create a New Exercise</h2>
    <form action="#">
      <h4>What should we call it?</h4>
      <Input
        inputType="text"
        :required="true"
        inputName="name"
        placeholder="Add a name"
        v-model="values.name"
      />

      <h4>How do you perform it?</h4>
      <radio-button
        id="isometric"
        label="Isometric (Hold for a given amount of time)"
        groupName="exercise-type"
        v-model="values.type"
      />
      <radio-button
        id="isotonic"
        label="Isotonic (Perform for a given amount of reps)"
        groupName="exercise-type"
        v-model="values.type"
      />

      <h4>What muscle groups does it target?</h4>
      <checkbox
        v-for="muscle in muscleGroups"
        :key="muscle"
        :id="muscle"
        :label="muscle"
        groupName="exercise-group"
      />

      <Button type="button" @click="addExercise()">Create Exercise</Button>
    </form>
  </div>
</template>

<script>
import Button from './Button.vue';
import Checkbox from './Checkbox.vue';
import Input from './Input.vue';
import RadioButton from './RadioButton.vue';

export default {
  name: 'ExerciseForm',
  components: {
    Input,
    RadioButton,
    Checkbox,
    Button,
  },
  data() {
    return {
      values: {
        name: '',
        type: '',
        muscleGroups: [],
      },
      muscleGroups: [
        'back',
        'biceps',
        'calves',
        'chest',
        'core',
        'forearm',
        'glutes',
        'hamstring',
        'latissimus',
        'neck',
        'quadriceps',
        'shoulders',
        'trapezius',
        'triceps',
      ],
    };
  },
  methods: {
    addExercise() {
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
