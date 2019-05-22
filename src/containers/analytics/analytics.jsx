import React from 'react';
import { Trans } from 'react-i18next';

import { connectTranslation } from '../../middlewares/connect-translation';

import Select from '../../components/select/select';

import QdtComponent from '../../components/QdtComponent';

import { Setting } from './analytics.setting';

@connectTranslation()
class Analytics extends Setting {

  render() {
    return (
      <main className="analytics__main container">
        <div className="row">
          <div className="col-12">
            <QdtComponent
              className="analytics__main-title"
              type={this.vizAnalytics.type}
              props={this.vizAnalytics.props}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row analytics__main-upperWrapper">
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
          <div className="col-12">
            <div className="analytics__main-graphWrapper">
              <div className="analytics__main-graphTitleWrapper">
                <span className="analytics__main-graphTitle">
                  <Trans i18nKey="analytics.table-title">
                    Порівняльний графік
                  </Trans>
                </span>
                <QdtComponent
                  className="analytics__main-graphFilter dropdown"
                  type={this.vizKPI.type}
                  props={this.vizKPI.props}
                />
                <QdtComponent
                  className="analytics__main-graphFilter dropdown"
                  type={this.vizKPI2.type}
                  props={this.vizKPI2.props}
                />
                <QdtComponent
                  className="analytics__main-graphFilter dropdown"
                  type={this.vizKPI3.type}
                  props={this.vizKPI3.props}
                />
              </div>
              <QdtComponent
                className="analytics__main-graphSubtitle"
                type={this.vizRemark.type}
                props={this.vizRemark.props}
              />
              <QdtComponent
                className="analytics__main-graph"
                type={this.vizBubblePlot.type}
                props={this.vizBubblePlot.props}
              />
            </div>
          </div>
        </div>
        <div className="row analytics__main-categoryWrapper">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="analytics__main-category">
              <QdtComponent
                className="analytics__main-category-label"
                type={this.vizExpLabel.type}
                props={this.vizExpLabel.props}
              />
              <QdtComponent
                className="analytics__main-category-value"
                type={this.vizExpValue.type}
                props={this.vizExpValue.props}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="analytics__main-category">
              <QdtComponent
                className="analytics__main-category-label"
                type={this.vizMaxLabel.type}
                props={this.vizMaxLabel.props}
              />
              <QdtComponent
                className="analytics__main-category-value"
                type={this.vizMaxValue.type}
                props={this.vizMaxValue.props}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="analytics__main-category">
              <QdtComponent
                className="analytics__main-category-label"
                type={this.vizAvgLabel.type}
                props={this.vizAvgLabel.props}
              />
              <QdtComponent
                className="analytics__main-category-value"
                type={this.vizAvgValue.type}
                props={this.vizAvgValue.props}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="analytics__main-category">
              <QdtComponent
                className="analytics__main-category-label"
                type={this.vizMedianLabel.type}
                props={this.vizMedianLabel.props}
              />
              <QdtComponent
                className="analytics__main-category-value"
                type={this.vizMedianValue.type}
                props={this.vizMedianValue.props}
              />
            </div>
          </div>
        </div>
        <div className="row analytics__main-chartsWrapper">
          <div className="col-sm-12 col-12 col-lg-6">
            <div className="analytics__main-chartWrapper">
              <QdtComponent
                className="analytics__main-chartTitle"
                type={this.vizKPIPlotTitle.type}
                props={this.vizKPIPlotTitle.props}
              />
              <QdtComponent
                className="analytics__main-chart"
                type={this.vizKPIPlot.type}
                props={this.vizKPIPlot.props}
              />
            </div>
          </div>
          <div className="col-sm-12 col-12 col-lg-6">
            <div className="analytics__main-chartWrapper ">
              <QdtComponent
                className="analytics__main-chartTitle"
                type={this.vizKPI2PlotTitle.type}
                props={this.vizKPI2PlotTitle.props}
              />
              <QdtComponent
                className="analytics__main-chart"
                type={this.vizKPI2Plot.type}
                props={this.vizKPI2Plot.props}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="analytics__main-tableWrapper">
              <QdtComponent
                className="table first-column-text-align-left"
                type={this.vizTable.type}
                props={this.vizTable.props}
              />
            </div>
          </div>
        </div>

        {/* <QdtComponent */}
        {/*  type={this.vizKPIPlotSubTitle.type} */}
        {/*  props={this.vizKPIPlotSubTitle.props} */}
        {/* /> */}

        {/* <QdtComponent */}
        {/*  type={this.vizKPI2PlotSubTitle.type} */}
        {/*  props={this.vizKPI2PlotSubTitle.props} */}
        {/* /> */}

        {/* <QdtComponent */}
        {/*  type={this.vizTOPInput.type} */}
        {/*  props={this.vizTOPInput.props} */}
        {/* /> */}

        {/* <QdtComponent */}
        {/*  type={this.vizTOPLabel.type} */}
        {/*  props={this.vizTOPLabel.props} */}
        {/* /> */}

        {/* <QdtComponent */}
        {/*  type={this.vizPeriodType.type} */}
        {/*  props={this.vizPeriodType.props} */}
        {/* /> */}
      </main>
    );
  }

}

export default Analytics;
