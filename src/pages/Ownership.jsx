import React from 'react';
import QdtComponent from '../components/QdtComponent';

// SHEET Name
const vizOwnershipLevel = {
  type: 'QdtViz',
  props: {
    id: 'Gvbcm', height: '30px',
  },
};

// LANG
const vizLANG = {
  type: 'QdtViz',
  props: {
    id: '1b888beb-2dd0-4180-a8e1-755d303a847a', height: '30px',
  },
};

// KPI and Plots
/* const vizKPIAssets = {
  type: 'QdtViz',
  props: {
    id: '10bfd22f-3407-449c-ba11-2a5075337a9c', height: '50px',
  },
}; */
const vizKPIAssetsLabel = {
  type: 'QdtViz',
  props: {
    id: 'WmemfR', height: '40px',
  },
};
const vizKPIAssetsValue = {
  type: 'QdtViz',
  props: {
    id: 'JjESzmH', height: '60px',
  },
};
const vizLastPeriodLabel = {
  type: 'QdtViz',
  props: {
    id: 'EUnJBt', height: '30px',
  },
};

const vizPlotAssets = {
  type: 'QdtViz',
  props: {
    id: 'a3a44362-3567-466b-b4f7-556a98db09dc', height: '320px',
  },
};

/* const vizKPIProfit = {
  type: 'QdtViz',
  props: {
    id: '2668dbaa-837a-4d7d-a181-53dc861ee4be', height: '50px',
  },
}; */
const vizKPIProfitLabel = {
  type: 'QdtViz',
  props: {
    id: 'BKfNggS', height: '40px',
  },
};
const vizKPIProfitValue = {
  type: 'QdtViz',
  props: {
    id: 'LUDcXtP', height: '60px',
  },
};
const vizPlotProfit = {
  type: 'QdtViz',
  props: {
    id: 'd9887c82-957f-4e33-930d-fa104e1a8244', height: '320px',
  },
};

/* const vizKPIUnProfit = {
  type: 'QdtViz',
  props: {
    id: 'f197f6d3-d0fb-4f52-a14b-c63950684106', height: '50px',
  },
}; */
const vizKPIUnProfitLabel = {
  type: 'QdtViz',
  props: {
    id: 'cyeJxJT', height: '40px',
  },
};
const vizKPIUnProfitValue = {
  type: 'QdtViz',
  props: {
    id: 'pCrAjq', height: '60px',
  },
};

const vizPlotUnProfit = {
  type: 'QdtViz',
  props: {
    id: '4a9b5730-7529-48dd-b366-474fbfe6deac', height: '320px',
  },
};

// Filters DOWN
const vizPeriodType = {
  type: 'QdtViz',
  props: {
    id: 'fa8d3077-bc8f-434b-82d4-64e0ac03d00a', height: '30px',
  },
};

const vizPeriod = {
  type: 'QdtViz',
  props: {
    id: '046fdfe1-549c-44fe-a5d1-485fe5aae1ee', height: '30px',
  },
};

// Button with label DOWN
const vizButton2 = {
  type: 'QdtViz',
  props: {
    id: '9ba6d9f9-09f0-4351-a03c-54d1f02136aa', height: '30px',
  },
};

const vizA2A2 = {
  type: 'QdtViz',
  props: {
    id: 'f5ea0cf6-533e-47e3-9f8f-dbd3a9019fcd', height: '30px',
  },
};

// Filters Ownership
const vizOwnership = {
  type: 'QdtViz',
  props: {
    id: 'pGGkTv', height: '30px',
  },
};
const vizOwnershipLabel = {
  type: 'QdtViz',
  props: {
    id: 'vuPWBq', height: '30px',
  },
};
const vizIndustry = {
  type: 'QdtViz',
  props: {
    id: 'RmmXpB', height: '30px',
  },
};
const vizSOE = {
  type: 'QdtViz',
  props: {
    id: 'nFpjKY', height: '30px',
  },
};

// Table
const vizTable = {
  type: 'QdtViz',
  props: {
    id: '32e6a4cf-fbe6-408e-9a13-c0e05327b7e1',
    height: '450px',
    exportData: true,
    exportDataOptions: { format: 'OOXML', state: 'P' },
    exportDataTitle: 'Excel',
  },
};


const EmbedObject = () => (
  <div>
    <div className="row justify-content-end pt20">
      <div className="col-sm-9 col-7 cntr">
        <h4><QdtComponent type={vizOwnershipLevel.type} props={vizOwnershipLevel.props} /></h4>
      </div>
      <div className="col-sm-2 col-4 p0">
        <QdtComponent type={vizLANG.type} props={vizLANG.props} />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div>
          <div className="col">
            <QdtComponent type={vizKPIAssetsLabel.type} props={vizKPIAssetsLabel.props} />
            <QdtComponent type={vizKPIAssetsValue.type} props={vizKPIAssetsValue.props} />
            <QdtComponent type={vizLastPeriodLabel.type} props={vizLastPeriodLabel.props} />
          </div>
          <div className="col">
            <QdtComponent type={vizPlotAssets.type} props={vizPlotAssets.props} />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div>
          <div className="col">
            <QdtComponent type={vizKPIProfitLabel.type} props={vizKPIProfitLabel.props} />
            <QdtComponent type={vizKPIProfitValue.type} props={vizKPIProfitValue.props} />
            <QdtComponent type={vizLastPeriodLabel.type} props={vizLastPeriodLabel.props} />
          </div>
          <div className="col">
            <QdtComponent type={vizPlotProfit.type} props={vizPlotProfit.props} />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12">
        <div>
          <div className="col">
            <QdtComponent type={vizKPIUnProfitLabel.type} props={vizKPIUnProfitLabel.props} />
            <QdtComponent type={vizKPIUnProfitValue.type} props={vizKPIUnProfitValue.props} />
            <QdtComponent type={vizLastPeriodLabel.type} props={vizLastPeriodLabel.props} />
          </div>
          <div className="col">
            <QdtComponent type={vizPlotUnProfit.type} props={vizPlotUnProfit.props} />
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-start">
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="row">
          <div className="col-6">
            <QdtComponent type={vizPeriodType.type} props={vizPeriodType.props} />
          </div>
          <div className="col-6">
            <QdtComponent type={vizPeriod.type} props={vizPeriod.props} />
          </div>
        </div>
      </div>
      <div className="col-xl-8 col-lg-8">
        <div className="row">
          <div className="col-md-3 col-5">
            <QdtComponent type={vizButton2.type} props={vizButton2.props} />
          </div>
          <div className="col-md-9 col-7">
            <QdtComponent type={vizA2A2.type} props={vizA2A2.props} />
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-start">
      <div className="col-xl-8 col-lg-8">
        <div className="row">
          <div className="col-md-3 col-6">
            <QdtComponent type={vizOwnership.type} props={vizOwnership.props} />
          </div>
          <div className="col-md-9 col-12">
            <QdtComponent type={vizOwnershipLabel.type} props={vizOwnershipLabel.props} />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="row">
          <div className="col-6">
            <QdtComponent type={vizIndustry.type} props={vizIndustry.props} />
          </div>
          <div className="col-6">
            <QdtComponent type={vizSOE.type} props={vizSOE.props} />
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-12">
        <QdtComponent type={vizTable.type} props={vizTable.props} />
      </div>
    </div>
  </div>
);

export default EmbedObject;
