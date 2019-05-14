import { Component } from 'react';

import './finance.scss';

export class Settings extends Component {

  // SHEET Name
  vizFinance = {
    type: 'QdtViz',
    props: {
      id: 'HfnUJjg', height: '2.5rem',
    },
  };

  // LANG
  // vizLANG = {
  //   type: 'QdtViz',
  //   props: {
  //     id: '4f2f7464-d5c2-4fe8-b3db-2644e4d42b92', height: '30px',
  //   },
  // };

  // Filters UP
  vizPeriodType = {
    type: 'QdtViz',
    props: {
      id: 'ZnxKb', height: '2.2rem',
    },
  };

  vizPeriod = {
    type: 'QdtViz',
    props: {
      id: 'dc85e7a3-36aa-4820-b45c-54727a268a10', height: '2.2rem',
    },
  };

  vizIndustry = {
    type: 'QdtViz',
    props: {
      id: '6e85132b-25eb-4f52-8f44-429471ca19ca', height: '2.2rem',
    },
  };

  vizOwnership = {
    type: 'QdtViz',
    props: {
      id: 'dc8cd7bb-ec99-4dfe-b7a9-73d7c7019d3c', height: '2.2rem',
    },
  };

  vizSOE = {
    type: 'QdtViz',
    props: {
      id: '2f027a80-dcec-44c7-8afe-7b9a5b38b3f7', height: '2.2rem',
    },
  };

  // Filters KPI
  vizKPIType = {
    type: 'QdtViz',
    props: {
      id: 'd1789a94-520a-4213-a0f8-6037b6cd5082', height: '2.2rem',
    },
  };

  vizKPI = {
    type: 'QdtViz',
    props: {
      id: 'a0eeca3e-0cc7-46de-a960-aae4bf71cad8', height: '2.2rem',
    },
  };

  // Table
  vizTable = {
    type: 'QdtViz',
    props: {
      id: '3b31a4d5-b8b1-413d-9215-e82749fc65a5',
      height: '46.5rem',
      exportData: true,
      exportDataOptions: { format: 'OOXML', state: 'P' },
      exportDataTitle: 'Excel',
    },
  };

}
