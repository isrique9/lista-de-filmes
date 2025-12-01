<template>
  <div class="form-container">
    <h1 class="form-title">Adicionar Filme</h1>

    <form @submit.prevent="salvarFilme">
      <Input v-model="titulo" label="Título" placeholder="Digite o título..." />
      <Input v-model="ano" label="Ano" type="date" placeholder="Selecione o ano..." />
      <Input v-model="nota" label="Nota" type="number" placeholder="Ex: 8" />
      <Input v-model="comentario" label="Comentário" placeholder="Escreva algo..." />


      <Button style="margin-top: 20px;" label="Salvar Filme" type="submit" />
    </form>
  </div>
</template>

<script setup>
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import { ref } from 'vue'
import Swal from 'sweetalert2'

const titulo = ref('')
const ano = ref('')
const nota = ref('')
const comentario = ref('')

const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  background: '#1a1a1a',
  color: '#fff',
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer
    toast.onmouseleave = Swal.resumeTimer
  }
})

const salvarFilme = () => {
  if (!titulo.value.trim() || !ano.value.trim() || !nota.value.trim() || !comentario.value.trim()) {
    Toast.fire({
      icon: "error",
      title: "Por favor, preencha todos os campos."
    })
    return
  }

  const filme = {
    titulo: titulo.value,
    ano: ano.value,
    nota: nota.value,
    comentario: comentario.value
  }

  const filmesSalvos = JSON.parse(localStorage.getItem('filmes') || '[]')
  filmesSalvos.push(filme)
  localStorage.setItem('filmes', JSON.stringify(filmesSalvos))

  titulo.value = ''
  ano.value = ''
  nota.value = ''
  comentario.value = ''

  Toast.fire({
    icon: "success",
    title: "Filme salvo com sucesso!"
  })
}
</script>

<style scoped>
.form-container {
  padding: 24px;
  max-width: 600px;
  margin: 0 auto; 
}

.form-title {
  font-size: 28px;
  font-weight: 700;
  color: #e0e0e0;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.25);
  margin-bottom: 10px;
}
</style>
