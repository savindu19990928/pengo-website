export type Accent = 'orange' | 'blue' | 'green' | 'red';

type AccentStyle = {
  onDark: string;
  onLight: string;
  dot: string;
  dotDark: string;
  bar: string;
};

// Original Pengo logo colours, used as restrained accents.
export const accentStyles: Record<Accent, AccentStyle> = {
  orange: { onDark: 'text-pengo-orange', onLight: 'text-pengo-orange-deep', dot: 'bg-pengo-orange', dotDark: 'bg-pengo-orange', bar: 'bg-pengo-orange' },
  blue: { onDark: 'text-glacier', onLight: 'text-pengo-blue-deep', dot: 'bg-pengo-blue', dotDark: 'bg-pengo-blue', bar: 'bg-pengo-blue' },
  green: { onDark: 'text-pengo-green-light', onLight: 'text-pengo-green', dot: 'bg-pengo-green', dotDark: 'bg-pengo-green-light', bar: 'bg-pengo-green' },
  red: { onDark: 'text-pengo-red', onLight: 'text-pengo-red-deep', dot: 'bg-pengo-red', dotDark: 'bg-pengo-red', bar: 'bg-pengo-red' }
};