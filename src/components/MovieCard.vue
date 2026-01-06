<script setup>
const props = defineProps({
  posicao: Number,
  titulo: String,
  ano: String,
  nota: String,
  comentario: String,
  index: Number
})
const emit = defineEmits(['editar'])
</script>

<template>
  <div class="card">
    <div v-if="posicao === 0" class="medalha">🥇</div>
    <div v-else-if="posicao === 1" class="medalha">🥈</div>
    <div v-else-if="posicao === 2" class="medalha">🥉</div>

    <h2>{{ titulo }}</h2>
    <p><strong>Ano:</strong> {{ ano }}</p>
    <p><strong>Nota:</strong> {{ nota }}</p>
    <p class="comentario">{{ comentario }}</p>

    <button @click="emit('editar', { index: props.index, titulo: props.titulo, ano: props.ano, nota: props.nota, comentario: props.comentario })">
      Editar
    </button>
  </div>
</template>


<style scoped>
.card {
  height: 100%;
  background: #1f1f1f;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(255,255,255,0.05);
  color: #fff;
  position: relative;
}

.medalha {
  font-size: 24px;
  opacity: 0.9;
  text-shadow: 0 0 6px rgba(255,255,255,0.2);
}

.comentario {
  font-size: 14px;
  opacity: 0.9;
  margin-top: 8px;
  color: #ddd;
}

.editar-btn {
  margin-top: 8px;
  padding: 6px 10px;
  border: 1px solid #ddd;
  background: #f7f7f7;
  border-radius: 6px;
  cursor: pointer;
}
.editar-btn:hover { background: #eee; }
</style>
