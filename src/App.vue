<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  components: { Nav },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

*, *::before, *::after { box-sizing: border-box; }

:root {
  --color-primary: #0047ab;
  --color-white: white;
  --color-black: black;
  --color-gray: #c5c5c5;
  --color-lightgray: #ebe9e7;
  --primary-font: "Ubuntu";
}

@media (min-width: 1024px) {
  #app {
    height: 100vh;
    display: flex;
  }
}

body {
  margin: 0;
  font-family: var(--primary-font), sans-serif;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.75rem;
}

h4 {
  font-size: 1.25rem;
}

a {
  display: inline-block;
  color: inherit;
  text-decoration: none;
}

button {
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

section {
  padding: 3em 2em 5em;
}
</style>
