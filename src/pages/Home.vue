<script setup>
import Button from '../components/Button.vue'
import logo from '../assets/logo.svg'

import { useRouter } from 'vue-router'

const router = useRouter()

const goTo = (path) => {
  router.push(path)
}
</script>

<template>
  <main class="home">
    <img :src="logo" class="home-logo" />

    <h1 class="home-title">Meus Filmes Favoritos 🎬</h1>

    <p class="home-description">
      Uma forma simples e rápida de salvar e organizar seus filmes preferidos.
    </p>

    <section class="home-actions">
      <Button label="Adicionar Filme" @click="goTo('/formulario')" />
      <Button label="Ver Favoritos" @click="goTo('/favoritos')" />
      <Button label="Créditos" @click="goTo('/creditos')" />
    </section>
  </main>
</template>


<style scoped>
.home {
  width: 100%;
  min-height: 100vh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #181818;
  text-align: center;
}

.home-logo {
  width: 110px;
  height: auto;
  margin-bottom: 24px;
}

.home-title {
  font-size: 26px;
  font-weight: 700;
  color: #222;
}

.home-description {
  font-size: 15px;
  color: #555;
  margin: 12px 0 32px;
  max-width: 280px;
}

.home-actions {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
