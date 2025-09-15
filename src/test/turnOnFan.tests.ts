import { describe, it, expect } from 'vitest';
import { turnOnFan } from '../turnOnFan';

describe('turnOnFan', () => {
  it('should return true when isHot is true', () => {
    expect(turnOnFan(true)).toBe(true);
  });

  it('Failing test', () => {
    expect(turnOnFan(false)).toBe(true);
  });
});
