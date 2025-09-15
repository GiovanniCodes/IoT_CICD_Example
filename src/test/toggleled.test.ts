import { describe, expect, it } from "vitest";
import { toggleLed } from "../toggleledd";

describe("toggleLed()", () => {
  it("turns off when on", () => {
    expect(toggleLed(true)).toBe(false);
  });

  it("turns on when off", () => {
    expect(toggleLed(false)).toBe(true);
  });
});
