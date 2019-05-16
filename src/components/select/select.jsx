import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import QdtComponent from '../QdtComponent';

import './select.scss';

const Select = ({
  type = '', props = {}, lineable = false, className = '', label = '',
}) => {
  const [collapsed, changeCollapseState] = useState(false);

  return (
    <Fragment>
      {
        collapsed && (
        <div
          className="outside"
          onClick={() => changeCollapseState(false)}
        />
        )
      }
      <div onClick={() => changeCollapseState(!collapsed)}>
        <label className="select-label">{label}</label>
        <QdtComponent
          className={`select
          ${collapsed ? 'open' : ''}
          ${lineable ? 'lineable' : ''}
          ${className}
          `}
          type={type}
          props={props}
        />
      </div>
    </Fragment>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  props: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  lineable: PropTypes.string.isRequired,
};


Select.defaultProps = {
  label: '',
};

export default Select;
