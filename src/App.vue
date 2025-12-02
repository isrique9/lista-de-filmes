<script setup>
</script>

<template>
  <div id="app-container">
    <RouterView />
  </div>
</template>

<style>

#app-container {
  width: 100%;
  min-height: 100vh;
  background: black;
  background-blend-mode: overlay;
  font-family: 'Inter', sans-serif;
  color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
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

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

</style>
