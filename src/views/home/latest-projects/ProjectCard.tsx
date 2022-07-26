import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button';

export default function ProjectCard() {
  return (
    <div
      className="w-full relative group flex items-end shadow-lg bg-projectcards rounded-lg md:rounded-[20px] p-5 md:p-8 cursor-pointer overflow-hidden"
      style={{ aspectRatio: '560 / 395' }}
    >
      <img
        src="/images/Rectangle 3.jpg"
        className="absolute group-hover:scale-110 duration-200 top-0 right-0 bottom-0 left-0 rounded-lg md:rounded-[20px]"
        alt=""
      />
      <div className="relative z-10">
        <h6 className="md:text-4xl text-3xl md:mb-0 mb-1.5 font-bold text-white">
          <Link to="/">Anteater Pathway</Link>
        </h6>
        <Button variant="inline-transparent-white" text="View this project" />
      </div>
    </div>
  );
}
