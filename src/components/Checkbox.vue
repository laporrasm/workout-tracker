<template>
  <label :for="id" class="checkbox">
    <input class="checkbox__input" type="checkbox" :name="groupName" :id="id">
    <div class="checkbox__box"></div>
    {{ label }}
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    groupName: String,
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: inline-flex;
  align-items: center;
  margin: 1em 1em 0 0;
  text-transform: capitalize;
  cursor: pointer;

  &__input { display: none; }

  &__box {
    width: 1.25em;
    height: 1.25em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-right: .5em;
    border: 2px solid var(--color-lightgray);
    border-radius: 3px;
    transition: background-color .15s, border-color .15s;

    &::after {
      content: "\2714";
      color: white;
      transform: scale(0);
      transition: transform .15s;
    }

    .checkbox__input:checked + & {
      background-color: var(--color-primary);
      border-color: var(--color-primary);
    }

    .checkbox__input:checked + &::after { transform: scale(1); }
  }
}
</style>
