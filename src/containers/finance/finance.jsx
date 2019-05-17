import React from 'react';

import Select from '../../components/select/select';

import QdtComponent from '../../components/QdtComponent';

import { Settings } from './finance.setting';

export class Finance extends Settings {

  render() {
    return (
      <main className="finance__main container">
        <QdtComponent
          className="finance__main-title page-title"
          type={this.vizFinance.type}
          props={this.vizFinance.props}
        />
        <div className="row finance__main-upperWrapper">
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
        <div className="finance__main-tableTitleWrapper">
          <span className="finance__main-tableTitle">
            Фінансовий стан/результат
          </span>
          <QdtComponent
            className="select finance__main-filter"
            type={this.vizKPI.type}
            props={this.vizKPI.props}
          />
        </div>

        <div className="finance__main-tableWrapper">
          <QdtComponent
            className="finance__main-table table"
            type={this.vizTable.type}
            props={this.vizTable.props}
          />
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
