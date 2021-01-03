<template>
    <div v-if="exercises.length" class="exercises-container">
      <h2>My Exercises</h2>
      <exercise-card
        v-for="exercise in exercises"
        :key="exercise.id"
        :exerciseId="exercise.id"
        @deleteRequest="(id) => {
          idFromRequested = id;
          openModal();
        }"
      />
      <Button btnType="internalLink" link="/exercises/add">+ New Exercise</Button>
      <modal v-if="showModal" @confirm="confirmDelete" @cancel="cancelDelete">
        <template v-slot:header>
          <div>Are you sure you want to delete it?</div>
        </template>
        <template v-slot:body>
          <div>Are you sure you want to delete this exercise?
          This action cannot be undone.</div>
        </template>
      </modal>
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
import Modal from './Modal.vue';

export default {
  name: 'ExercisesContainer',
  components: {
    EmptyScreen,
    ExerciseCard,
    Button,
    Modal,
  },
  data() {
    return {
      showModal: false,
      idFromRequested: 0,
    };
  },
  computed: {
    exercises() { return this.$store.state.exercises; },
  },
  methods: {
    confirmDelete() {
      this.closeModal();
      this.$store.dispatch('deleteExercise', this.idFromRequested);
    },
    cancelDelete() { this.closeModal(); },
    openModal() { this.showModal = true; },
    closeModal() { this.showModal = false; },
  },
};
</script>

<style lang="scss" scoped>
</style>
