import { Component } from 'react';

import './industry.scss';

export class Settings extends Component {

  // SHEET Name
  vizIndustryLevel = {
    type: 'QdtViz',
    props: {
      id: 'qBJGfd', height: '30px',
    },
  };

  //  Lang
  vizLANG = {
    type: 'QdtViz',
    props: {
      id: 'e7a369df-0ee2-4551-bcc1-92b31d8d607b', height: '30px',
    },
  };

  vizKPIAssets = {
    type: 'QdtViz',
    props: {
      id: 'XKjCU', height: '50px',
    },
  };
  vizKPIAssetsLabel = {
    type: 'QdtViz',
    props: {
      id: 'VKJvpe', height: '40px',
    },
  };

  vizKPIAssetsValue = {
    type: 'QdtViz',
    props: {
      id: 'HFvbmaJ', height: '60px',
    },
  };

  vizLastPeriodLabel = {
    type: 'QdtViz',
    props: {
      id: 'XKjCU', height: '30px',
    },
  };

  vizPlotAssets = {
    type: 'QdtViz',
    props: {
      id: 'zjJeVP', height: '320px',
    },
  };

  /* vizKPIProfit = {
    type: 'QdtViz',
    props: {
      id: 'zexrPc', height: '50px',
    },
  }; */
  vizKPIProfitLabel = {
    type: 'QdtViz',
    props: {
      id: 'yvMjfJ', height: '40px',
    },
  };

  vizKPIProfitValue = {
    type: 'QdtViz',
    props: {
      id: 'jpqbav', height: '60px',
    },
  };

  vizPlotProfit = {
    type: 'QdtViz',
    props: {
      id: 'JfuAdat', height: '320px',
    },
  };

  /* vizKPIUnProfit = {
    type: 'QdtViz',
    props: {
      id: 'PapjRKP', height: '50px',
    },
  }; */
  vizKPIUnProfitLabel = {
    type: 'QdtViz',
    props: {
      id: 'MnFuEwe', height: '40px',
    },
  };

  vizKPIUnProfitValue = {
    type: 'QdtViz',
    props: {
      id: 'UGchqB', height: '60px',
    },
  };

  vizPlotUnProfit = {
    type: 'QdtViz',
    props: {
      id: 'EhzadN', height: '320px',
    },
  };

  // Filters DOWN
  vizPeriodType = {
    type: 'QdtViz',
    props: {
      id: 'd0376bdc-9d3a-42d3-8280-0264b4dfbd35', height: '30px',
    },
  };

  vizPeriod = {
    type: 'QdtViz',
    props: {
      id: '5b1e5ceb-ba77-4010-85f7-57171173f1db', height: '30px',
    },
  };

  // Button with label DOWN
  vizButton2 = {
    type: 'QdtViz',
    props: {
      id: '75f28c83-51b8-4bc0-b76a-97aa1927fb85', height: '30px',
    },
  };

  vizA2A2 = {
    type: 'QdtViz',
    props: {
      id: 'AadjAD', height: '30px',
    },
  };

  // Filters Industry
  vizIndustry = {
    type: 'QdtViz',
    props: {
      id: 'yFUMGj', height: '30px',
    },
  };

  vizIndustryLabel = {
    type: 'QdtViz',
    props: {
      id: 'YRYWLg', height: '30px',
    },
  };

  vizOwnership = {
    type: 'QdtViz',
    props: {
      id: 'TtAYY', height: '30px',
    },
  };

  vizSOE = {
    type: 'QdtViz',
    props: {
      id: 'rmkdwh', height: '30px',
    },
  };

  // Table
  vizTable = {
    type: 'QdtViz',
    props: {
      id: 'f321ca4e-5be0-4851-9cf9-2e8134643d2e',
      height: '100%',
      exportData: true,
      exportDataOptions: { format: 'OOXML', state: 'P' },
      exportDataTitle: 'Excel',
    },
  };

}
