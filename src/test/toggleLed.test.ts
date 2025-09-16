import { describe, expect, it } from "vitest";
import { toggleLed } from "../toggleLed";

describe("isValidSensorValue()", () => {
  it("expect led to be false", () => {
    expect(toggleLed()).toBe(false);
  });

});
