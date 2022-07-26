import React from 'react';
import Header from '../../components/global/Header';
import useScrollReset from '../../hooks/useScrollReset';
import RelevantExperience from './RelevantExperience';
import Skills from './Skills';

export default function Experience() {
  useScrollReset();

  return (
    <div>
      <Header subtitle="EXPERIENCE" title="Relevant Experience" />
      <RelevantExperience />
      <Skills />
    </div>
  );
}
