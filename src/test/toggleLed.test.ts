import { describe, it, expect } from "vitest";
import { isOn } from "../toggleLed";

describe("isOn", () => {
  it("returns true if led is On", () => {
    expect(isOn(true)).toBe(true);
  });
});