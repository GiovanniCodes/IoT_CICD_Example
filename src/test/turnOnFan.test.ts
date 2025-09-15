import { describe, it, expect } from "vitest";
import { turnOnFan } from "../turnOnFan";

describe("turnOnFan", () => {
  it("should turn fan ON when temperature is above threshold", () => {
    expect(turnOnFan(35)).toBe(true);
  });

  it("should keep fan OFF when temperature is below threshold", () => {
    expect(turnOnFan(25)).toBe(false);
  });

  it("should keep fan OFF when temperature is exactly at the threshold", () => {
    expect(turnOnFan(30)).toBe(false);
  });

  it("should use custom threshold if provided", () => {
    expect(turnOnFan(50, 45)).toBe(true);
    expect(turnOnFan(40, 45)).toBe(false);
  });
});
