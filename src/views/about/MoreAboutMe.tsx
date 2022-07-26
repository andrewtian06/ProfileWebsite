import React from 'react';

export default function MoreAboutMe() {
  return (
    <section className='container flex flex-col md:grid md:grid-cols-2 gap-11 md:gap-24 items-center md:pt-20 md:pb-20 pt-9 pb-12'>
      <div className='relative w-full'>
        <img
          src='/images/engineer.jpg'
          className='shadow-sm rounded-[20px] w-[75%] '
          alt=''
        />
        <div className='xl:h-[200px] lg:h-[170px] md:h-[120px] sm:h-[220px] h-[170px]'>
          <img
            src='/images/engineer2.jpg'
            className='shadow-sm border-8 border-gray-300 top-0 lef-0 translate-x-[30%] translate-y-[36%] absolute rounded-[32px] w-[75%]'
            alt=''
          />
        </div>
      </div>
      <div>
        <h1 className='font-bold text-5xl md:text-7xl mb-6'>More About Me</h1>
        <p className='text-primary-700 text-opacity-70'>
          I’m pursuing software engineering as a career because designing and
          building computer programs allows me to tap onto both my theoretical
          and practical traits. I majored in computer science in college and got
          the chance to get my hands dirty writing code and learning how
          applications are made.
          <br />
          <br />
          What intrigued me the most was how much thinking and design goes into
          even the most everyday applications we use. In fact, I like to believe
          that the simpler an application seems, the more effort was spent
          designing it.
        </p>
      </div>
    </section>
  );
}
