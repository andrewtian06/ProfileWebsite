import React from 'react';
import Button from '../../../components/common/Button';
import helpPoints from './helpPoints.json';

export default function HowCanHelp() {
  return (
    <section className="bg-white">
      <div className="container pt-[72px] pb-[88px] md:pt-[120px] md:pb-[120px]">
        <div className="grid md:grid-cols-2 gap-8 md:gap-24 items-center">
          <div className="text-center md:text-left">
            <h4 className="text-md md:text-xl font-bold md:mb-2 uppercase">HOW CAN I HELP?</h4>
            <h3 className="text-5xl md:text-7xl mb-4 md:mb-6 font-bold">
              <span className="text-secondary-700">Solutions</span> for your website, database and
              career
            </h3>
            <p className="text-primary-700 text-opacity-70 md:mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et aliquet elementum.
            </p>
            <div className="hidden md:block">
              <Button variant="medium-outlined" text="My Experience" />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-6">
              {helpPoints.map(({ id, icon, title, describe }) => (
                <div
                  key={id}
                  className="rounded-[10px] shadow-md bg-white py-5 md:py-[30px] px-5 flex gap-5"
                >
                  <img src={icon} alt={title} />
                  <div className="flex flex-col gap-2">
                    <h6 className="font-bold text-2xl md:text-3xl">{title}</h6>
                    <p className="text-primary-900 text-opacity-50 text-md md:text-xl">
                      {describe}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden flex flex-col">
            <Button text="My Experience" />
          </div>
        </div>
      </div>
    </section>
  );
}
