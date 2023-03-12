<script lang="ts" setup>
import { reactive } from 'vue';
import Button from './Button.vue';
import type { ButtonVariant } from './Button.vue';

// eslint-disable-next-line no-unused-vars
const state = reactive({
  variant: 'primary' as ButtonVariant,
  disabled: false,
});
</script>

<template>
  <Story title="components/Button">
    <Variant title="Variants">
      <h1>Variants</h1>
      <div class="flex gap-1">
        <Button variant="secondary">Secondary</Button>
        <Button variant="primary">Primary</Button>
      </div>

      <div class="mt-3"></div>

      <h1>Disabled</h1>
      <div class="flex gap-1">
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="primary" disabled>Primary</Button>
      </div>
      <template #controls> </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
# Button

The button component

| Prop      | Type     | Default | Description            |
| --------- | -------- | ------- | ---------------------- |
| `variant` | `string` |         | 'primary', 'secondary' |
</docs>
