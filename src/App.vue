<script setup lang="ts">
import Header from './components/Header.vue';
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <Header />
  <div class="min-h-screen bg-background">
    
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style>
/* Viteのデフォルトスタイルをリセット */
body {
  display: block;
  place-items: unset;
}

#app {
  max-width: 100%;
  margin: 0;
  padding: 0;
  text-align: left;
}
</style>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
