import React from 'react';
import QdtComponent from '../components/QdtComponent';

// SHEET Name
const vizRISK = {
  type: 'QdtViz',
  props: {
    id: 'XUHkNsJ', height: '30px',
  },
};

// LANG
const vizLANG = {
  type: 'QdtViz',
  props: {
    id: 'zcZBDTa', height: '30px',
  },
};

// Filters UP
const vizYear = {
  type: 'QdtViz',
  props: {
    id: 'wAVZxEP', height: '30px',
  },
};
const vizQuarter = {
  type: 'QdtViz',
  props: {
    id: 'eRTPkXy', height: '30px',
  },
};
const vizPeriodType = {
  type: 'QdtViz',
  props: {
    id: 'uskbfz', height: '30px',
  },
};
/* const vizPeriod = {
  type: 'QdtViz',
  props: {
    id: 'dEYeJV', height: '30px',
  },
}; */
const vizSOE = {
  type: 'QdtViz',
  props: {
    id: 'rpGyYnp', height: '30px',
  },
};
const vizOwnership = {
  type: 'QdtViz',
  props: {
    id: 'duvuuJ', height: '30px',
  },
};
const vizIndustry = {
  type: 'QdtViz',
  props: {
    id: 'QpPAW', height: '30px',
  },
};

// KPI param
const vizKPI = {
  type: 'QdtViz',
  props: {
    id: 'HrdGJt', height: '30px',
  },
};
const vizAvgLabel = {
  type: 'QdtViz',
  props: {
    id: 'UjBqvfy', height: '30px',
  },
};
const vizAvg = {
  type: 'QdtViz',
  props: {
    id: 'PPwuMm', height: '30px',
  },
};
const vizCopyLabel = {
  type: 'QdtViz',
  props: {
    id: 'EHqx', height: '30px',
  },
};
const vizCopy = {
  type: 'QdtViz',
  props: {
    id: 'WWfPU', height: '30px',
  },
};
const vizTHoldLabel = {
  type: 'QdtViz',
  props: {
    id: 'wAxgFQ', height: '30px',
  },
};
const vizTHold = {
  type: 'QdtViz',
  props: {
    id: 'tCphvJ', height: '30px',
  },
};
const vizTHDirectLabel = {
  type: 'QdtViz',
  props: {
    id: 'LJJpL', height: '30px',
  },
};
const vizTHDirectDown = {
  type: 'QdtViz',
  props: {
    id: 'upfEMm', height: '30px',
  },
};
const vizTHDirectUp = {
  type: 'QdtViz',
  props: {
    id: 'mmVDxTp', height: '30px',
  },
};
const vizTrendLabel = {
  type: 'QdtViz',
  props: {
    id: 'hskrLQ', height: '30px',
  },
};
const vizTrendDown = {
  type: 'QdtViz',
  props: {
    id: 'aPFQkJ', height: '30px',
  },
};
const vizTrendUp = {
  type: 'QdtViz',
  props: {
    id: 'TvSreRD', height: '30px',
  },
};
const vizKPIAdd = {
  type: 'QdtViz',
  props: {
    id: 'ZDcLA', height: '30px',
  },
};

// Table
const vizKPISelected = {
  type: 'QdtViz',
  props: {
    id: 'pYaXAEj', height: '100px',
  },
};

const vizTable = {
  type: 'QdtViz',
  props: {
    id: 'TQGeTkP',
    height: '500px',
    exportData: true,
    exportDataOptions: { format: 'OOXML', state: 'P' },
    exportDataTitle: 'Excel',
  },
};


const EmbedObject = () => (
  <div>
    <div className="row justify-content-end pt20">
      <div className="col-sm-9 col-7 cntr">
        <h4><QdtComponent type={vizRISK.type} props={vizRISK.props} /></h4>
      </div>
      <div className="col-sm-2 col-4 p0">
        <QdtComponent type={vizLANG.type} props={vizLANG.props} />
      </div>
    </div>
    <div className="row justify-content-start">
      <div className="col-xl-2 col-lg-4 col-md-4 col-sm-2">
        <QdtComponent type={vizYear.type} props={vizYear.props} />
      </div>
      <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
        <QdtComponent type={vizQuarter.type} props={vizQuarter.props} />
      </div>
      <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4">
        <QdtComponent type={vizPeriodType.type} props={vizPeriodType.props} />
      </div>
      <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4">
        <QdtComponent type={vizSOE.type} props={vizSOE.props} />
      </div>
      <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4">
        <QdtComponent type={vizOwnership.type} props={vizOwnership.props} />
      </div>
      <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4">
        <QdtComponent type={vizIndustry.type} props={vizIndustry.props} />
      </div>
    </div>

    <div className="row align-items-center">
      <div className="col-xl-2 col-lg-4 col-md-4 col-sm-8">
        <div className="row justify-content-start">
          <div className="col-12">
            <QdtComponent type={vizKPI.type} props={vizKPI.props} />
          </div>
        </div>
      </div>
      <div className="col-xl-5 col-lg-8 col-md-8 col-sm-11 col-11">
        <div className="row">
          <div className="col-4">
            <div className="row">
              <div className="col-12">
                <QdtComponent type={vizAvgLabel.type} props={vizAvgLabel.props} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <QdtComponent type={vizAvg.type} props={vizAvg.props} />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-12">
                <QdtComponent type={vizCopyLabel.type} props={vizCopyLabel.props} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <QdtComponent type={vizCopy.type} props={vizCopy.props} />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-12">
                <QdtComponent type={vizTHoldLabel.type} props={vizTHoldLabel.props} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <QdtComponent type={vizTHold.type} props={vizTHold.props} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-5 col-lg-7 col-md-8 col-sm-11 col-11">
        <div className="row align-items-center">
          <div className="col-4 p0">
            <div className="row">
              <div className="col-12 p0">
                <QdtComponent type={vizTHDirectLabel.type} props={vizTHDirectLabel.props} />
              </div>
            </div>
            <div className="row">
              <div className="col p0 mrg-25">
                <QdtComponent type={vizTHDirectDown.type} props={vizTHDirectDown.props} />
              </div>
              <div className="col p0 mrg-40">
                <QdtComponent type={vizTHDirectUp.type} props={vizTHDirectUp.props} />
              </div>
            </div>
          </div>
          <div className="col-4 p0">
            <div className="row">
              <div className="col-12 p0">
                <QdtComponent type={vizTrendLabel.type} props={vizTrendLabel.props} />
              </div>
            </div>
            <div className="row">
              <div className="col p0 mrg-25">
                <QdtComponent type={vizTrendDown.type} props={vizTrendDown.props} />
              </div>
              <div className="col p0 mrg-40">
                <QdtComponent type={vizTrendUp.type} props={vizTrendUp.props} />
              </div>
            </div>
          </div>
          <div className="col-2 p0">
            <div className="row">
              <div className="col-12 p0">
                <QdtComponent type={vizKPIAdd.type} props={vizKPIAdd.props} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row justify-content-start">
      <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-4">
        <QdtComponent type={vizKPISelected.type} props={vizKPISelected.props} />
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
