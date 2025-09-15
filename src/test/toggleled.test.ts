import { describe, it, expect } from "vitest";
import { toggle_led } from "../toggleLed";

describe("toggle_led", () => {
  it("returns true if led state was false", () => {
    expect(toggle_led(false)).toBe(true);
  });

  it("returns false if led state was true", () => {
    expect(toggle_led(true)).toBe(false);
  });

  
  it("Fails test", () => {
    expect(toggle_led(true)).toBe(true);
  });
});
