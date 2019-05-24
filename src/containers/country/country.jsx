import React from 'react';

import { connectTranslation } from '../../middlewares/connect-translation';

import Select from '../../components/select/select';

import QdtComponent from '../../components/QdtComponent';

import { Settings } from './country.settings';

@connectTranslation()
class Country extends Settings {

  render() {
    return (
      <main className="country__main container">
        <div className="row country__main-upperWrapper">
          <div className="col-lg-6 col-md-12">
            <QdtComponent
              className="page-title"
              type={this.vizCountryLevel.type}
              props={this.vizCountryLevel.props}
            />
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="row country__main-upperWrapper">
              <div className="col-lg-8 col-md-12">
                <div className="country__main-upperWrapper-text">
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
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <Select
                  lineable
                  className="country__main-upperWrapper-filter"
                  type={this.vizPeriod.type}
                  props={this.vizPeriod.props}
                />
              </div>
            </div>
            {/* <QdtComponent */}
            {/*  className="country__main-upperWrapper-filter" */}
            {/*  type={vizPeriodType.type} */}
            {/*  props={vizPeriodType.props} */}
            {/* /> */}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="chart">
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
          </div>
        </div>
        <div className="row finance__main-period">
          <div className="col-lg-4 col-md-12">
            <span className="country__main-tableTitle" style={{ visibility: 'hidden' }}>
              Фінансовий стан/результат
            </span>
          </div>
          {/* <div className="col-lg-3 col-md-12">
            <QdtComponent
              className="select country__main-filter"
              type={this.vizKPI.type}
              props={this.vizKPI.props}
            />
          </div>  */}
        </div>
        <div className="row">
          <div className="col-12">
            <QdtComponent
              className="table narrow-row"
              type={this.vizTable.type}
              props={this.vizTable.props}
            />
          </div>
        </div>
      </main>
    );
  }

}

export default Country;
