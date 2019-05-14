import React from 'react';

import './footer.scss';

const Footer = () => (
  <footer className="page-footer">
    <p>
      (c)
      {' '}
      { new Date().getFullYear() }
      {' '}
SOE Portal. All rights reserved
    </p>
  </footer>
);

export default Footer;
