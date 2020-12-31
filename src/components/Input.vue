<template>
  <div class="input">
    <textarea
      v-if="inputType == 'textarea'"
      class="input__field"
      :id="inputName"
      :value="value"
      :required="required"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    >
    </textarea>
    <input
      v-else
      class="input__field"
      :id="inputName"
      :type="inputType"
      :value="value"
      :required="required"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    >
    <label v-if="label" :for="name" class="input__label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: String,
    label: String,
    placeholder: String,
    inputType: {
      type: String,
      default: 'text',
    },
    inputName: {
      type: String,
      required: true,
    },
    required: {
      default: true,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
  .input {
    position: relative;
    display: flex;
    flex-direction: column-reverse;

    &__label {
      margin-bottom: .5em;
      font-size: .8rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    &__field {
      padding: .75em .5em;
      font-family: inherit;
      font-size: .9rem;
      background-color: inherit;
      border: none;
      border-bottom: 2px solid var(--color-lightgray);
      border-radius: 0;
      outline: none;
      resize: vertical;

      &:focus {
        border-color: var(--color-primary);
        & + .input__label { color: var(--color-primary); }
      }
    }

    &__error {
      position: absolute;
      top: 100%;
      left: 0;
      padding-top: .5em;
      font-size: .8rem;
      color: var(--primary-color);
    }
  }
</style>
