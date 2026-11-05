import React from 'react';
import { media } from '../data/media';

type PengoLogoProps = {height?: number;className?: string;variant?: 'full' | 'mark';};

// Crops whitespace around the original square logo file without altering the artwork.
// "mark" shows only the penguin symbol from the same original file.
const CROPS = {
  full: { x: 0.12, y: 0.355, w: 0.74, h: 0.28 },
  mark: { x: 0.13, y: 0.355, w: 0.185, h: 0.28 }
};

export function PengoLogo({ height = 24, className = '', variant = 'full' }: PengoLogoProps) {
  const crop = CROPS[variant];
  const size = height / crop.h;
  return (
    <span className={`relative block shrink-0 overflow-hidden ${className}`} style={{ width: size * crop.w, height }}>
      <img
        src={media.pengoLogo}
        alt={variant === 'full' ? 'Pengo' : ''}
        draggable={false}
        style={{
          position: 'absolute',
          width: size,
          height: size,
          maxWidth: 'none',
          left: -size * crop.x,
          top: -size * crop.y
        }} />
      
    </span>);

}