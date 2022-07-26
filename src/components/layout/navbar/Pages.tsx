import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface PagesProps {
  toggleDrawer?: () => void;
  footer?: boolean;
}

const pages = [
  {
    id: 34,
    name: 'Home',
    url: '/',
  },
  {
    id: 97,
    name: 'About Me',
    url: '/about',
  },
  {
    id: 38,
    name: 'Experience',
    url: '/experience',
  },
  {
    id: 67,
    name: 'Projects',
    url: '/projects',
  },
];

export default function Pages({ toggleDrawer, footer }: PagesProps) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div>
      <ul className="list-none flex md:flex-row flex-col gap-7 md:gap-10 md:items-center">
        {pages.map(({ id, name, url }, index) => {
          let current = false;

          if (index === 0 && path === url) {
            current = true;
          } else if (index > 0 && path.indexOf(url) >= 0) {
            current = true;
          }

          return (
            <li key={id} onClick={toggleDrawer}>
              <Link
                to={url}
                className={`font-medium flex relative flex-col ${
                  footer ? 'items-center' : 'md:items-center'
                } text-md md:text-lg ${current ? 'text-secondary-700 hover:no-underline' : ''}`}
              >
                <span>{name}</span>
                <span
                  className={`rounded-2xl w-5 h-[3px] absolute -bottom-[3px] ${
                    current ? 'bg-secondary-700' : 'bg-transparent'
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
