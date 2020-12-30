<template>
  <label :for="id" class="checkbox">
    <input
      type="checkbox"
      :name="groupName"
      :id="id"
      :value="id"
      class="checkbox__input"
      @input="onChange"
    >
    <div class="checkbox__box"></div>
    {{ label }}
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    value: Array,
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
  methods: {
    onChange(e) {
      let currentValue = [...this.value];
      if (e.target.checked) currentValue.push(e.target.value);
      else currentValue = currentValue.filter((item) => item !== e.target.value);
      this.$emit('input', currentValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: inline-flex;
  align-items: center;
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
