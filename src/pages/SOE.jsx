import React from 'react';
import QdtComponent from '../components/QdtComponent';

// SHEET Name
const vizSOELevel = {
  type: 'QdtViz',
  props: {
    id: 'jsCarky', height: '30px',
  },
};

// LANG
const vizLANG = {
  type: 'QdtViz',
  props: {
    id: 'd0800090-8df3-4d6a-8a34-d56dec0d2ddc', height: '30px',
  },
};

// KPI and Plots
/* const vizKPIAssets = {
  type: 'QdtViz',
  props: {
    id: 'ad2dc4d9-b4c3-4ef2-adee-52ffc3626033', height: '50px',
  },
}; */
const vizKPIAssetsLabel = {
  type: 'QdtViz',
  props: {
    id: 'Awgzt', height: '40px',
  },
};
const vizKPIAssetsValue = {
  type: 'QdtViz',
  props: {
    id: 'bSBzDUY', height: '60px',
  },
};
const vizLastPeriodLabel = {
  type: 'QdtViz',
  props: {
    id: 'FSzPT', height: '30px',
  },
};

const vizPlotAssets = {
  type: 'QdtViz',
  props: {
    id: '6fe61bd4-6029-41b0-83ab-401240e66e3f', height: '320px',
  },
};

/* const vizKPIProfit = {
  type: 'QdtViz',
  props: {
    id: 'd6c20adb-bb03-439b-b39c-78ea6478bfbb', height: '50px',
  },
}; */
const vizKPIProfitLabel = {
  type: 'QdtViz',
  props: {
    id: 'QbhxSDc', height: '40px',
  },
};
const vizKPIProfitValue = {
  type: 'QdtViz',
  props: {
    id: 'gbGEz', height: '60px',
  },
};
const vizPlotProfit = {
  type: 'QdtViz',
  props: {
    id: 'a10b4fad-cecb-4f91-b037-2be2d7574262', height: '320px',
  },
};

/* const vizKPIUnProfit = {
  type: 'QdtViz',
  props: {
    id: '8ebd87f5-359c-458d-a19f-b5ad125769b9', height: '50px',
  },
}; */
const vizKPIUnProfitLabel = {
  type: 'QdtViz',
  props: {
    id: 'JdpGfLW', height: '40px',
  },
};
const vizKPIUnProfitValue = {
  type: 'QdtViz',
  props: {
    id: 'gtVfqgL', height: '60px',
  },
};

const vizPlotUnProfit = {
  type: 'QdtViz',
  props: {
    id: 'e70f1406-ff1e-4cf6-a087-ae8721f65199', height: '320px',
  },
};

// Filters DOWN
const vizPeriodType = {
  type: 'QdtViz',
  props: {
    id: '2ac019a7-dcc6-46b9-97d6-76ebf71601fa', height: '30px',
  },
};

const vizPeriod = {
  type: 'QdtViz',
  props: {
    id: '3ff609fe-0f86-4c7a-9fd8-23f260431661', height: '30px',
  },
};


// Filters SOE
const vizSOE = {
  type: 'QdtViz',
  props: {
    id: 'EyLuD', height: '30px',
  },
};
const vizSOELabel = {
  type: 'QdtViz',
  props: {
    id: 'GAE', height: '30px',
  },
};
const vizIndustryF = {
  type: 'QdtViz',
  props: {
    id: 'NdGRjnP', height: '30px',
  },
};
const vizOwnershipF = {
  type: 'QdtViz',
  props: {
    id: 'YxuRmEw', height: '30px',
  },
};

// Opendatabot data
const vizEDRPOU = {
  type: 'QdtViz',
  props: {
    id: 'gZqEuR', height: '80px',
  },
};
const vizNAME = {
  type: 'QdtViz',
  props: {
    id: 'hawPQUJ', height: '80px',
  },
};
const vizNACE = {
  type: 'QdtViz',
  props: {
    id: 'Bjkmq', height: '80px',
  },
};
const vizOwner = {
  type: 'QdtViz',
  props: {
    id: 'cmbhH', height: '80px',
  },
};
const vizOwnership = {
  type: 'QdtViz',
  props: {
    id: 'NptgyW', height: '80px',
  },
};
const vizVAT = {
  type: 'QdtViz',
  props: {
    id: 'MUtmvvJ', height: '80px',
  },
};
const vizDirector = {
  type: 'QdtViz',
  props: {
    id: 'DjmbjZK', height: '80px',
  },
};
const vizIndustry = {
  type: 'QdtViz',
  props: {
    id: 'agGBj', height: '80px',
  },
};
const vizDate = {
  type: 'QdtViz',
  props: {
    id: 'BVcQyY', height: '80px',
  },
};
const vizAddress = {
  type: 'QdtViz',
  props: {
    id: 'tLMubLX', height: '80px',
  },
};
const vizStatus = {
  type: 'QdtViz',
  props: {
    id: 'PpThzXR', height: '80px',
  },
};
const vizDebts = {
  type: 'QdtViz',
  props: {
    id: 'djDpMmP', height: '80px',
  },
};


// Judical Register table
const vizRegister = {
  type: 'QdtViz',
  props: {
    id: 'ByzJFN', height: '180px',
  },
};

// History table
const vizHistory = {
  type: 'QdtViz',
  props: {
    id: 'QYGFdE', height: '110px',
  },
};

// Table
const vizTable = {
  type: 'QdtViz',
  props: {
    id: '3b2ef8da-2d4a-42d6-a10f-54918e63a1d3',
    height: '350px',
    exportData: true,
    exportDataOptions: { format: 'OOXML', state: 'P' },
    exportDataTitle: 'Excel',
  },
};


const EmbedObject = () => (
  <div>
    <div className="row justify-content-end pt20">
      <div className="col-sm-9 col-7 cntr">
        <h4><QdtComponent type={vizSOELevel.type} props={vizSOELevel.props} /></h4>
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
    </div>
    <div className="row justify-content-start">
      <div className="col-xl-8 col-lg-8">
        <div className="row">
          <div className="col-md-3 col-6">
            <QdtComponent type={vizSOE.type} props={vizSOE.props} />
          </div>
          <div className="col-md-9 col-12">
            <QdtComponent type={vizSOELabel.type} props={vizSOELabel.props} />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="row">
          <div className="col-6">
            <QdtComponent type={vizIndustryF.type} props={vizIndustryF.props} />
          </div>
          <div className="col-6">
            <QdtComponent type={vizOwnershipF.type} props={vizOwnershipF.props} />
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-start">
      <div className="col-xl-6 col-lg-12">
        <div className="row">
          <div className="col-sm-5">
            <QdtComponent type={vizNAME.type} props={vizNAME.props} />
          </div>
          <div className="col-sm-4">
            <QdtComponent type={vizOwnership.type} props={vizOwnership.props} />
          </div>
          <div className="col-sm-3">
            <QdtComponent type={vizEDRPOU.type} props={vizEDRPOU.props} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <QdtComponent type={vizOwner.type} props={vizOwner.props} />
          </div>
          <div className="col-sm-4">
            <QdtComponent type={vizNACE.type} props={vizNACE.props} />
          </div>
          <div className="col-sm-3">
            <QdtComponent type={vizVAT.type} props={vizVAT.props} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <QdtComponent type={vizDirector.type} props={vizDirector.props} />
          </div>
          <div className="col-sm-4">
            <QdtComponent type={vizIndustry.type} props={vizIndustry.props} />
          </div>
          <div className="col-sm-3">
            <QdtComponent type={vizDate.type} props={vizDate.props} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <QdtComponent type={vizAddress.type} props={vizAddress.props} />
          </div>
          <div className="col-sm-4">
            <QdtComponent type={vizDebts.type} props={vizDebts.props} />
          </div>
          <div className="col-sm-3">
            <QdtComponent type={vizStatus.type} props={vizStatus.props} />
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-12">
        <div className="row">
          <div className="col-12">
            <QdtComponent type={vizRegister.type} props={vizRegister.props} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <QdtComponent type={vizHistory.type} props={vizHistory.props} />
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
