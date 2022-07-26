import React, { useState } from 'react';
import './collapse.css';

export interface CollapseProps {
  open: boolean;
  children: JSX.Element;
  mobile?: boolean;
}

export default function Collapse({ mobile, open, children }: CollapseProps) {
  return (
    <div
      className={
        mobile
          ? `accordion-item-md ${!open ? 'collapsed-md' : ''}`
          : `accordion-item ${!open ? 'collapsed' : ''}`
      }
    >
      {children}
    </div>
  );
}
