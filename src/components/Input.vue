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
  margin: 12px 0;
  width: 100%;
}

/* Label */
.input-label {
  font-size: 15px;
  color: #e9e9e9;
  margin-bottom: 4px;
}

/* Campo */
.input-field {
  padding: 12px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
}

/* Responsivo */
@media (max-width: 600px) {
  .input-label {
    font-size: 14px;
  }

  .input-field {
    font-size: 17px;
    padding: 10px;
  }
}

@media (max-width: 400px) {
  .input-label {
    font-size: 13px;
  }

  .input-field {
    font-size: 16px;
    padding: 9px;
  }
}

@media (max-width: 300px) {
  .input-label {
    font-size: 12px;
  }

  .input-field {
    font-size: 15px;
    padding: 8px;
  }
}

</style>
