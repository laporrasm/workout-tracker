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
          v-for="(option, index) in muscleGroups"
          v-model="formValues.muscleGroups"
          :key="index"
          :index="index"
          :label="option.label"
          :input-value="option.value"
        />
      </div>

      <Button type="button">Create Exercise</Button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
        {
          label: 'Back',
          value: 'back',
        },
        {
          label: 'Biceps',
          value: 'biceps',
        },
        {
          label: 'Calves',
          value: 'calves',
        },
        {
          label: 'Chest',
          value: 'chest',
        },
        {
          label: 'Core',
          value: 'core',
        },
        {
          label: 'Forearms',
          value: 'forearms',
        },
        {
          label: 'Glutes',
          value: 'glutes',
        },
        {
          label: 'Hamstring',
          value: 'hamstring',
        },
        {
          label: 'Lattisimus',
          value: 'lattisimus',
        },
        {
          label: 'Neck',
          value: 'neck',
        },
        {
          label: 'Quadriceps',
          value: 'quadriceps',
        },
        {
          label: 'Shoulders',
          value: 'shoulders',
        },
        {
          label: 'Trapezius',
          value: 'trapezius',
        },
        {
          label: 'Triceps',
          value: 'triceps',
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'getExerciseById',
    ]),
  },
  methods: {
    addExercise() {
      const formValuesEntries = Object.entries(this.formValues);
      const formFieldsValid = formValuesEntries.every(
        (formValueEntry) => formValueEntry[1].length,
      );
      if (formFieldsValid) {
        this.$store.dispatch('addExercise', this.formValues);
      } else alert('There is missing values.');
    },
  },
  mounted() {
    if (this.$route.params.id) {
      const { id } = this.$route.params;
      console.log(id);
      const exercise = this.getExerciseById(id);
      console.log(exercise);
      this.formValues = {
        exerciseName: exercise.exerciseName,
        exerciseType: exercise.exerciseType,
        muscleGroups: exercise.muscleGroups,
      };
    }
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
