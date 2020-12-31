<template>
  <nav class="nav">
    <logo/>

    <ul class="nav__list">
      <li class="nav__item">
        <router-link to="/workouts" class="nav__link" active-class="nav__link--active">
          <font-awesome-icon :icon="['fas', 'stopwatch']" size="lg"/>
          <span>Workouts</span>
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/exercises" class="nav__link" active-class="nav__link--active">
          <font-awesome-icon :icon="['fas', 'dumbbell']" size="lg"/>
          <span>Exercises</span>
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/tracker" class="nav__link" active-class="nav__link--active">
          <font-awesome-icon :icon="['fas', 'calendar-alt']" size="lg"/>
          <span>Tracker</span>
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/account" class="nav__link" active-class="nav__link--active">
          <font-awesome-icon :icon="['fas', 'user']" size="lg"/>
          <span>Account</span>
        </router-link>
      </li>
    </ul>

    <button class="sign-out-btn">
      <font-awesome-icon :icon="['fas', 'sign-out-alt']" size="lg"/>
      <span>Sign Out</span>
    </button>
  </nav>
</template>

<script>
import Logo from './Logo.vue';

export default {
  name: 'Nav',
  components: { Logo },
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: .75em 2em;
  background-color: white;
  border-top: 1px solid var(--color-lightgray);

  &__list {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style: none;

    @media (min-width: 480px) { justify-content: space-around; }
  }

  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-gray);
    transition: color 500ms ease;

    &--active, &:hover { color: var(--color-primary); }

    span {
      margin-top: .5em;
      font-size: .75rem;

      @media (min-width: 480px) { font-size: 1rem; }
    }
  }

  .logo, .sign-out-btn { display: none; }

  .sign-out-btn {
    text-align: start;
    transition: color 500ms ease;

    &:hover { color: var(--color-primary); }

    span { margin-left: 1em; }
  }

  @media (min-width: 1024px) {
    position: relative;
    width: auto;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 2em 1.5em;
    border-right: 1px solid var(--color-lightgray);

    &__list {
      display: block;
      margin-top: 1em;
    }

    &__link {
      display: block;
      margin-top: 2em;
      padding-right: 3.5em;

      span { margin-left: 1em; }
    }

    .logo, .sign-out-btn { display: block; }

    .sign-out-btn {
      margin-top: auto;
      color: var(--color-gray);
    }
  }
}
</style>
