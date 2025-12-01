<script setup>
defineProps({
  label: String,
  modelValue: [String, Number],
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="input-group">
    <label class="input-label">{{ label }}</label>
    <input
      :type="type"
      class="input-field"
      :value="modelValue"
      :placeholder="placeholder"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  margin: 10px auto;
}

.input-label {
  font-size: 14px;
  color: #e9e9e9;
}

.input-field {
  padding: 10px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
}
</style>
