import React from 'react';

import Select from '../../components/select/select';

import QdtComponent from '../../components/QdtComponent';

import { Settings } from './balance.setting';

export class Balance extends Settings {

  render() {
    return (
      <main className="balance__main container">
        <div className="row">
          <div className="col-12">
            <QdtComponent
              className="page-title"
              type={this.vizBalance.type}
              props={this.vizBalance.props}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row chart-filters">
              <div className="col-3 col-sm-6 col-12 col-lg-3">
                <Select
                  label="Період"
                  type={this.vizPeriod.type}
                  props={this.vizPeriod.props}
                />
              </div>
              <div className="col-3 col-sm-6 col-12 col-lg-3">
                <Select
                  label="Галузь"
                  type={this.vizIndustry.type}
                  props={this.vizIndustry.props}
                />
              </div>
              <div className="col-3 col-sm-6 col-12 col-lg-3">
                <Select
                  label="Суб’єкт управління"
                  type={this.vizOwnership.type}
                  props={this.vizOwnership.props}
                />
              </div>
              <div className="col-3 col-sm-6 col-12 col-lg-3">
                <Select
                  label="Підприємство"
                  type={this.vizSOE.type}
                  props={this.vizSOE.props}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row balance__main-period">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Select
              type={this.vizKPI.type}
              props={this.vizKPI.props}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 adaptive-chart-container">
            <QdtComponent
              className="table"
              type={this.vizTable.type}
              props={this.vizTable.props}
            />
          </div>
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
