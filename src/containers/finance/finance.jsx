import React from 'react';

import Select from '../../components/select/select';

import QdtComponent from '../../components/QdtComponent';

import { Settings } from './finance.setting';

export class Finance extends Settings {

  render() {
    return (
      <main className="finance__main container">
        <div className="row">
          <div className="col-12">
            <QdtComponent
              className="page-title"
              type={this.vizFinance.type}
              props={this.vizFinance.props}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row chart-filters">
              <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
                <Select
                  label="Період"
                  type={this.vizPeriod.type}
                  props={this.vizPeriod.props}
                />
              </div>
              <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
                <Select
                  label="Галузь"
                  type={this.vizIndustry.type}
                  props={this.vizIndustry.props}
                />
              </div>
              <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
                <Select
                  label="Суб’єкт управління"
                  type={this.vizOwnership.type}
                  props={this.vizOwnership.props}
                />
              </div>
              <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
                <Select
                  label="Підприємство"
                  type={this.vizSOE.type}
                  props={this.vizSOE.props}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row finance__main-period">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <span className="finance__main-tableTitle">
              Фінансовий стан/результат
            </span>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <QdtComponent
              className="select finance__main-filter"
              type={this.vizKPI.type}
              props={this.vizKPI.props}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <QdtComponent
              className="table"
              type={this.vizTable.type}
              props={this.vizTable.props}
            />
          </div>
        </div>
        <QdtComponent
          className="finance__main-hiddenFilter"
          type={this.vizPeriodType.type}
          props={this.vizPeriodType.props}
        />
        <QdtComponent
          className="finance__main-hiddenFilter"
          type={this.vizKPIType.type}
          props={this.vizKPIType.props}
        />
      </main>
    );
  }

}
