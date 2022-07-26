import React, { useState } from 'react';
import SubHeader from '../../components/global/SubHeader';
import skills from './skills.json';
import Collapse from '../../components/global/Collapse';

export default function Skills() {
  const [currentSkill, setCurrentSkill] = useState<number>(0);
  const changeCurrentSkill = (index: number) => {
    setCurrentSkill((v) => (v === index ? -1 : index));
  };

  return (
    <section className="md:pt-20 pb-14 md:pb-32 container md:px-24">
      <div className="mb-24">
        <SubHeader subtitle="SKILLS" title="I Can Help You With" />
      </div>
      <div className="grid md:grid-cols-2 gap-x-5 gap-y-8 md:gap-y-[90px]">
        {skills.map(({ id, lists, smaller, title }, index) => (
          <div
            key={id}
            className="border-b md:border-b-0 pb-4 md:pb-0 last:border-opacity-0 border-primary-700 border-opacity-20"
          >
            <h5
              className="mb-4 md:mb-8 font-bold flex justify-between items-center cursor-pointer md:cursor-auto"
              onClick={() => changeCurrentSkill(index)}
            >
              <span>{title}</span>
              <img
                src="/images/chevron-down.svg"
                className={`md:hidden duration-300 h-5 w-5 ${
                  index === currentSkill ? 'rotate-180' : ''
                }`}
                alt=""
              />
            </h5>
            <Collapse mobile open={index === currentSkill}>
              <ul className={`${smaller ? 'md:grid grid-cols-2' : ''}`}>
                {lists.map((_, i) => (
                  <li
                    className="flex items-center gap-2.5 font-medium text-md md:text-xl text-primary-700 text-opacity-70 mb-4"
                    key={i}
                  >
                    <img src="/images/check.svg" alt="" />
                    <span>{_}</span>
                  </li>
                ))}
              </ul>
            </Collapse>
          </div>
        ))}
      </div>
    </section>
  );
}
