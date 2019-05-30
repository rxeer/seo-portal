import React, { PureComponent } from 'react';

import axios from 'axios';

import { Trans } from 'react-i18next';

import { connectTranslation } from '../../../middlewares/connect-translation';

import { Modal } from '../../../components/modal/modal';
import { Spinner } from '../../../components/spinner/spinner';
import { FormGroup } from '../../../components/form-group/form-group';
import { InputControl } from '../../../components/input-control/input-control';

import { ContactUsDto } from './contact-us.dto';

import './contact-us-modal.scss';

@connectTranslation()
class ContactUsModalForm extends PureComponent {

  initialState = {
    name: '',
    message: '',
    email: '',
    isLoading: false,
    isContactUsModalOpen: false,
  };

  state = { ...this.initialState };

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.isContactUsModalOpen) {
      this.setState({ isContactUsModalOpen: nextProps.open });
    }
  }

  closeModal() {
    this.setState({ isContactUsModalOpen: false });
    this.props.close();
    this.setState({ ...this.initialState });
  }

  sendMessage(event) {
    event.preventDefault();
    const data = new ContactUsDto(this.state);
    axios.post('https://mokup.herokuapp.com/message', data)
      .then(() => {
        this.closeModal();
        this.setState({ isLoading: false });
      }).catch(() => {
        alert(t('contact-us.error'));
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { t } = this.props;

    return (
      <div className="contact-us">
        <Modal
          closeModal={() => this.closeModal()}
          open={this.state.isContactUsModalOpen}
        >
          <p className="contact-us-form__title">
            <Trans i18nKey="contact-us.title">
              Зв&aposяжіться з нами
            </Trans>
          </p>
          <form
            className="contact-us-form"
            onSubmit={this.sendMessage.bind(this)}
          >
            <FormGroup className="half-width">
              <InputControl
                type="text"
                required
                minLength={2}
                maxLength={35}
                value={this.state.name}
                label={t('contact-us.name.label')}
                title={t('contact-us.name.label')}
                change={value => this.setState({ name: value })}
                placeholder={t('contact-us.name.placeholder')}
              />
            </FormGroup>
            <FormGroup className="half-width">
              <InputControl
                type="email"
                required
                minLength={7}
                value={this.state.email}
                label={t('contact-us.email.label')}
                title={t('contact-us.email.label')}
                change={value => this.setState({ email: value })}
                placeholder={t('contact-us.email.placeholder')}
              />
            </FormGroup>
            <FormGroup className="full-width">
              <InputControl
                type="text"
                multiple
                required
                minLength={35}
                maxLength={3000}
                value={this.state.message}
                label={t('contact-us.question.label')}
                title={t('contact-us.question.label')}
                change={value => this.setState({ message: value })}
                placeholder={t('contact-us.question.placeholder')}
              />
            </FormGroup>
            <FormGroup className="full-width">
              <div className="contact-us-form__actions">
                <button
                  onClick={() => this.closeModal()}
                  type="button"
                >
                  <Trans i18nKey="contact-us.actions.cancel">
                    Назад
                  </Trans>
                </button>
                <button type="submit">
                  <Trans i18nKey="contact-us.actions.submit">
                    Відправити
                  </Trans>
                </button>
              </div>
            </FormGroup>
          </form>
        </Modal>
        <Spinner show={this.state.isLoading} />
      </div>
    );
  }

}

export default ContactUsModalForm;
