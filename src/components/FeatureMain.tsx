import React from 'react'; //disable-eslint-line

import './FeatureMain.css';

export function FeatureMain({ ...props }){
  return (
    <div className="feature-main" {...props}>
      <h1>Manutenção</h1>
    </div>
  )
}