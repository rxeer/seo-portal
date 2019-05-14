import { Component } from 'react';
import './balance.scss';

export class Settings extends Component {

  // SHEET Name
  vizBalance = {
    type: 'QdtViz',
    props: {
      id: 'dJZnyF',
      height: '2.5rem',
    },
  };

  // LANG
  vizLANG = {
    type: 'QdtViz',
    props: {
      id: '6c2909d9-4e7d-4190-8b3a-b8459886cfdc',
      height: '2.2rem',
    },
  };

  // Filters UP
  vizPeriodType = {
    type: 'QdtViz',
    props: {
      id: 'CmkYcqf',
      height: '2.2rem',
    },
  };

  vizPeriod = {
    type: 'QdtViz',
    props: {
      id: 'e0787051-038d-4711-8a7f-b691864a360e',
      height: '2.2rem',
    },
  };

  vizIndustry = {
    type: 'QdtViz',
    props: {
      id: 'mkdjU',
      height: '2.2rem',
    },
  };

  vizOwnership = {
    type: 'QdtViz',
    props: {
      id: 'hxdasjF',
      height: '2.2rem',
    },
  };

  vizSOE = {
    type: 'QdtViz',
    props: {
      id: 'KfVvw',
      height: '2.2rem',
    },
  };

  // Filters KPI
  vizKPIType = {
    type: 'QdtViz',
    props: {
      id: 'HafmZAd',
      height: '2.2rem',
    },
  };

  vizKPI = {
    type: 'QdtViz',
    props: {
      id: 'pbVkncb',
      height: '2.2rem',
    },
  };

  // Table
  vizTable = {
    type: 'QdtViz',
    props: {
      id: 'KRpazd',
      height: '46.5rem',
      exportData: true,
      exportDataOptions: {
        format: 'OOXML',
        state: 'P',
      },
      exportDataTitle: 'Excel',
    },
  };

}
