import React from 'react';

import Select from '../../components/select/select';

import QdtComponent from '../../components/QdtComponent';

import { Settings } from './industry.setting';

export class IndustryStatistics extends Settings {

  render() {
    return (
      <div className="industry container">
        <div className="industry-header">
          <QdtComponent
            className="country__main-upperWrapper-title page-title"
            type={this.vizIndustryLevel.type}
            props={this.vizIndustryLevel.props}
          />
          <div className="industry-action-wrapper">
            <QdtComponent
              className="country__main-upperWrapper-title-button"
              type={this.vizButton2.type}
              props={this.vizButton2.props}
            />
            <QdtComponent
              className="country__main-upperWrapper-btnTitle"
              type={this.vizA2A2.type}
              props={this.vizA2A2.props}
            />
            <QdtComponent
              className="dropdown industry-dropdown"
              type={this.vizPeriodType.type}
              props={this.vizPeriodType.props}
            />
          </div>
        </div>
        <div className="row analytics__main-upperWrapper">
          <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
            <Select
              lineable
              type={this.vizPeriod.type}
              props={this.vizPeriod.props}
            />
          </div>
          <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
            <Select
              lineable
              type={this.vizIndustry.type}
              props={this.vizIndustry.props}
            />
          </div>
          <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
            <Select
              lineable
              type={this.vizOwnership.type}
              props={this.vizOwnership.props}
            />
          </div>
          <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
            <Select
              lineable
              type={this.vizSOE.type}
              props={this.vizSOE.props}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="industry-chart">
              <div className="col industry-chart__header">
                <QdtComponent
                  type={this.vizKPIAssetsLabel.type}
                  props={this.vizKPIAssetsLabel.props}
                />
                <QdtComponent
                  type={this.vizKPIAssetsValue.type}
                  props={this.vizKPIAssetsValue.props}
                />
                <QdtComponent
                  type={this.vizLastPeriodLabel.type}
                  props={this.vizLastPeriodLabel.props}
                />
              </div>
              <div className="col industry-chart__canvas">
                <QdtComponent
                  type={this.vizPlotAssets.type}
                  props={this.vizPlotAssets.props}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="industry-chart">
              <div className="col industry-chart__header">
                <QdtComponent
                  type={this.vizKPIProfitLabel.type}
                  props={this.vizKPIProfitLabel.props}
                />
                <QdtComponent
                  type={this.vizKPIProfitValue.type}
                  props={this.vizKPIProfitValue.props}
                />
                <QdtComponent
                  type={this.vizLastPeriodLabel.type}
                  props={this.vizLastPeriodLabel.props}
                />
              </div>
              <div className="col industry-chart__canvas">
                <QdtComponent
                  type={this.vizPlotProfit.type}
                  props={this.vizPlotProfit.props}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="industry-chart">
              <div className="col industry-chart__header">
                <QdtComponent
                  type={this.vizKPIUnProfitLabel.type}
                  props={this.vizKPIUnProfitLabel.props}
                />
                <QdtComponent
                  type={this.vizKPIUnProfitValue.type}
                  props={this.vizKPIUnProfitValue.props}
                />
                <QdtComponent
                  type={this.vizLastPeriodLabel.type}
                  props={this.vizLastPeriodLabel.props}
                />
              </div>
              <div className="col industry-chart__canvas">
                <QdtComponent
                  type={this.vizPlotUnProfit.type}
                  props={this.vizPlotUnProfit.props}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <QdtComponent
              className="table"
              type={this.vizTable.type}
              props={this.vizTable.props}
            />
          </div>
        </div>
      </div>
    );
  }

}
