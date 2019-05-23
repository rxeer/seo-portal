import React from 'react';

import { connectTranslation } from '../../middlewares/connect-translation';

import Select from '../../components/select/select';

import QdtComponent from '../../components/QdtComponent';

import { Settings } from './ownership.setting';

@connectTranslation()
class Ownership extends Settings {

  render() {
    return (
      <div className="ownership container">
        <div className="row">
          <div className="col-12">
            <QdtComponent
              className="page-title"
              type={this.vizOwnershipLevel.type}
              props={this.vizOwnershipLevel.props}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row chart-filters">
              <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
                <Select
                  lineable
                  label={this.props.t('filters.period')}
                  type={this.vizPeriod.type}
                  props={this.vizPeriod.props}
                />
              </div>
              <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
                <Select
                  lineable
                  label={this.props.t('filters.industry')}
                  type={this.vizIndustry.type}
                  props={this.vizIndustry.props}
                />
              </div>
              <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
                <Select
                  lineable
                  label={this.props.t('filters.ownership')}
                  type={this.vizOwnership.type}
                  props={this.vizOwnership.props}
                />
              </div>
              <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
                <Select
                  lineable
                  label={this.props.t('filters.seo')}
                  type={this.vizSOE.type}
                  props={this.vizSOE.props}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="chart chart-period">
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
              <QdtComponent
                className="chart__period"
                type={this.vizPeriodLabel.type}
                props={this.vizPeriodLabel.props}
              />
              <div className="chart__canvas">
                <QdtComponent
                  type={this.vizPlotAssets.type}
                  props={this.vizPlotAssets.props}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="chart chart-period">
              <div className="chart__header chart__header--green">
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
              <QdtComponent
                className="chart__period"
                type={this.vizPeriodLabel.type}
                props={this.vizPeriodLabel.props}
              />
              <div className="chart__canvas">
                <QdtComponent
                  type={this.vizPlotProfit.type}
                  props={this.vizPlotProfit.props}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="chart chart-period">
              <div className="chart__header chart__header--red">
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
              <QdtComponent
                className="chart__period"
                type={this.vizPeriodLabel.type}
                props={this.vizPeriodLabel.props}
              />
              <div className="chart__canvas">
                <QdtComponent
                  type={this.vizPlotUnProfit.type}
                  props={this.vizPlotUnProfit.props}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row country__main-upperWrapper-text">
            <div className="col-lg-12 col-md-12" style={{ padding: 0 }}>
              <div className="country__main-upperWrapper-text ownership-filter">
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

export default Ownership;
