import { Component } from 'react';

import './header.scss';

export class Settings extends Component {

  languageInterval = 0;

  viz1 = {
    type: 'QdtCurrentSelections',
    props: { height: 'auto' },
  };

  //  lang

  vizLANG = {
    type: 'QdtViz',
    props: {
      id: 'bZVzZgs',
      height: '1.75rem',
    },
  };

  // Text
  vizMain = {
    type: 'QdtViz',
    props: {
      id: 'MaBJSm',
      height: '2.8rem',
    },
  };

  // 'JfTC'

  vizCountryLevel = {
    type: 'QdtViz',
    props: {
      id: 'HwLEbpk',
      height: '2.8rem',
    },
  };

  vizIndustryLevel = {
    type: 'QdtViz',
    props: {
      id: 'qBJGfd',
      height: '2.8rem',
    },
  };

  vizOwnershipLevel = {
    type: 'QdtViz',
    props: {
      id: 'Gvbcm',
      height: '2.8rem',
    },
  };

  vizSOELevel = {
    type: 'QdtViz',
    props: {
      id: 'jsCarky',
      height: '2.8rem',
    },
  };

  vizRISK = {
    type: 'QdtViz',
    props: {
      id: 'XUHkNsJ',
      height: '2.8rem',
    },
  };

  vizBalance = {
    type: 'QdtViz',
    props: {
      id: 'dJZnyF',
      height: '2.8rem',
    },
  };

  vizFinance = {
    type: 'QdtViz',
    props: {
      id: 'HfnUJjg',
      height: '2.8rem',
    },
  };

  vizAnalytics = {
    type: 'QdtViz',
    props: {
      id: 'ZrhDvkG',
      height: '2.8rem',
    },
  };

}
