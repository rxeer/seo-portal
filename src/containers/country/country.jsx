import React from 'react';
import { Settings } from './country.settings';

import QdtComponent from '../../components/QdtComponent';

export default class Country extends Settings {

  render() {
    return (
      <main className="country__main">
        <div className="country__main-upperWrapper">
          <QdtComponent
            className="country__main-upperWrapper-title page-title"
            type={this.vizCountryLevel.type}
            props={this.vizCountryLevel.props}
          />
          <div className="country__main-upperWrapper-filterWrap">
            <QdtComponent
              className="country__main-upperWrapper-title-button"
              type={this.vizButton.type}
              props={this.vizButton.props}
            />
            <QdtComponent
              className="country__main-upperWrapper-btnTitle"
              type={this.vizA2A.type}
              props={this.vizA2A.props}
            />
            {/* <QdtComponent */}
            {/*  className="country__main-upperWrapper-filter" */}
            {/*  type={vizPeriodType.type} */}
            {/*  props={vizPeriodType.props} */}
            {/* /> */}
            <QdtComponent
              className="country__main-upperWrapper-filter"
              type={this.vizPeriod.type}
              props={this.vizPeriod.props}
            />
          </div>
        </div>
        <div className="country__main-chartWrapper">
          <QdtComponent
            className="country__main-chartTitle"
            type={this.vizNetProfitLabel.type}
            props={this.vizNetProfitLabel.props}
          />
          <QdtComponent
            className="country__main-chart"
            type={this.vizNetProfit.type}
            props={this.vizNetProfit.props}
          />
        </div>
        <div className="country__main-tableWrapper">
          <QdtComponent
            className="country__main-table"
            type={this.vizTable.type}
            props={this.vizTable.props}
          />
        </div>
      </main>
    );
  }

}
