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
  background: 
    radial-gradient(circle at top, #361a1a 0%, #181818 70%),
    url("https://www.transparenttextures.com/patterns/noise.png");
  background-blend-mode: overlay;
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
