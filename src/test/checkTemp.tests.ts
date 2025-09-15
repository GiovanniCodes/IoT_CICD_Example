import { describe, it, expect } from 'vitest';
import { checkTemperature } from '../checkTemp';

describe('checkTemperature', () => {
  it('returns true for temperatures within safe range', () => {
    expect(checkTemperature(20)).toBe(true);
    expect(checkTemperature(25)).toBe(true);
  });

  it('returns false for temperatures below safe range', () => {
    expect(checkTemperature(10)).toBe(false);
  });

  it('returns false for temperatures above safe range', () => {
    expect(checkTemperature(35)).toBe(false);
  });
});
