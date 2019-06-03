import React from 'react';
import { Trans } from 'react-i18next';
import ReactTooltip from 'react-tooltip';

import { connectTranslation } from '../../middlewares/connect-translation';

import Select from '../../components/select/select';

import QdtComponent from '../../components/QdtComponent';

import { Settings } from './seo.setting';

@connectTranslation()
class SEO extends Settings {

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
                  label={this.props.t('filters.period')}
                  type={this.vizPeriod.type}
                  props={this.vizPeriod.props}
                />
              </div>
              <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
                <Select
                  lineable
                  label={this.props.t('filters.industry')}
                  type={this.vizIndustryF.type}
                  props={this.vizIndustryF.props}
                />
              </div>
              <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
                <Select
                  lineable
                  label={this.props.t('filters.ownership')}
                  type={this.vizOwnershipF.type}
                  props={this.vizOwnershipF.props}
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
              <img
                className="tooltip-seo"
                alt="info icon"
                src="../../assets/images/info/info-white.png"
                data-tip={`<p>${this.props.t('tooltips.seo')}</p>
                            <img
                                class="tooltip-img-seo"
                                src="../../assets/images/tooltip/${this.props.t('tooltips.seoImgName')}"
                             />
                        `}
                data-place="left"
                data-type="light"
                data-multiline
                data-html
              />
              <ReactTooltip />
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
          <div className="col-lg-4 col-md-12">
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
        <div className="row">
          <div className="col-12">
            <p className="seo-title">
              <Trans i18nKey="seo.table-title">
                Назва підприємства
              </Trans>
            </p>
            <div className="seo-table">
              <div className="row">
                <div className="col-sm-5">
                  <QdtComponent
                    className="seo-block-table"
                    type={this.vizNAME.type}
                    props={this.vizNAME.props}
                  />
                </div>
                <div className="col-sm-4">
                  <QdtComponent
                    className="seo-block-table"
                    type={this.vizOwnership.type}
                    props={this.vizOwnership.props}
                  />
                </div>
                <div className="col-sm-3">
                  <QdtComponent
                    className="seo-block-table"
                    type={this.vizEDRPOU.type}
                    props={this.vizEDRPOU.props}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-5">
                  <QdtComponent
                    className="seo-block-table"
                    type={this.vizOwner.type}
                    props={this.vizOwner.props}
                  />
                </div>
                <div className="col-sm-4">
                  <QdtComponent
                    className="seo-block-table"
                    type={this.vizNACE.type}
                    props={this.vizNACE.props}
                  />
                </div>
                <div className="col-sm-3">
                  <QdtComponent
                    className="seo-block-table"
                    type={this.vizVAT.type}
                    props={this.vizVAT.props}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-5">
                  <QdtComponent
                    className="seo-block-table"
                    type={this.vizDirector.type}
                    props={this.vizDirector.props}
                  />
                </div>
                <div className="col-sm-4">
                  <QdtComponent
                    className="seo-block-table"
                    type={this.vizIndustry.type}
                    props={this.vizIndustry.props}
                  />
                </div>
                <div className="col-sm-3">
                  <QdtComponent
                    className="seo-block-table"
                    type={this.vizDate.type}
                    props={this.vizDate.props}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-5">
                  <QdtComponent
                    className="seo-block-table"
                    type={this.vizAddress.type}
                    props={this.vizAddress.props}
                  />
                </div>
                <div className="col-sm-4">
                  <QdtComponent
                    className="seo-block-table"
                    type={this.vizDebts.type}
                    props={this.vizDebts.props}
                  />
                </div>
                <div className="col-sm-3">
                  <QdtComponent
                    className="seo-block-table"
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
              className="table seo-title first-table first-column-text-align-left"
              type={this.vizRegister.type}
              props={this.vizRegister.props}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <QdtComponent
              className="table seo-title second-table first-column-text-align-left"
              type={this.vizHistory.type}
              props={this.vizHistory.props}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <QdtComponent
              className="first-column-text-align-left narrow-row hidden-value-button"
              type={this.vizTable.type}
              props={this.vizTable.props}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default SEO;
