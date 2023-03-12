import { describe, test, expect } from 'vitest';
import * as exported from './index';

// we test here all the exported functions
// of the library/module
describe('index', () => {
  test('isObject', () => {
    expect(typeof exported.isObject).toBe('function');
  });
});
