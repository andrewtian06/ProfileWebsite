import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/">
      <img src="/images/Frame 54.svg" className="h-[21px] md:h-[27px]" alt="" />
    </Link>
  );
}
