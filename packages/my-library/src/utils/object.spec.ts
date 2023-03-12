import { describe, test, expect } from 'vitest';
import { isObject } from './object';

describe('object utils', () => {
  test('isObject', () => {
    expect(isObject({})).toBeTruthy();
  });
});
