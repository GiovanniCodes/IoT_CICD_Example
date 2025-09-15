export function turnOnFan(temperature: number, threshold: number = 30): boolean {
  return temperature > threshold;
}
