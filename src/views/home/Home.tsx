import React from 'react';
import useScrollReset from '../../hooks/useScrollReset';
import Hero from './hero/Hero';
import HowCanHelp from './how-can-help/HowCanHelp';
import LatestProjects from './latest-projects/LatestProjects';

export default function Home() {
  useScrollReset();

  return (
    <div>
      <Hero />
      <LatestProjects />
      <HowCanHelp />
    </div>
  );
}
