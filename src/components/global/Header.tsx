import React from 'react';

export interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="mt-5 md:mt-20 mb-14 md:mb-24">
      <header className="container  text-center">
        <span className="uppercase font-bold text-md md:text-xl">{subtitle}</span>
        <h1 className="font-bold text-5xl md:text-9xl">{title}</h1>
      </header>
    </div>
  );
}
