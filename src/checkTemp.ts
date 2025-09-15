/**
 * Checks if the temperature is within a safe range.
 * @param temp - temperature in Celsius
 * @returns true if safe (between 18°C and 30°C), false otherwise
 */
export function checkTemperature(temp: number): boolean {
  return temp >= 18 && temp <= 30;
}
