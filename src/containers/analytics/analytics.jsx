import React from 'react';

import Select from '../../components/select/select';

import QdtComponent from '../../components/QdtComponent';

import { Setting } from './analytics.setting';

export class Analytics extends Setting {

  render() {
    return (
      <main className="analytics__main container">
        <QdtComponent
          className="analytics__main-title"
          type={this.vizAnalytics.type}
          props={this.vizAnalytics.props}
        />
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
        <div className="analytics__main-categoryWrapper">
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
        <div className="analytics__main-graphWrapper">
          <div className="analytics__main-graphTitleWrapper">
            <span className="analytics__main-graphTitle">
              Порівняльний графік
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

        <div className="analytics__main-chartsWrapper">
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
          <div className="analytics__main-chartWrapper">
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

        <div className="analytics__main-tableTitleWrapper">
          <span className="analytics__main-tableTitle">
            Фінансовий стан/результат
          </span>
          {/* <QdtComponent */}
          {/*  className="analytics__main-filter" */}
          {/*  type={this.vizKPI.type} */}
          {/*  props={this.vizKPI.props} */}
          {/* /> */}
        </div>

        <div className="analytics__main-tableWrapper">
          <QdtComponent
            className="analytics__main-table table"
            type={this.vizTable.type}
            props={this.vizTable.props}
          />
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
