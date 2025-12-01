<script setup>
import { ref, onMounted } from 'vue'
import MovieCard from '../components/MovieCard.vue'

const filmes = ref([])

onMounted(() => {
  const armazenados = JSON.parse(localStorage.getItem('filmes') || '[]')

  const limpos = armazenados
    .filter(f => f.titulo)
    .sort((a, b) => Number(b.nota) - Number(a.nota)) 

  filmes.value = limpos

  localStorage.setItem('filmes', JSON.stringify(limpos))
})

</script>

<template>
  <main class="favoritos-page">
    <h1 class="titulo">Meus Filmes Favoritos</h1>

    <div v-if="filmes.length === 0" class="vazio">
      <p>Nenhum filme salvo ainda 😢</p>
    </div>

    <div v-else class="lista-filmes">
      <MovieCard
        v-for="(f, index) in filmes"
        :key="index"
        :posicao="index"
        :titulo="f.titulo"
        :ano="f.ano"
        :nota="f.nota"
        :comentario="f.comentario"
      />
    </div>
  </main>
</template>

<style scoped>
.favoritos-page {
  padding: 24px;
  max-width: 900px;
  margin: 0 auto;
}

.titulo {
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
}

.lista-filmes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.vazio {
  color: #ccc;
  margin-top: 20px;
}
</style>
