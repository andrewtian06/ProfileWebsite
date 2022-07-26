import React from 'react';
import { To } from 'react-router-dom';
export interface ButtonProps {
  text?: string;
  variant?:
    | 'medium-contained'
    | 'medium-outlined'
    | 'medium-outlined-white'
    | 'inline-transparent-white'
    | 'footer-outline-white'
    | 'small-contained'
    | 'small-contained-black';
  arrow?: boolean;
  classStyle?: string;
  to?: To;
  href?: string;
  type?: 'button' | 'reset' | 'submit';
}

export default function withButton(Button: any) {
  return function NewComponent({ variant, ...props }: ButtonProps) {
    const common =
      'rounded-[5px] md:rounded-lg focus:ring-4 ring-blue-500 ring-opacity-50 hover:no-underline duration-75 inline-block';

    const fontSize = 'md:text-2xl text-md';

    let style = `${fontSize} font-semibold text-white bg-primary-900 px-5 py-4 flex items-center justify-center gap-3.5 border border-primary-700`;
    if (variant === 'medium-outlined') {
      style = `${fontSize} font-semibold bg-trasnsparent text-primary-900 px-5 py-4 border border-primary-700 flex items-center justify-center gap-3.5`;
    } else if (variant === 'medium-outlined-white') {
      style = `${fontSize} font-semibold bg-trasnsparent text-white px-5 py-4 border border-white flex items-center justify-center gap-3.5`;
    } else if (variant === 'inline-transparent-white') {
      style =
        'font-normal text-sm md:text-xl bg-trasnsparent text-white flex items-center justify-center gap-2.5';
    } else if (variant === 'footer-outline-white') {
      style =
        'font-semibold text-sm bg-trasnsparent text-white px-5 py-4 border border-white flex items-center border-opacity-70 justify-center gap-3.5';
    } else if (variant === 'small-contained') {
      style =
        'font-semibold flex items-center justify-center gap-3.5 text-sm bg-white text-primary-900 px-5 py-2.5 border border-white';
    } else if (variant === 'small-contained-black') {
      style = 'font-semibold text-sm text-white rounded-lg bg-primary-900 px-5 py-2.5';
    }

    style += ' ' + common;

    return <Button classStyle={style} {...props} />;
  };
}
