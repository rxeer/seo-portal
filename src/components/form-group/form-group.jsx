import React from 'react';

import './form-group.scss';

export const FormGroup = ({ children, className = '' }) => (
  <div className={`form-group ${className}`}>
    { children }
  </div>
);
