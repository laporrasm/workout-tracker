<template>
  <label :for="id" class="radio">
    <input
      type="radio"
      :name="groupName"
      :id="id"
      :value="id"
      class="radio__input"
      @change="$emit('input', $event.target.value)"
    >
    <div class="radio__radio"></div>
    {{ label }}
  </label>
</template>

<script>
export default {
  name: 'RadioButton',
  props: {
    value: String,
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    groupName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.radio {
  display: flex;
  align-items: center;
  cursor: pointer;

  & + & { margin-top: 1em; }

  &__input { display: none; }

  &__radio {
    width: 1.25em;
    height: 1.25em;
    flex-shrink: 0;
    margin-right: .5em;
    padding: 2px;
    border: 2px solid var(--color-lightgray);
    border-radius: 50%;

    .radio__input:checked + &::after {
      transform: scale(1);
      transition: transform .15s;
    }

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      background-color: var(--color-primary);
      border-radius: 50%;
      transform: scale(0);
    }
  }
}
</style>
