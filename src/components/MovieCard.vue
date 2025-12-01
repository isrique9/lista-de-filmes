<script setup>
defineProps({
  posicao: Number,
  titulo: String,
  ano: String,
  nota: String,
  comentario: String,
})
</script>

<template>
  <div class="card">

    <!-- Medalhas dos 3 primeiros -->
    <div v-if="posicao === 0" class="medalha">🥇</div>
    <div v-else-if="posicao === 1" class="medalha">🥈</div>
    <div v-else-if="posicao === 2" class="medalha">🥉</div>

    <h2>{{ titulo }}</h2>
    <p><strong>Ano:</strong> {{ ano }}</p>
    <p><strong>Nota:</strong> {{ nota }}</p>
    <p class="comentario">{{ comentario }}</p>
  </div>
</template>

<style scoped>
.card {
  background: #1f1f1f;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(255,255,255,0.05);
  color: #fff;
  position: relative; /* Necessário para posicionar a medalha */
}

.medalha {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 28px;
}

.comentario {
  margin-top: 10px;
  font-style: italic;
}
</style>
