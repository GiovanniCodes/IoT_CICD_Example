export function isOverheating(temp: number): boolean {
  return temp > 70;
}

export function isUnderheating(temp: number): boolean {
  return temp < 0;
}
