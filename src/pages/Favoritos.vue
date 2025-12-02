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
    <!-- Créditos -->
    <section class="header-section">
      <h2 class="subtitulo">Meus Filmes Favoritos 🎬</h2>
      <p class="destaque">Aqui você tem acesso a sua lista de filmes.</p>
    </section>
    
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
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  color: #fff;
  background: #383838;
  border-radius: 12px;
}

.header-section {
  text-align: center;
  margin-bottom: 25px;
}

.subtitulo {
  font-size: 25px;
  margin-bottom: 14px;
  text-align: center;
}

main.favoritos-page {
  width: 100%;
}

.lista-filmes {
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  justify-content: center; 
  gap: 20px; 
}
@media (max-width: 600px) {
  .lista-filmes {
    grid-template-columns: 1fr;
  }
}

.vazio {
  color: #ccc;
  margin-top: 20px;
}
</style>
