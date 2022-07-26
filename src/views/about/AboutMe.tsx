import React from 'react';

export default function AboutMe() {
  return (
    <section className='container flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-24 items-center pt-5 md:pt-24 md:pb-20 pb-0'>
      <div>
        <h1 className='font-bold text-5xl md:text-9xl mb-3'>About Me</h1>
        <p className='text-primary-700 text-opacity-70'>
          I recently graduated with a Bachelor of Science in Computer Science
          from the University of California, Irvine in June 2022. In the last
          four years, I have gained experience in several software language
          including C++, Java, Android Studio, JavaScript, HTML, CSS, PHP,
          Firebase, MongoDB, React Native, Node.js. I have earned these
          experiences by interning at Astra International as a data scientist
          intern and a Mobile Developer Intern at Traveloka.
        </p>
      </div>
      <div>
        <img
          src='/images/language.jpeg'
          className='shadow-sm w-full rounded-[20px]'
          alt=''
        />
      </div>
    </section>
  );
}
