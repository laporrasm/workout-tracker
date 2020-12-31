<template>
  <div class="form-container">
    <h2>Create a New Exercise</h2>
    <form action="#" @submit.prevent="addExercise()">
      <h4>What should we call it?</h4>
      <Input
        inputType="text"
        :required="true"
        inputName="name"
        placeholder="Add a name"
        v-model="formValues.exerciseName"
      />

      <h4>How do you perform it?</h4>
      <radio-button
        id="isometric"
        label="Isometric (Hold for a given amount of time)"
        groupName="exercise-type"
        v-model="formValues.exerciseType"
      />
      <radio-button
        id="isotonic"
        label="Isotonic (Perform for a given amount of reps)"
        groupName="exercise-type"
        v-model="formValues.exerciseType"
      />

      <h4>What muscle groups does it work?</h4>
      <div class="checkbox-container">
        <checkbox
          v-for="muscle in muscleGroups"
          :key="muscle"
          :id="muscle"
          :label="muscle"
          groupName="exercise-group"
          v-model="formValues.muscleGroups"
        />
      </div>

      <Button type="button">Create Exercise</Button>
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
      formValues: {
        exerciseName: '',
        exerciseType: '',
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
      const formValuesEntries = Object.entries(this.formValues);
      const formFieldsValid = formValuesEntries.every(
        (formValueEntry) => formValueEntry[1].length,
      );
      if (formFieldsValid) {
        this.$store.dispatch('addExercise', this.formValues);
        this.$router.push('./');
      } else alert('There is missing values.');
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
}
</style>
