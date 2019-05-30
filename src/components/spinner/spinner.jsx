import React from 'react';

import PropTypes from 'prop-types';

import './spinner.scss';

export const Spinner = ({ show }) => (
  show ? <div className="loader-container"/> : null
);

Spinner.propTypes = {
  show: PropTypes.bool.isRequired,
};
