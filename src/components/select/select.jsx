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
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  props: PropTypes.object.isRequired,
  lineable: PropTypes.bool,
};

Select.defaultProps = {
  className: '',
  lineable: false,
};

export default Select;
