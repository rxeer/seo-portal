import React from 'react';

import Select from '../../components/select/select';

import QdtComponent from '../../components/QdtComponent';

import { Settings } from './seo.setting';

export class SEO extends Settings {

  render() {
    return (
      <div className="seo container">
        <div className="row">
          <div className="col-12">
            <QdtComponent
              className="page-title"
              type={this.vizSOELevel.type}
              props={this.vizSOELevel.props}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row chart-filters">
              <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
                <Select
                  lineable
                  label="Період"
                  type={this.vizPeriod.type}
                  props={this.vizPeriod.props}
                />
              </div>
              <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
                <Select
                  lineable
                  label="Галузь"
                  type={this.vizIndustryF.type}
                  props={this.vizIndustryF.props}
                />
              </div>
              <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
                <Select
                  lineable
                  label="Суб’єкт управління"
                  type={this.vizOwnershipF.type}
                  props={this.vizOwnershipF.props}
                />
              </div>
              <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
                <Select
                  lineable
                  label="Підприємство"
                  type={this.vizSOE.type}
                  props={this.vizSOE.props}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="chart">
              <div className="chart__header">
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
              <div className="chart__canvas">
                <QdtComponent
                  type={this.vizPlotAssets.type}
                  props={this.vizPlotAssets.props}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="chart">
              <div className="chart__header">
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
              <div className="chart__canvas">
                <QdtComponent
                  type={this.vizPlotProfit.type}
                  props={this.vizPlotProfit.props}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="chart">
              <div className="chart__header">
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
              <div className="chart__canvas">
                <QdtComponent
                  type={this.vizPlotUnProfit.type}
                  props={this.vizPlotUnProfit.props}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="seo-table">
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
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <QdtComponent
              className="table seo-title"
              type={this.vizRegister.type}
              props={this.vizRegister.props}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <QdtComponent
              className="table seo-title"
              type={this.vizHistory.type}
              props={this.vizHistory.props}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="seo-title" style={{ paddingBottom: 0 }}>
              Фінансовий стан/результат
            </p>
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
