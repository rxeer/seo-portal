import { Component } from 'react';

import './seo.scss';

export class Settings extends Component {

  // SHEET Name
  vizSOELevel = {
    type: 'QdtViz',
    props: {
      id: 'jsCarky', height: '30px',
    },
  };

  vizPeriodLabel = {
    type: 'QdtViz',
    props: {
      id: 'FSzPT', height: '30px',
    },
  };

  vizKPIAssetsLabel = {
    type: 'QdtViz',
    props: {
      id: 'Awgzt', height: '40px',
    },
  };

  vizKPIAssetsValue = {
    type: 'QdtViz',
    props: {
      id: 'bSBzDUY', height: '60px',
    },
  };

  vizLastPeriodLabel = {
    type: 'QdtViz',
    props: {
      id: 'FSzPT', height: '30px',
    },
  };

  vizPlotAssets = {
    type: 'QdtViz',
    props: {
      id: '6fe61bd4-6029-41b0-83ab-401240e66e3f', height: '320px',
    },
  };

  /* vizKPIProfit = {
    type: 'QdtViz',
    props: {
      id: 'd6c20adb-bb03-439b-b39c-78ea6478bfbb', height: '50px',
    },
  }; */
  vizKPIProfitLabel = {
    type: 'QdtViz',
    props: {
      id: 'QbhxSDc', height: '40px',
    },
  };

  vizKPIProfitValue = {
    type: 'QdtViz',
    props: {
      id: 'gbGEz', height: '60px',
    },
  };

  vizPlotProfit = {
    type: 'QdtViz',
    props: {
      id: 'a10b4fad-cecb-4f91-b037-2be2d7574262', height: '320px',
    },
  };

  /* vizKPIUnProfit = {
    type: 'QdtViz',
    props: {
      id: '8ebd87f5-359c-458d-a19f-b5ad125769b9', height: '50px',
    },
  }; */
  vizKPIUnProfitLabel = {
    type: 'QdtViz',
    props: {
      id: 'JdpGfLW', height: '40px',
    },
  };

  vizKPIUnProfitValue = {
    type: 'QdtViz',
    props: {
      id: 'gtVfqgL', height: '60px',
    },
  };

  vizPlotUnProfit = {
    type: 'QdtViz',
    props: {
      id: 'YmZQVz', height: '320px',
    },
  };

  // Filters DOWN
  vizPeriodType = {
    type: 'QdtViz',
    props: {
      id: '2ac019a7-dcc6-46b9-97d6-76ebf71601fa', height: '30px',
    },
  };

  vizPeriod = {
    type: 'QdtViz',
    props: {
      id: '3ff609fe-0f86-4c7a-9fd8-23f260431661', height: '30px',
    },
  };


  // Filters SOE
  vizSOE = {
    type: 'QdtViz',
    props: {
      id: 'EyLuD', height: '30px',
    },
  };

  vizSOELabel = {
    type: 'QdtViz',
    props: {
      id: 'GAE', height: '30px',
    },
  };

  vizIndustryF = {
    type: 'QdtViz',
    props: {
      id: 'NdGRjnP', height: '30px',
    },
  };

  vizOwnershipF = {
    type: 'QdtViz',
    props: {
      id: 'YxuRmEw', height: '30px',
    },
  };

  // Opendatabot data
  vizEDRPOU = {
    type: 'QdtViz',
    props: {
      id: 'gZqEuR', height: '80px',
    },
  };

  vizNAME = {
    type: 'QdtViz',
    props: {
      id: 'hawPQUJ', height: '80px',
    },
  };

  vizNACE = {
    type: 'QdtViz',
    props: {
      id: 'Bjkmq', height: '80px',
    },
  };

  vizOwner = {
    type: 'QdtViz',
    props: {
      id: 'cmbhH', height: '80px',
    },
  };

  vizOwnership = {
    type: 'QdtViz',
    props: {
      id: 'NptgyW', height: '80px',
    },
  };

  vizVAT = {
    type: 'QdtViz',
    props: {
      id: 'MUtmvvJ', height: '80px',
    },
  };

  vizDirector = {
    type: 'QdtViz',
    props: {
      id: 'DjmbjZK', height: '80px',
    },
  };

  vizIndustry = {
    type: 'QdtViz',
    props: {
      id: 'agGBj', height: '80px',
    },
  };

  vizDate = {
    type: 'QdtViz',
    props: {
      id: 'BVcQyY', height: '80px',
    },
  };

  vizAddress = {
    type: 'QdtViz',
    props: {
      id: 'tLMubLX', height: '80px',
    },
  };

  vizStatus = {
    type: 'QdtViz',
    props: {
      id: 'PpThzXR', height: '80px',
    },
  };

  vizDebts = {
    type: 'QdtViz',
    props: {
      id: 'djDpMmP', height: '80px',
    },
  };


  // Judical Register table
  vizRegister = {
    type: 'QdtViz',
    props: {
      id: 'ByzJFN', height: '200px',
    },
  };

  vizHistory = {
    type: 'QdtViz',
    props: {
      id: 'QYGFdE', height: '200px',
    },
  };

  vizTable = {
    type: 'QdtViz',
    props: {
      id: '3b2ef8da-2d4a-42d6-a10f-54918e63a1d3',
      height: '40rem',
      exportData: true,
      exportDataOptions: { format: 'OOXML', state: 'P' },
      exportDataTitle: 'Excel',
    },
  };

}
