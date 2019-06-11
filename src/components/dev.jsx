import React from 'react';
import QdtComponent from '../components/QdtComponent';

// SHEET Name
const vizDEV = {
  type: 'QdtViz',
  props: {
    id: 'Fgne', height: '30px',
  },
};

// LANG
const vizLANG = {
  type: 'QdtViz',
  props: {
    id: 'gNGMf', height: '30px',
  },
};

// DBMERTU_UPDATE_DATE Label
const vizDBMERTULabel = {
  type: 'QdtViz',
  props: {
    id: 'jaEXQWC', height: '30px',
  },
};

// DBMERTU_UPDATE_DATE Date
const vizDBMERTUDate = {
  type: 'QdtViz',
  props: {
    id: 'pMdjQ', height: '30px',
  },
};

// ODB_UPDATE_DATE Label
const vizODBLabel = {
  type: 'QdtViz',
  props: {
    id: 'vMFwDT', height: '30px',
  },
};

// ODB_UPDATE_DATE Date
const vizODBDate = {
  type: 'QdtViz',
  props: {
    id: 'MEjMwZ', height: '30px',
  },
};


const EmbedObject = () => (
  <div>
    <div className="row justify-content-end pt20">
      <div className="col-sm-6 col-md-6 col-12">
        <QdtComponent
          className="page-title"
          type={vizDEV.type}
          props={vizDEV.props}
        />
      </div>
    </div>
    <div className="row justify-content-start pt20">
      <div className="col-md-3 col-sm-6 justify-content-start">
        <QdtComponent
          type={vizDBMERTULabel.type}
          props={vizDBMERTULabel.props}
        />
      </div>
      <div className="col-md-2 col-sm-6">
        <QdtComponent
          type={vizDBMERTUDate.type}
          props={vizDBMERTUDate.props}
        />
      </div>
    </div>
    <div className="row justify-content-start pt10">
      <div className="col-md-3 col-sm-6">
        <QdtComponent
          type={vizODBLabel.type}
          props={vizODBLabel.props}
        />
      </div>
      <div className="col-md-2 col-sm-6">
        <QdtComponent type={vizODBDate.type} props={vizODBDate.props} />
      </div>
    </div>
  </div>
);

export default EmbedObject;
