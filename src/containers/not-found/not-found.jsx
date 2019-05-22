import React from 'react';
import { Link } from 'react-router-dom';

import { Trans } from 'react-i18next';

import { connectTranslation } from '../../middlewares/connect-translation';

import './not-found.scss';

@connectTranslation()
class NotFound extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="not-found">
          <div>
            <div className="not-found__img">
              <img src="../../assets/images/partners/404-image-desktop.svg" alt="" />
            </div>
            <div className="not-found__content">
              <p>
                <Trans i18nKey="not-found.title">
                  Сторінка, яку ви ви шукаєте, не існує
                </Trans>
              </p>
              <Link
                className="not-found__back-link"
                to="/"
              >
                <Trans i18nKey="not-found.action">
                  Назад до головної
                </Trans>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default NotFound;
