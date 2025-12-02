<script setup>
defineProps({
  label: String
})
</script>

<template>
  <button class="btn">
    {{ label }}
  </button>
</template>

<style scoped>
.btn {
  width: 100%;
  max-width: 280px; 
  padding: 12px 16px;
  background-color: #3d0f0f;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 20px;
  box-sizing: border-box;
}

.btn:hover {
  background-color: #5a1a1a;
  transform: translateY(-2px);
}
</style>
