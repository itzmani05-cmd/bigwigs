/** Deterministic pseudo-random in [0, 1). Same output on server and client, unlike Math.random(). */
export function seededRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}
