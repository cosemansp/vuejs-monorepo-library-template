<script lang="ts" setup>
import ctl from '@netlify/classnames-template-literals';
import { computed } from 'vue';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export type ButtonVariant = ButtonProps['variant'];

const props = defineProps<ButtonProps>();

const classes = computed(() => {
  return ctl(`
    btn
    ${props.variant === 'primary' && 'btn-primary'}
    ${props.variant === 'secondary' && 'btn-secondary'}
    ${props.disabled && 'btn-disabled'}
  `);
});
</script>

<template>
  <button type="button" v-bind="$attrs" :class="classes"><slot /></button>
</template>

<style>
.btn {
  border: none;
  border-radius: 4px;
  margin: 5px;
  padding: 8px 16px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}
.btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.btn-primary {
  background-color: blue;
}
.btn-secondary {
  background-color: green;
}
</style>
