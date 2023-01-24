import React from 'react';
import './marg.css';

interface IMarg {
  pad?: 20 | 25 | 30 |35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100
}

export function Marg({pad=25}: IMarg) {
  return (
    <div className={`q-${pad}`}>

    </div>
  );
}
