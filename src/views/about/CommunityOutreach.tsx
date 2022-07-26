import React from 'react';
import { Link } from 'react-router-dom';
import SubHeader from '../../components/global/SubHeader';

export default function CommunityOutreach() {
  return (
    <div className="bg-white">
      <section className="container pt-10 pb-12 md:pt-36 md:pb-36">
        <div className="mb-10 md:mb-12">
          <SubHeader title="Community Outreach" subtitle="VOLUNTEER ACTIVITIES" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-5">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-b-lg rounded-t-[20px] border border-primary-300 border-opacity-0 hover:border-opacity-30 cursor-pointer duration-200"
            >
              <img
                className="w-full rounded-lg md:rounded-[20px]"
                src="/images/Rectangle 2.jpg"
                alt=""
              />
              <div className="p-4">
                <div className="mb-4 md:mb-5">
                  <span className="font-medium text-md md:text-xl text-primary-700 text-opacity-50">
                    2018 - 2020
                  </span>
                  <h5 className="font-bold text-2xl md:text-3xl">
                    <Link to="/">Notetaker, Diablo Valley College</Link>
                  </h5>
                </div>
                <p className="text-primary-700 text-opacity-70">
                  Helped 2 students with learning disabilities to achieve their academic goals each
                  semester by taking detailed notes for community college Mathematics and Physics
                  lectures.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
