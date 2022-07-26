import React from 'react';
import { Link } from 'react-router-dom';
import Pages from '../navbar/Pages';
import Button from '../../common/Button';
import AnchorButton from '../../common/AnchorButton';

export default function Links() {
  return (
    <div className="container">
      <div className="flex md:flex-row flex-col items-center gap-4 justify-between text-white">
        <Link to="/">
          <img src="/images/Group 2 (1).svg" className="hidden md:block h-[27px]" alt="" />
          <img src="/images/Frame 54 (1).svg" className="md:hidden" alt="" />
        </Link>
        <Pages footer />
        <div className="flex md:blcok flex-col md:w-auto w-full">
          <AnchorButton
            href="/Resume_Andrew_Tian_1.pdf"
            variant="small-contained"
            text="Download Resume"
          />
        </div>
      </div>
    </div>
  );
}
