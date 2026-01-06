<script setup>
import { ref, onMounted } from 'vue'
import MovieCard from '../components/MovieCard.vue'
import EditMovieModal from '../components/EditMovieModal.vue'

const filmes = ref([])
const showModal = ref(false)
const filmeEditando = ref(null)

onMounted(() => {
  const armazenados = JSON.parse(localStorage.getItem('filmes') || '[]')
  const limpos = armazenados
    .filter(f => f.titulo)
    .sort((a, b) => Number(b.nota) - Number(a.nota))
  filmes.value = limpos
  localStorage.setItem('filmes', JSON.stringify(limpos))
})

function editarFilme(payload) {
  filmeEditando.value = { ...payload }
  showModal.value = true
}

function salvarEdicao(filmeAtualizado) {
  const i = filmeAtualizado.index
  filmes.value[i] = {
    titulo: filmeAtualizado.titulo,
    ano: filmeAtualizado.ano,
    nota: filmeAtualizado.nota,
    comentario: filmeAtualizado.comentario
  }
  localStorage.setItem('filmes', JSON.stringify(filmes.value))
  showModal.value = false
}
</script>

<template>
  <main>
    <div v-for="(f, index) in filmes" :key="index">
      <MovieCard
        :posicao="index"
        :titulo="f.titulo"
        :ano="f.ano"
        :nota="f.nota"
        :comentario="f.comentario"
        :index="index"
        @editar="editarFilme"
      />
    </div>

    <EditMovieModal
      v-model="showModal"
      :filme="filmeEditando"
      @salvar="salvarEdicao"
    />
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
