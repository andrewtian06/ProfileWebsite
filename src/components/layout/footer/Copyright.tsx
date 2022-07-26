import React from 'react';

export default function Copyright({ footer }: { footer?: boolean }) {
  const currentYear = new Date().getFullYear();

  return (
    <p
      className={`pt-3 pb-2.5 text-xs  ${
        footer ? 'text-primary-700' : 'text-white text-center'
      } text-opacity-70`}
    >
      &copy; {currentYear} Andrew Tian All Rights Reserved
    </p>
  );
}
