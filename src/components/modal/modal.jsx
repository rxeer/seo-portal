import React, { PureComponent } from 'react';

import { object, bool, func } from 'prop-types';

import './modal.scss';

export class Modal extends PureComponent {

  static propTypes = {
    open: bool.isRequired,
    closeModal: func.isRequired,
    children: object.isRequired,
  };

  state = {
    modalOpened: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.modalOpened) {
      this.setState({ modalOpened: nextProps.open });
    }
  }

  closeInnerModal() {
    this.setState({ modalOpened: false });
    this.props.closeModal();
  }

  render() {
    const coverClass = this.state.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover';
    const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container';

    return (
      <div>
        <div className={containerClass}>
          {this.props.children}
        </div>
        <div
          className={coverClass}
          onClick={() => this.closeInnerModal()}
        />
      </div>
    );
  }

}
