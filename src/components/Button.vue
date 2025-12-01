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
  padding: 12px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
</style>
