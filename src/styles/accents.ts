import type { CSSProperties } from 'react';

/** Brand hues as raw RGB triplets, so CSS can mix its own alpha. */
export const accents = {
  violet: ['124 58 237', '217 70 239'],
  cyan: ['6 182 212', '59 130 246'],
  amber: ['245 158 11', '244 63 94'],
  emerald: ['16 185 129', '6 182 212'],
  fuchsia: ['217 70 239', '124 58 237'],
  indigo: ['79 70 229', '6 182 212'],
  rose: ['244 63 94', '217 70 239'],
} as const;

export type AccentName = keyof typeof accents;

/** Spread onto a component's style to re-tint its whole subtree. */
export function accentVars(name: AccentName): CSSProperties {
  const [accent, accent2] = accents[name];
  return { '--accent': accent, '--accent-2': accent2 } as CSSProperties;
}
