import React from 'react';
import useScrollReset from '../../hooks/useScrollReset';
import AboutMe from './AboutMe';
import CommunityOutreach from './CommunityOutreach';
import MoreAboutMe from './MoreAboutMe';

export default function About() {
  useScrollReset();

  return (
    <div>
      <AboutMe />
      <MoreAboutMe />
      <CommunityOutreach />
    </div>
  );
}
