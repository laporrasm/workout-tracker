<template>
  <div class="empty-screen">
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <Button :btnType="'internalLink'" :link="btnLink">
      {{ btnText }}
    </Button>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'EmptyScreen',
  components: { Button },
  props: {
    title: {
      type: String,
      required: true,
      default: 'No Elements',
    },
    text: {
      type: String,
      required: true,
      default: 'You do not have any elements. Tap the button below to create your first one.',
    },
    btnText: {
      type: String,
      required: true,
      default: '+ New Element',
    },
    btnLink: {
      type: String,
      required: true,
      default: '/add',
    },
  },
};
</script>

<style lang="scss" scoped>
.empty-screen {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
