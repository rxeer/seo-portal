import { Component } from 'react';

import './country.scss';

export class Settings extends Component {

  // SHEET Name
  vizCountryLevel = {
    type: 'QdtViz',
    props: {
      id: 'HwLEbpk',
      height: '2.5rem',
    },
  };

  // LANG
  // const vizLANG = {
  //   type: 'QdtViz',
  //   props: {
  //     id: 'JBFe',
  //     height: '30px',
  //   },
  // };

  // Filters UP
  vizPeriodType = {
    type: 'QdtViz',
    props: {
      id: 'fKVNKrH',
      height: '30px',
    },
  };

  vizPeriod = {
    type: 'QdtViz',
    props: {
      id: 'jEBEXpm',
      height: '30px',
    },
  };

  // Button with label UP
  vizButton = {
    type: 'QdtViz',
    props: {
      id: 'BjemFGn',
      height: '1.3rem',
    },
  };

  vizA2A = {
    type: 'QdtViz',
    props: {
      id: 'gcfmzNW',
      height: '30px',
    },
  };

  // Plot
  vizNetProfitLabel = {
    type: 'QdtViz',
    props: {
      id: 'Urvm',
      height: '4rem',
    },
  };

  vizNetProfit = {
    type: 'QdtViz',
    props: {
      id: 'dJWcBX',
      height: '28rem',
    },
  };

  // Table
  vizTable = {
    type: 'QdtViz',
    props: {
      id: 'hVUUyPc',
      height: '1080px',
      exportData: true,
      exportDataOptions: { format: 'OOXML', state: 'P' },
      exportDataTitle: 'Excel',
    },
  };

}
