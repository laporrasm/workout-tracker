<template>
<transition name="modal-fade">
  <div class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <header class="modal__header" id="modalTitle">
        <slot name="header">
        </slot>
      </header>
      <section class="modal__body" id="modalDescription">
        <slot name="body">
        </slot>
      </section>
      <footer class="modal__footer">
        <Button @clicked="onConfirm">Confirm</Button>
        <Button emphasis="low" @clicked="onCancel">Cancel</Button>
      </footer>
    </div>
  </div>
</transition>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Modal',
  components: {
    Button,
  },
  methods: {
    onConfirm() { this.$emit('confirm'); },
    onCancel() { this.$emit('cancel'); },
  },
};
</script>

<style lang="scss" scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba($color: #000000, $alpha: .3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

.modal {
  max-width: 90%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 20px 1px rgba($color: #000000, $alpha: .1);

  .btn-container { margin-top: 0; }

  &-fade-enter,
  &-fade-leave-active {
    opacity: 0;
  }

  &-fade-enter-active,
  &-fade-leave-active {
    transition: opacity .5s ease;
  }

  &__header,
  &__footer {
    display: flex;
    padding: 1em;
  }

  .modal__header {
    font-size: 1.5rem;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-lightgray);
  }

  .modal__footer { justify-content: flex-end; }

  .modal__body {
    position: relative;
    padding: 1.25em;
  }
}
</style>
