import React from 'react';

import Select from '../../components/select/select';

import QdtComponent from '../../components/QdtComponent';

import { Settings } from './balance.setting';

export class Balance extends Settings {

  render() {
    return (
      <main className="balance__main container">
        <QdtComponent
          className="balance__main-title page-title"
          type={this.vizBalance.type}
          props={this.vizBalance.props}
        />
        <div className="row balance__main-upperWrapper">
          <div className="col-3 col-sm-6 col-12 col-lg-4 col-xl-4">
            <Select
              type={this.vizPeriod.type}
              props={this.vizPeriod.props}
            />
          </div>
          <div className="col-3 col-sm-6 col-12 col-lg-4 col-xl-4">
            <Select
              type={this.vizIndustry.type}
              props={this.vizIndustry.props}
            />
          </div>
          <div className="col-3 col-sm-6 col-12 col-lg-4 col-xl-4">
            <Select
              type={this.vizOwnership.type}
              props={this.vizOwnership.props}
            />
          </div>
          <div className="col-3 col-sm-6 col-12 col-lg-4 col-xl-4">
            <Select
              type={this.vizSOE.type}
              props={this.vizSOE.props}
            />
          </div>
        </div>
        <div className="balance__main-tableTitleWrapper">
          <span className="balance__main-tableTitle">
            Фінансовий стан/результат
          </span>
          <Select
            type={this.vizKPI.type}
            props={this.vizKPI.props}
          />
        </div>
        <div className="balance__main-tableWrapper">
          <QdtComponent
            className="balance__main-table table"
            type={this.vizTable.type}
            props={this.vizTable.props}
          />
        </div>
        <QdtComponent
          className="balance__main-hiddenFilter"
          type={this.vizPeriodType.type}
          props={this.vizPeriodType.props}
        />
        <QdtComponent
          className="balance__main-hiddenFilter"
          type={this.vizKPIType.type}
          props={this.vizKPIType.props}
        />
      </main>
    );
  }

}
