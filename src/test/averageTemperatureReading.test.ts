import { describe, it, expect } from "vitest";
import { averageTemperatureReading } from "../averageTemperatureReading";

describe("averageTemperatureReading", () => {
  it("should return the average of multiple values", () => {
    expect(averageTemperatureReading([10, 20, 30])).toBe(30);
  });

  it("should return the same value if only one element", () => {
    expect(averageTemperatureReading([42])).toBe(42);
  });

  it("should return 0 for an empty array", () => {
    expect(averageTemperatureReading([])).toBe(0);
  });
});
