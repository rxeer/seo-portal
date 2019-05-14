import React from 'react';
import QdtComponent from '../components/QdtComponent';

// SHEET Name
const vizAnalytics = {
  type: 'QdtViz',
  props: {
    id: 'ZrhDvkG', height: '30px',
  },
};

// LANG
const vizLANG = {
  type: 'QdtViz',
  props: {
    id: 'PpRup', height: '30px',
  },
};

// Filters UP
const vizPeriodType = {
  type: 'QdtViz',
  props: {
    id: 'NpAGS', height: '30px',
  },
};
const vizPeriod = {
  type: 'QdtViz',
  props: {
    id: 'BGjpfFc', height: '30px',
  },
};
const vizOwnership = {
  type: 'QdtViz',
  props: {
    id: 'BueKPmG', height: '30px',
  },
};
const vizIndustry = {
  type: 'QdtViz',
  props: {
    id: 'xGjQm', height: '30px',
  },
};
const vizSOE = {
  type: 'QdtViz',
  props: {
    id: 'FKPpcm', height: '30px',
  },
};

// Filter KPI
const vizKPI = {
  type: 'QdtViz',
  props: {
    id: 'JUmxPGc', height: '30px',
  },
};

// KPI
/* const vizExp = {
  type: 'QdtViz',
  props: {
    id: 'HGKfuCm', height: '60px',
  },
}; */
const vizExpLabel = {
  type: 'QdtViz',
  props: {
    id: 'mVLjGx', height: '40px',
  },
};
const vizExpValue = {
  type: 'QdtViz',
  props: {
    id: 'bstyW', height: '60px',
  },
};
/* const vizMax = {
  type: 'QdtViz',
  props: {
    id: 'JtxtkM', height: '60px',
  },
}; */
const vizMaxLabel = {
  type: 'QdtViz',
  props: {
    id: 'QbwjEfP', height: '40px',
  },
};
const vizMaxValue = {
  type: 'QdtViz',
  props: {
    id: 'msjRP', height: '60px',
  },
};
/* const vizAvg = {
  type: 'QdtViz',
  props: {
    id: 'ZfkZTF', height: '60px',
  },
}; */
const vizAvgLabel = {
  type: 'QdtViz',
  props: {
    id: 'FXsWMem', height: '40px',
  },
};
const vizAvgValue = {
  type: 'QdtViz',
  props: {
    id: 'vCmnAHW', height: '60px',
  },
};
/* const vizMedian = {
  type: 'QdtViz',
  props: {
    id: 'mCcL', height: '60px',
  },
}; */
const vizMedianLabel = {
  type: 'QdtViz',
  props: {
    id: 'JCMdhv', height: '40px',
  },
};
const vizMedianValue = {
  type: 'QdtViz',
  props: {
    id: 'pdpyp', height: '60px',
  },
};
const vizRemark = {
  type: 'QdtViz',
  props: {
    id: 'txvCtBU', height: '25px',
  },
};

// Plots
const vizBubblePlot = {
  type: 'QdtViz',
  props: {
    id: 'pbGpNu', height: '320px',
  },
};
const vizTOPLabel = {
  type: 'QdtViz',
  props: {
    id: 'aGsJau', height: '30px',
  },
};
const vizTOPInput = {
  type: 'QdtViz',
  props: {
    id: 'ASvHFCF', height: '35px',
  },
};
const vizKPI2 = {
  type: 'QdtViz',
  props: {
    id: 'RmbJbR', height: '35px',
  },
};
const vizKPIPlot = {
  type: 'QdtViz',
  props: {
    id: 'pvTagr', height: '700px',
  },
};
const vizKPIPlotTitle = {
  type: 'QdtViz',
  props: {
    id: 'jJPKrh', height: '40px',
  },
};
const vizKPIPlotSubTitle = {
  type: 'QdtViz',
  props: {
    id: 'CamSDwV', height: '30px',
  },
};
const vizKPI2Plot = {
  type: 'QdtViz',
  props: {
    id: 'FmPmpym', height: '700px',
  },
};
const vizKPI2PlotTitle = {
  type: 'QdtViz',
  props: {
    id: 'JEfRvpr', height: '40px',
  },
};
const vizKPI2PlotSubTitle = {
  type: 'QdtViz',
  props: {
    id: 'MemUNGp', height: '30px',
  },
};

// Table
const vizTable = {
  type: 'QdtViz',
  props: {
    id: 'Ugnz',
    height: '380px',
    exportData: true,
    exportDataOptions: { format: 'OOXML', state: 'P' },
    exportDataTitle: 'Excel',
  },
};

const EmbedObject = () => (
  <div>
    <div className="row justify-content-end pt20">
      <div className="col-sm-9 col-7 cntr">
        <h4><QdtComponent type={vizAnalytics.type} props={vizAnalytics.props} /></h4>
      </div>
      <div className="col-sm-2 col-4 p0">
        <QdtComponent type={vizLANG.type} props={vizLANG.props} />
      </div>
    </div>
    <div className="row justify-content-start">
      <div className="col-md-4 col-sm-12">
        <div className="row">
          <div className="col-md-7 col-sm-7">
            <QdtComponent type={vizPeriodType.type} props={vizPeriodType.props} />
          </div>
          <div className="col-md-5 col-sm-5">
            <QdtComponent type={vizPeriod.type} props={vizPeriod.props} />
          </div>
        </div>
      </div>
      <div className="col-md-12 col-sm-12">
        <div className="row">
          <div className="col-md-4">
            <QdtComponent type={vizOwnership.type} props={vizOwnership.props} />
          </div>
          <div className="col-md-4">
            <QdtComponent type={vizIndustry.type} props={vizIndustry.props} />
          </div>
          <div className="col-md-4">
            <QdtComponent type={vizSOE.type} props={vizSOE.props} />
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-start align-items-center">
      <div className="col-xl-4 col-lg-4 col-md-4">
        <QdtComponent type={vizKPI.type} props={vizKPI.props} />
      </div>
      <div className="col-xl-8 col-lg-12 col-md-12">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <QdtComponent type={vizExpLabel.type} props={vizExpLabel.props} />
            <QdtComponent type={vizExpValue.type} props={vizExpValue.props} />
          </div>
          <div className="col-md-3 col-sm-6">
            <QdtComponent type={vizMaxLabel.type} props={vizMaxLabel.props} />
            <QdtComponent type={vizMaxValue.type} props={vizMaxValue.props} />
          </div>
          <div className="col-md-3 col-sm-6">
            <QdtComponent type={vizAvgLabel.type} props={vizAvgLabel.props} />
            <QdtComponent type={vizAvgValue.type} props={vizAvgValue.props} />
          </div>
          <div className="col-md-3 col-sm-6">
            <QdtComponent type={vizMedianLabel.type} props={vizMedianLabel.props} />
            <QdtComponent type={vizMedianValue.type} props={vizMedianValue.props} />
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-12">
            <QdtComponent type={vizRemark.type} props={vizRemark.props} />
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-12">
        <QdtComponent type={vizBubblePlot.type} props={vizBubblePlot.props} />
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="row justify-content-center align-items-center">
          <div className="col-2">
            <QdtComponent type={vizTOPLabel.type} props={vizTOPLabel.props} />
          </div>
          <div className="col-2">
            <QdtComponent type={vizTOPInput.type} props={vizTOPInput.props} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <QdtComponent type={vizKPIPlotTitle.type} props={vizKPIPlotTitle.props} />
            <QdtComponent type={vizKPIPlotSubTitle.type} props={vizKPIPlotSubTitle.props} />
            <QdtComponent type={vizKPIPlot.type} props={vizKPIPlot.props} />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="row justify-content-end">
          <div className="col-md-6">
            <QdtComponent type={vizKPI2.type} props={vizKPI2.props} />
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-12">
            <QdtComponent type={vizKPI2PlotTitle.type} props={vizKPI2PlotTitle.props} />
            <QdtComponent type={vizKPI2PlotSubTitle.type} props={vizKPI2PlotSubTitle.props} />
            <QdtComponent type={vizKPI2Plot.type} props={vizKPI2Plot.props} />
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
