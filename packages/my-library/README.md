# @myscope/my-library

This library contains the ...

## Change Log

See [CHANGELOG.md](./CHANGELOG.md) for a complete list of changes.

## Installation & Setup

```bash
# install via yarn
pnpm add @myscope/my-library
```

## Usage

main.ts

```tsx
import Vue from 'vue';
import App from './App.vue';

import '@myscope/my-library/styles.css';
```

MyComponent.vue

```vue
<script lang="ts" setup>
import { Button } from '@myscope/my-library';
</script>

<template>
  <Button>Click Me</Button>
</template>
```
