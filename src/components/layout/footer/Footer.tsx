import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import Pages from '../navbar/Pages';
import Copyright from './Copyright';
import Links from './Links';
import Message from './Message';

const contactDetails = [
  {
    id: 343,
    icon: '/images/mail.svg',
    text: 'andrewtian06@gmail.com',
    url: 'mailto:/images/mail.svg',
  },
  {
    id: 4567,
    icon: '/images/phone.svg',
    text: '+16572476065',
    url: 'tel:+16572476065',
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-700">
      <div className="container">
        <div className="pt-[72px] md:pt-[114px] pb-[63px] md:pb-[101px] grid md:grid-cols-12 gap-9 md:gap-24">
          <div className="md:col-span-7 md:text-left text-center">
            <h4 className="text-white font-bold text-md md:text-xl md:mb-2">CONTACT ME</h4>
            <h5 className="font-bold text-5xl md:text-7xl text-secondary-700 mb-[22px] md:mb-7">
              <span className="text-white">Let’s</span> Collaborate!
            </h5>
            <p className="text-white text-md md:text-2xl text-opacity-70 mb-9 md:mb-7">
              Ready to start your next project? Reach out to me through my contact details below or
              send me a direct message. I hope to hear from you soon!
            </p>
            <div className="flex flex-col gap-5 md:gap-3.5">
              {contactDetails.map(({ id, icon, text, url }) => (
                <div className="flex md:flex-row flex-col items-center gap-1 md:gap-3.5" key={id}>
                  <img className="" src={icon} alt="" />
                  <a className="text-lg md:text-xl text-white" href={url}>
                    {text}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <Message />
          </div>
        </div>
        <hr className="border-white border-opacity-[13%] border-t" />
        <div className="pt-12 pb-11 md:pt-10 md:pb-10">
          <Links />
        </div>
        <hr className="border-white border-opacity-[13%] border-t" />
        <Copyright />
      </div>
    </footer>
  );
}
