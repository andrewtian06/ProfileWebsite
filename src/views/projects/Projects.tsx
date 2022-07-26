import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/global/Header';
import useScrollReset from '../../hooks/useScrollReset';
import projectDetails from './projectDetails.json';

export default function Projects() {
  useScrollReset();

  return (
    <div>
      <Header subtitle="PROJECTS" title="My Projects" />
      <section className="container md:px-24">
        <div className="flex flex-col gap-20 md:gap-36 mb-20 md:mb-24">
          {projectDetails.map(({ id, thumbnail, title, lists }) => (
            <div
              key={id}
              className="flex flex-col md:flex-row md:even:flex-row-reverse items-center gap-4 md:gap-16"
            >
              <div className="md:w-1/2 w-full">
                <img
                  className="rounded-[20px] w-full cursor-pointer shadow-xs md:shadow-xl"
                  src={thumbnail}
                  alt=""
                />
              </div>
              <div className="md:w-1/2">
                <h4 className="font-bold text-4xl md:text-5xl mb-4 text-black">
                  <Link to="/">{title}</Link>
                </h4>
                <ul className="list-none flex flex-col gap-4 project-list">
                  {lists.map((_, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-md md:text-xl text-primary-900 text-opacity-70 items-start"
                    >
                      <img src="/images/minus.svg" alt="" />
                      <span>{_}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
