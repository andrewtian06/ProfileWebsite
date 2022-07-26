import React from 'react';
import withButton from '../../HOCs/withButton';
import { ButtonProps } from '../../HOCs/withButton';

function AnchorButton({ classStyle, arrow, text, href }: ButtonProps) {
  return (
    <a href={href} className={classStyle}>
      {text && <span className="">{text}</span>}
      {!arrow && <img src="/images/Arrow 1.svg" alt="" />}
    </a>
  );
}

export default withButton(AnchorButton);
