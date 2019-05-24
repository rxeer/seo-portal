import React from 'react';
import { Trans } from 'react-i18next';

import { connectTranslation } from '../../middlewares/connect-translation';

import Select from '../../components/select/select';

import QdtComponent from '../../components/QdtComponent';

import { Settings } from './risk.setting';

@connectTranslation()
class Risk extends Settings {

  render() {
    return (
      <div className="risk__main container">
        <div className="row">
          <div className="col-12">
            <QdtComponent
              className="page-title"
              type={this.vizRISK.type}
              props={this.vizRISK.props}
            />
          </div>
        </div>
        <div className="row chart-filters">
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
                <Select
                  lineable
                  label={this.props.t('filters.period')}
                  type={this.vizYear.type}
                  props={this.vizYear.props}
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
            <div className="row" style={{ marginTop: '2rem' }}>
              <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3">
                <QdtComponent
                  className="dropdown"
                  type={this.vizKPI.type}
                  props={this.vizKPI.props}
                />
              </div>
              <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3 risk__main-upperWrapper-itemAvg">
                <div className="risk__main-upperWrapper-itemAvg-item">
                  <QdtComponent
                    className="risk__main-upperWrapper-itemAvg-item-absolute risk__main-label"
                    type={this.vizAvgLabel.type}
                    props={this.vizAvgLabel.props}
                  />
                  <QdtComponent
                    className="risk__main-number"
                    type={this.vizAvg.type}
                    props={this.vizAvg.props}
                  />
                </div>
                <div className="risk__main-upperWrapper-itemAvg-itemCopy">
                  {/* <QdtComponent */}
                  {/*  className="risk__main-upperWrapper-itemAvg-itemCopy-text" */}
                  {/*  type={this.vizCopyLabel.type} */}
                  {/*  props={this.vizCopyLabel.props} */}
                  {/* /> */}
                  <QdtComponent
                    className="risk__main-upperWrapper-itemAvg-itemCopy-button"
                    type={this.vizCopy.type}
                    props={this.vizCopy.props}
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6 col-12 col-lg-2 col-xl-2 responsive">
                <QdtComponent
                  className="risk__main-upperWrapper-item-absolute risk__main-label"
                  type={this.vizTHoldLabel.type}
                  props={this.vizTHoldLabel.props}
                />
                <QdtComponent
                  className="risk__main-input"
                  type={this.vizTHold.type}
                  props={this.vizTHold.props}
                />
              </div>
              <div className="col-12 col-sm-6 col-12 col-lg-3 col-xl-3 responsive">
                <div className="risk__main-upperWrapper-itemLast-item keys">
                  <div className="key-item">
                    <div className="risk__main-upperWrapper-itemLast-item">
                      <QdtComponent
                        className="risk__main-upperWrapper-itemLast-item-title"
                        type={this.vizTHDirectLabel.type}
                        props={this.vizTHDirectLabel.props}
                      />
                      <QdtComponent
                        className="risk__main-upperWrapper-itemLast-item-up"
                        type={this.vizTHDirectUp.type}
                        props={this.vizTHDirectUp.props}
                      />
                      <QdtComponent
                        className="risk__main-upperWrapper-itemLast-item-down"
                        type={this.vizTHDirectDown.type}
                        props={this.vizTHDirectDown.props}
                      />
                    </div>
                  </div>
                  <div className="key-item">
                    <QdtComponent
                      className="risk__main-upperWrapper-itemLast-item-up"
                      type={this.vizTrendUp.type}
                      props={this.vizTrendUp.props}
                    />
                    <QdtComponent
                      className="risk__main-upperWrapper-itemLast-item-down"
                      type={this.vizTrendDown.type}
                      props={this.vizTrendDown.props}
                    />
                    {/* <div className="risk__main-upperWrapper-itemLast-item"> */}
                    {/*  <QdtComponent */}
                    {/*    className="risk__main-upperWrapper-itemLast-item-title" */}
                    {/*    type={this.vizTrendLabel.type} */}
                    {/*    props={this.vizTrendLabel.props} */}
                    {/*  /> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-12 col-lg-1 col-xl-1 responsive">
                <div className="risk__main-upperWrapper-itemLast2">
                  <div className="risk__main-upperWrapper-itemLast2-itemPlus">
                    <QdtComponent
                      type={this.vizKPIAdd.type}
                      props={this.vizKPIAdd.props}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="risk__main-title">
              <Trans i18nKey="risk.table-title">Обрані показники</Trans>
            </p>
            <QdtComponent
              className="table first-column-text-align-left compress-table risk__main-KpiTable"
              type={this.vizKPISelected.type}
              props={this.vizKPISelected.props}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/*<p className="risk__main-title table-title">*/}
            {/*  <Trans i18nKey="risk.indicator-title">Ризик-індикатори</Trans>*/}
            {/*</p>*/}
            <QdtComponent
              className="table first-column-text-align-left risk__main-vizTable"
              type={this.vizTable.type}
              props={this.vizTable.props}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default Risk;
