import React from 'react';

import QdtComponent from '../../components/QdtComponent';

import { Settings } from './industry.setting';

export class IndustryStatistics extends Settings {

  render() {
    return (
      <div className="industry-container">
        <div className="row">
          <div className="col-sm-9 col-7 page-title">
            <h1>
              <QdtComponent
                type={this.vizIndustryLevel.type}
                props={this.vizIndustryLevel.props}
              />
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div>
              <div className="col">
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
              <div className="col">
                <QdtComponent
                  type={this.vizPlotAssets.type}
                  props={this.vizPlotAssets.props}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div>
              <div className="col">
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
              <div className="col">
                <QdtComponent
                  type={this.vizPlotProfit.type}
                  props={this.vizPlotProfit.props}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div>
              <div className="col">
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
              <div className="col">
                <QdtComponent
                  type={this.vizPlotUnProfit.type}
                  props={this.vizPlotUnProfit.props}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="row">
              <div className="col-6">
                <QdtComponent
                  type={this.vizPeriodType.type}
                  props={this.vizPeriodType.props}
                />
              </div>
              <div className="col-6">
                <QdtComponent
                  type={this.vizPeriod.type}
                  props={this.vizPeriod.props}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="row">
              <div className="col-md-3 col-5">
                <QdtComponent
                  type={this.vizButton2.type}
                  props={this.vizButton2.props}
                />
              </div>
              <div className="col-md-9 col-7">
                <QdtComponent
                  type={this.vizA2A2.type}
                  props={this.vizA2A2.props}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-xl-8 col-lg-8">
            <div className="row">
              <div className="col-md-3 col-6">
                <QdtComponent
                  type={this.vizIndustry.type}
                  props={this.vizIndustry.props}
                />
              </div>
              <div className="col-md-9 col-12">
                <QdtComponent
                  type={this.vizIndustryLabel.type}
                  props={this.vizIndustryLabel.props}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="row">
              <div className="col-6">
                <QdtComponent
                  type={this.vizOwnership.type}
                  props={this.vizOwnership.props}
                />
              </div>
              <div className="col-6">
                <QdtComponent
                  type={this.vizSOE.type}
                  props={this.vizSOE.props}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <QdtComponent
              type={this.vizTable.type}
              props={this.vizTable.props}
            />
          </div>
        </div>
      </div>
    );
  }

}
