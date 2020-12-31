<template>
  <div class="btn-container">
    <router-link
      v-if="btnType == 'internalLink'"
      :to="link"
      class="btn"
    >
      <slot></slot>
    </router-link>
    <a
      v-else-if="btnType == 'externalLink'"
      :href="link"
      target="_blank"
      class="btn"
    >
      <slot></slot>
    </a>
    <button v-else class="btn">
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
  },
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 1em 2em;
  color: var(--color-white);
  font-size: .8125rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  background-color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 25px;
  transition: all 500ms ease;

  &:hover, &:active {
    color: var(--color-primary);
    background-color: transparent;
  }

  @media (max-width: 480px) { width: 100%; }
}

.btn-container { margin-top: 2em; }
</style>
