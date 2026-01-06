<script setup>
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  filme: { type: Object, default: null }
})
const emit = defineEmits(['update:modelValue', 'salvar'])

function fechar() { emit('update:modelValue', false) }
function salvar() { emit('salvar', { ...props.filme }) }
</script>

<template>
  <div v-if="modelValue" class="modal">
    <div class="modal-content">
      <h3>Editar filme</h3>

      <input v-model="filme.titulo" placeholder="Título" />
      <input v-model="filme.ano" placeholder="Ano" />
      <input v-model="filme.nota" type="number" min="0" max="10" step="0.1" placeholder="Nota" />
      <textarea v-model="filme.comentario" placeholder="Comentário"></textarea>

      <div class="acoes">
        <button @click="salvar">Salvar</button>
        <button @click="fechar">Cancelar</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.modal { 
    position: fixed; 
    inset: 0; 
    background: rgba(0,0,0,0.6); 
    display: grid; 
    place-items: center; 
}
.modal-content { 
    background: #fff; 
    padding: 16px; 
    border-radius: 8px; 
    width: 320px; 
}
.acoes { 
    display: flex; 
    gap: 8px; 
    margin-top: 12px; 
}
</style>
