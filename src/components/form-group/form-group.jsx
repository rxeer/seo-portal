import React from 'react';

export const FormGroup = ({ children, className = '' }) => (
  <div className={`form-group ${className}`}>
    { children }
  </div>
);
