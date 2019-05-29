import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import './input-control.scss';

export class InputControl extends PureComponent {

  static propTypes = {
    multiple: PropTypes.bool,
    required: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
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
    multiple: false
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
      type, placeholder, maxLength, minLength, required, title, label, multiple
    } = this.props;
    return (
      <label className="form-label">
        <span className="form-label-title">{label}</span>
        {
          multiple ? <textarea
            cols={30}
            rows={10}
            value={this.state.value || ''}
            title={title}
            onChange={this.changeInputState.bind(this)}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            className="form-control"
            placeholder={placeholder}
          /> : <input
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
        }
      </label>
    );
  }

}
