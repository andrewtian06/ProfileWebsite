import React from 'react';
import type { HeaderProps } from './Header';

export default function SubHeader({ subtitle, title }: HeaderProps) {
  return (
    <header className="text-center">
      <span className="block mb-2 font-bold text-md md:text-xl uppercase">{subtitle}</span>
      <h2 className="text-5xl md:text-7xl font-bold">{title}</h2>
    </header>
  );
}
