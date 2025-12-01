<script setup>
import Button from '../components/Button.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goTo = (path) => {
  router.push(path)
}

</script>

<template>
  <main class="home">
    <h1 class="home-title">Meus Filmes Favoritos 🎬</h1>
    
    <p class="home-subtitle">Organize, lembre e descubra novos filmes</p>

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
  text-align: center;

  background: 
    radial-gradient(circle at top, #361a1a 0%, #181818 70%),
    url("https://www.transparenttextures.com/patterns/noise.png");
  background-blend-mode: overlay;
}

.home-title {
  font-size: 28px;
  font-weight: 700;
  color: #e0e0e0;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.25);
}

.home-subtitle {
  font-size: 14px;
  color: #c7c7c7;
  margin-top: 4px;
  opacity: 0;
  animation: fadeIn 1.2s ease forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

.home-description {
  font-size: 15px;
  color: #ececec;
  margin: 12px 0 32px;
  max-width: 280px;
}

.home-actions {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
