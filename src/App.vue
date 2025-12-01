<script setup>
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style>
/* Estilos globais e mobile-first */

#app {
  width: 100%;
  min-height: 100vh;
  background: #fafafa;
  font-family: 'Inter', sans-serif;
  color: #222;
}

/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Tipografia global */
body {
  background: #fafafa;
}
</style>
