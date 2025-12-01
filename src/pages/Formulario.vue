<template>
  <div class="form-container">
    <h1 class="form-title">Adicionar Filme</h1>
    <form @submit.prevent="salvarFilme">
      <Input v-model="titulo" label="Título do Filme" />
      <Input v-model="ano" label="Ano" type="number" />
      <Input v-model="nota" label="Nota (1 a 10)" type="number" />
      <Input v-model="comentario" label="Comentário" type="text" />

      <Button style="margin-top: 20px;" label="Salvar Filme" type="submit" />
    </form>
  </div>
</template>

<script setup>
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import { ref } from 'vue'

const titulo = ref('')
const ano = ref('')
const nota = ref('')
const comentario = ref('')

const salvarFilme = () => {
  const filme = {
    titulo: titulo.value,
    ano: ano.value,
    nota: nota.value,
    comentario: comentario.value
  }

  const filmesSalvos = JSON.parse(localStorage.getItem('filmes') || '[]')
  filmesSalvos.push(filme)
  localStorage.setItem('filmes', JSON.stringify(filmesSalvos))

  // Resetar campos
  titulo.value = ''
  ano.value = ''
  nota.value = ''
  comentario.value = ''

  alert('Filme salvo com sucesso!')
}
</script>

<style scoped>
.form-container {
  padding: 24px;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.form-title {
  font-size: 28px;
  font-weight: 700;
  color: #e0e0e0;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.25);
  margin-bottom: 10px;
}
</style>
