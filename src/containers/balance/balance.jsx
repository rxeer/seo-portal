import React from 'react';
import ReactTooltip from 'react-tooltip';
import Select from '../../components/select/select';

import { connectTranslation } from '../../middlewares/connect-translation';

import QdtComponent from '../../components/QdtComponent';

import { Settings } from './balance.setting';

@connectTranslation()
class Balance extends Settings {

  render() {
    return (
      <main className="balance__main container">
        <div className="row">
          <div className="col-12">
            <QdtComponent
              className="page-title"
              type={this.vizBalance.type}
              props={this.vizBalance.props}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row chart-filters">
              <div className="col-3 col-sm-6 col-12 col-lg-3">
                <Select
                  label={this.props.t('filters.period')}
                  type={this.vizPeriod.type}
                  props={this.vizPeriod.props}
                />
              </div>
              <div className="col-3 col-sm-6 col-12 col-lg-3">
                <Select
                  label={this.props.t('filters.industry')}
                  type={this.vizIndustry.type}
                  props={this.vizIndustry.props}
                />
              </div>
              <div className="col-3 col-sm-6 col-12 col-lg-3">
                <Select
                  label={this.props.t('filters.ownership')}
                  type={this.vizOwnership.type}
                  props={this.vizOwnership.props}
                />
              </div>
              <div className="col-3 col-sm-6 col-12 col-lg-3">
                <Select
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
        <div className="row balance__main-period">
          <div
            className="col-lg-3 col-md-6 col-sm-11 "
            style={{ paddingRight: '40px', position: 'relative' }}
          >
            <img
              className="tooltip-indicators"
              alt="info icon"
              src="../../assets/images/info/info.png"
              data-tip={this.props.t('tooltips.indicatorFinance')}
              data-place="top"
              data-type="light"
              data-multiline
            />
            <ReactTooltip />
            <Select type={this.vizKPI.type} props={this.vizKPI.props} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 adaptive-chart-container">
            <QdtComponent
              className="table first-column-text-align-left"
              type={this.vizTable.type}
              props={this.vizTable.props}
            />
          </div>
        </div>
        <QdtComponent
          className="balance__main-hiddenFilter"
          type={this.vizPeriodType.type}
          props={this.vizPeriodType.props}
        />
        <QdtComponent
          className="balance__main-hiddenFilter"
          type={this.vizKPIType.type}
          props={this.vizKPIType.props}
        />
      </main>
    );
  }

}

export default Balance;
