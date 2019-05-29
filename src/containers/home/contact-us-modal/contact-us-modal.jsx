import React, { PureComponent } from 'react';

import { Modal } from '../../../components/modal/modal';
import { FormGroup } from '../../../components/form-group/form-group';
import { InputControl } from '../../../components/input-control/input-control';

export class ContactUsModalForm extends PureComponent {

  state = {
    isContactUsModalOpen: true,
  };

  render() {
    return (
      <div className="contact-us">
        <Modal open={this.state.isContactUsModalOpen}>
          <form onSubmit={() => {}}>
            <p className="contact-us-form__title">
              Пошук по сайту
            </p>
            <FormGroup className="full-width">
              <InputControl
                type="text"
                label="Gsasdasd"
                title=""
                change={() => {}}
                placeholder=""
              />
            </FormGroup>
          </form>
        </Modal>
      </div>
    );
  }
}
