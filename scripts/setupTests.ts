// @ts-ignore (matchers has no types)
import matchers from '@testing-library/jest-dom/matchers';
// @ts-ignore (cleanup is not found, but it is there!)
import { cleanup } from '@testing-library/vue';
import { expect, afterEach } from 'vitest';

// import Vue from 'vue';

// this will cleanup the DOM after each test
afterEach(() => {
  cleanup();
});

expect.extend(matchers);
