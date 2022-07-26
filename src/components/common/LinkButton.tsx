import React from 'react';
import { Link } from 'react-router-dom';
import withButton from '../../HOCs/withButton';
import { ButtonProps } from '../../HOCs/withButton';

function LinkButton({ classStyle, arrow, text, to }: ButtonProps) {
  return (
    <Link to={to ? to : '/'} className={classStyle}>
      {text && <span className="">{text}</span>}
      {!arrow && <img src="/images/Arrow 1.svg" alt="" />}
    </Link>
  );
}

export default withButton(LinkButton);
