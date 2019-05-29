import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import './input-control.scss';

export class InputControl extends PureComponent {

  static propTypes = {
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    change: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

  static defaultProps = {
    required: false,
    placeholder: '',
    maxLength: 30,
    minLength: 10,
  };

  state = {
    value: '',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== prevState.value || nextProps.error !== prevState.error) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }

  changeInputState({ currentTarget }) {
    this.setState({ value: currentTarget.value });
    this.props.change(currentTarget.value);
  }

  render() {
    const {
      type, placeholder, maxLength, minLength, required, title, label,
    } = this.props;
    return (
      <label className="form-label">
        <span className="form-label-title">{label}</span>
        <input
          type={type}
          value={this.state.value || ''}
          title={title}
          onChange={this.changeInputState.bind(this)}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          className="form-control"
          placeholder={placeholder}
        />
      </label>
    );
  }

}
