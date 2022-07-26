import React from 'react';

const socials = [
  {
    id: 344,
    url: 'https://www.linkedin.com/in/andrewwtian/',
    icon: '/Instagram_black.svg',
  },
  {
    id: 996,
    url: 'https://github.com/andrewtian06',
    icon: '/github-brands.svg',
  },
  {
    id: 576,
    url: 'https://www.instagram.com/andrewtiaan/',
    icon: '/LinkedIN_black.svg',
  },
];

export default function Socials() {
  return (
    <div>
      <p className="font-medium md:text-2xl text-md mb-3">Check me out on</p>
      <div className="flex gap-5">
        {socials.map(({ id, icon, url }) => (
          <a href={url} target="_blank" key={id}>
            <img className="w-[29px] h-[29px]" src={`/images/${icon}`} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
}
