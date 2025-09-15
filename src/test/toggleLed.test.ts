import { describe, it, expect } from "vitest";
import { toggleLed } from "../toggleLed";

describe("toggleLed", () => {
  it("should turn ON when currently OFF", () => {
    expect(toggleLed(false)).toBe(true);
  });

  it("should turn OFF when currently ON", () => {
    expect(toggleLed(true)).toBe(false);
  });
});
