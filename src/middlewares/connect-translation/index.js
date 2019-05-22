import { withTranslation } from 'react-i18next';

export const connectTranslation = () => WrappedComponent => withTranslation()(WrappedComponent);
