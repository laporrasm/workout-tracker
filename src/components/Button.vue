<template>
  <div class="btn-container">
    <router-link
      v-if="btnType == 'internalLink'"
      :to="link"
      class="btn"
      :class="classObject"
    >
      <slot></slot>
    </router-link>
    <a
      v-else-if="btnType == 'externalLink'"
      :href="link"
      target="_blank"
      class="btn"
      :class="classObject"
    >
      <slot></slot>
    </a>
    <button
      v-else
      @click="$emit('clicked')"
      class="btn"
      :class="classObject"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    btnType: {
      default: 'button',
      type: String,
    },
    link: {
      default: '/',
      type: String,
    },
    emphasis: {
      default: 'high',
      type: String,
    },
  },
  computed: {
    classObject() {
      return {
        'btn--low': this.emphasis === 'low',
        'btn--medium': this.emphasis === 'medium',
        'btn--high': this.emphasis === 'high',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 1em 2em;
  color: var(--color-white);
  font-size: .8125rem;
  text-align: center;
  text-transform: uppercase;
  border-radius: 5px;
  transition: all 500ms ease;

  &--low {
    color: var(--color-primary);
    background-color: transparent;
    border: none;
  }

  &--medium {
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
  }

  &--high {
    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
  }

  &:hover, &:active {
    color: var(--color-primary);
    background-color: transparent;
  }

  @media (max-width: 480px) { width: 100%; }
}

.btn-container { margin-top: 2em; }
</style>
