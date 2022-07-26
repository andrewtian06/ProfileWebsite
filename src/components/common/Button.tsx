import React from 'react';
import withButton from '../../HOCs/withButton';
import { ButtonProps } from '../../HOCs/withButton';

interface TrueButtonProps extends ButtonProps {}

function Button({ classStyle, arrow, text, type }: TrueButtonProps) {
  return (
    <button type={type || 'button'} className={classStyle}>
      {text && <span className="">{text}</span>}
      {!arrow && <img src="/images/Arrow 1.svg" alt="" />}
    </button>
  );
}

export default withButton(Button);
