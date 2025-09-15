export function avgTempReading(values: number[]): number {
  const sum = values.reduce((acc, curr) => acc + curr, 0);
  return sum / values.length;
}
