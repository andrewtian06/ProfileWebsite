import React from 'react';
import AnchorButton from '../../../components/common/AnchorButton';
import Button from '../../../components/common/Button';
import LinkButton from '../../../components/common/LinkButton';
import Socials from './Socials';

export default function Hero() {
  return (
    <main className="mt-5 md:pt-[100px] pb-12 md:pb-[130px] container">
      <div className="flex md:flex-row flex-col-reverse gap-4 md:gap-16 items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <strong className="font-bold text-md md:text-xl">Hello there! I’m</strong>
          <h1 className="text-8xl md:text-10xl font-bold mb-4">
            Andrew <span className="text-secondary-700">Tian</span>
          </h1>
          <p className="font-bold mb-9 md:mb-7">
            Software Engineer{' '}
            <span className="font-medium text-primary-700 text-opacity-60 ">
              based in Irvine, United States
            </span>
          </p>
          <div className="flex md:flex-row flex-col gap-4 md:gap-7 mb-9">
            <AnchorButton href="/Resume_Andrew_Tian_1.pdf" text="Download Resume" />
            <LinkButton to="/about" text="About Me" variant="medium-outlined" />
          </div>
          <div className="flex md:block justify-center">
            <Socials />
          </div>
        </div>
        <div className="flex items-center justify-center md:w-1/2">
          <img className="rounded-[20px] w-full shadow-sm" src="/images/andrew.jpg" alt="" />
        </div>
      </div>
    </main>
  );
}
