import React from 'react';
import experience from './experience.json';

export default function RelevantExperience() {
  return (
    <section className="container mb-20 md:mb-[70px]">
      <div className="flex flex-col">
        {experience.map(({ id, title, subtitle, listTitle, lists }) => (
          <div key={id} className="grid md:grid-cols-2 group timeline-mobile">
            <div className="mb-4 md:mb-0">
              <h4 className="text-4xl md:text-5xl mb-1 font-bold ">{title}</h4>
              <p className="font-medium text-md md:text-xl text-primary-700 text-opacity-70">
                {subtitle}
              </p>
            </div>
            <div>
              <div className="timeline pb-11 md:pb-[75px] group-last:pb-0">
                <div className="border-line">
                  {[...Array(200)].map((_, i) => (
                    <span key={i} />
                  ))}
                </div>
                <h6 className="font-bold mb-4">{listTitle}</h6>
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
          </div>
        ))}
      </div>
    </section>
  );
}
