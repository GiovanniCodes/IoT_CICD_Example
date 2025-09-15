import { describe, it, expect } from 'vitest';
import { turnOnFan } from '../turnOnFan';

describe('turnOnFan', () => {
  it('should return true when isHot is true', () => {
    expect(turnOnFan(true)).toBe(true);
  });

  it('should return false when isHot is false', () => {
    expect(turnOnFan(false)).toBe(false);
  });
});
