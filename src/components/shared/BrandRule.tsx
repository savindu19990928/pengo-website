import React from 'react';

const colors = ['bg-pengo-blue', 'bg-pengo-red', 'bg-pengo-orange', 'bg-pengo-green'];

type BrandRuleProps = {className?: string;segment?: string;};

export function BrandRule({ className = '', segment = 'w-3' }: BrandRuleProps) {
  return (
    <span aria-hidden="true" className={`flex gap-0.5 ${className}`}>
      {colors.map((c) =>
      <span key={c} className={`h-[3px] rounded-full ${segment} ${c}`} />
      )}
    </span>);

}