import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button';
import ProjectCard from './ProjectCard';

export default function LatestProjects() {
  return (
    <section className="bg-primary-700 py-20 pb-24 md:pt-28 md:pb-28">
      <div className="container">
        <header className="flex justify-between md:flex-row flex-col gap-8 items-center mb-16 md:mb-14">
          <div className="md:text-left text-center">
            <h2 className="font-bold text-5xl md:text-7xl text-white">
              Latest <span className="text-secondary-700">Projects</span>
            </h2>
            <span className="text-white text-opacity-70">
              Porta donec eget nibh proin nisl a erat.
            </span>
          </div>
          <div className="flex md:block flex-col w-full md:w-auto">
            <Button variant="medium-outlined-white" text="All Projects" />
          </div>
        </header>
        <div className="grid md:grid-cols-2 gap-7 md:gap-5">
          {[...Array(2)].map((_, i) => (
            <ProjectCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
