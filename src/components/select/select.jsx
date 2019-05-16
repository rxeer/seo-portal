import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import QdtComponent from '../QdtComponent';

import './select.scss';

const Select = ({
  type = '', props = {}, lineable = false, className = '',
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
  type: PropTypes.string.isRequired,
  props: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  lineable: PropTypes.string.isRequired,
};

export default Select;
