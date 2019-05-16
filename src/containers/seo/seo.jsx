import React from 'react';

import QdtComponent from '../../components/QdtComponent';

import { Settings } from './seo.setting';

export class SEO extends Settings {

  render() {
    return (
      <div className="container">
        <div className="row justify-content-end pt20">
          <div className="col-sm-9 col-7 cntr">
            <h1>
              <QdtComponent
                type={this.vizSOELevel.type}
                props={this.vizSOELevel.props}
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
        </div>
        <div className="row justify-content-start">
          <div className="col-xl-8 col-lg-8">
            <div className="row">
              <div className="col-md-3 col-6">
                <QdtComponent
                  type={this.vizSOE.type}
                  props={this.vizSOE.props}
                />
              </div>
              <div className="col-md-9 col-12">
                <QdtComponent
                  type={this.vizSOELabel.type}
                  props={this.vizSOELabel.props}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-6">
                <QdtComponent
                  type={this.vizIndustryF.type}
                  props={this.vizIndustryF.props}
                />
              </div>
              <div className="col-6">
                <QdtComponent
                  type={this.vizOwnershipF.type}
                  props={this.vizOwnershipF.props}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-xl-6 col-lg-12">
            <div className="row">
              <div className="col-sm-5">
                <QdtComponent
                  type={this.vizNAME.type}
                  props={this.vizNAME.props}
                />
              </div>
              <div className="col-sm-4">
                <QdtComponent
                  type={this.vizOwnership.type}
                  props={this.vizOwnership.props}
                />
              </div>
              <div className="col-sm-3">
                <QdtComponent
                  type={this.vizEDRPOU.type}
                  props={this.vizEDRPOU.props}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5">
                <QdtComponent
                  type={this.vizOwner.type}
                  props={this.vizOwner.props}
                />
              </div>
              <div className="col-sm-4">
                <QdtComponent
                  type={this.vizNACE.type}
                  props={this.vizNACE.props}
                />
              </div>
              <div className="col-sm-3">
                <QdtComponent
                  type={this.vizVAT.type}
                  props={this.vizVAT.props}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5">
                <QdtComponent
                  type={this.vizDirector.type}
                  props={this.vizDirector.props}
                />
              </div>
              <div className="col-sm-4">
                <QdtComponent
                  type={this.vizIndustry.type}
                  props={this.vizIndustry.props}
                />
              </div>
              <div className="col-sm-3">
                <QdtComponent
                  type={this.vizDate.type}
                  props={this.vizDate.props}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5">
                <QdtComponent
                  type={this.vizAddress.type}
                  props={this.vizAddress.props}
                />
              </div>
              <div className="col-sm-4">
                <QdtComponent
                  type={this.vizDebts.type}
                  props={this.vizDebts.props}
                />
              </div>
              <div className="col-sm-3">
                <QdtComponent
                  type={this.vizStatus.type}
                  props={this.vizStatus.props}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="row">
              <div className="col-12">
                <QdtComponent
                  type={this.vizRegister.type}
                  props={this.vizRegister.props}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <QdtComponent
                  type={this.vizHistory.type}
                  props={this.vizHistory.props}
                />
              </div>
            </div>
          </div>
        </div>
        <QdtComponent
          className="table"
          type={this.vizTable.type}
          props={this.vizTable.props}
        />
      </div>
    );
  }

}
