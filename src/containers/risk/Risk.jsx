import React from 'react';
import QdtComponent from '../../components/QdtComponent';
import Select from '../../components/select/select';
import { Settings } from './risk.setting';

export default class Risk extends Settings {

  render() {
    return (
      <div className="risk__main">
        <h4 className="risk__main-title"><QdtComponent type={this.vizRISK.type} props={this.vizRISK.props} /></h4>
        {/* <div className="col-sm-2 col-4 p0"> */}
        {/* <QdtComponent type={this.vizLANG.type} props={this.vizLANG.props} /> */}
        {/* </div> */}
        <div className="risk__main-upperWrapper">
          {/* <div className="row justify-content-start "> */}
          <div className="risk__main-upperWrapper-item">
            <Select lineable type={this.vizYear.type} props={this.vizYear.props} />
          </div>
          <div className="risk__main-upperWrapper-itemQuart">
            <Select lineable type={this.vizQuarter.type} props={this.vizQuarter.props} />
          </div>
          <div className="risk__main-upperWrapper-itemSelect">
            <QdtComponent className="dropdown" type={this.vizPeriodType.type} props={this.vizPeriodType.props} />
          </div>
          <div className="risk__main-upperWrapper-item">
            <Select lineable type={this.vizSOE.type} props={this.vizSOE.props} />
          </div>
          <div className="risk__main-upperWrapper-item">
            <Select lineable type={this.vizOwnership.type} props={this.vizOwnership.props} />
          </div>
          <div className="risk__main-upperWrapper-item">
            <Select lineable type={this.vizIndustry.type} props={this.vizIndustry.props} />
          </div>
          {/* </div> */}
          {/* <div className="row align-items-center"> */}
          <div className="risk__main-upperWrapper-itemSelect">
            <QdtComponent className="dropdown" type={this.vizKPI.type} props={this.vizKPI.props} />
          </div>
          <div className="risk__main-upperWrapper-itemAvg">
            <div className="risk__main-upperWrapper-itemAvg-item">
              <QdtComponent className="risk__main-upperWrapper-itemAvg-item-absolute" type={this.vizAvgLabel.type} props={this.vizAvgLabel.props} />
              <QdtComponent type={this.vizAvg.type} props={this.vizAvg.props} />
            </div>
            <div className="risk__main-upperWrapper-itemAvg-itemCopy">
              <QdtComponent className="risk__main-upperWrapper-itemAvg-itemCopy-text" type={this.vizCopyLabel.type} props={this.vizCopyLabel.props} />
              <QdtComponent className="risk__main-upperWrapper-itemAvg-itemCopy-button" type={this.vizCopy.type} props={this.vizCopy.props} />
            </div>
          </div>
          <div className="risk__main-upperWrapper-item marginBottom">
            <QdtComponent
              className="risk__main-upperWrapper-item-absolute"
              type={this.vizTHoldLabel.type}
              props={this.vizTHoldLabel.props}
            />
            <QdtComponent className="risk__main-upperWrapper-item-input" type={this.vizTHold.type} props={this.vizTHold.props} />
          </div>
          <div className="risk__main-upperWrapper-itemLast">
            <div className="risk__main-upperWrapper-itemLast-item">
              {/* <div className="row"> */}
              {/* <div className="col-12 p0"> */}
              <QdtComponent
                className="risk__main-upperWrapper-itemLast-item-title"
                type={this.vizTHDirectLabel.type}
                props={this.vizTHDirectLabel.props}
              />
              {/* </div> */}
              {/* </div> */}
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
            <div className="risk__main-upperWrapper-itemLast-item">
              {/* <div className="row"> */}
              {/* <div className="col-12 p0"> */}
              <QdtComponent
                className="risk__main-upperWrapper-itemLast-item-title"
                type={this.vizTrendLabel.type}
                props={this.vizTrendLabel.props}
              />
              {/* </div> */}
              {/* </div> */}
              <div className="risk__main-upperWrapper-itemLast-item">
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
              </div>
            </div>
          </div>
          <div className="risk__main-upperWrapper-itemLast2">
            <div className="risk__main-upperWrapper-itemLast2-itemPlus">
              <QdtComponent
                type={this.vizKPIAdd.type}
                props={this.vizKPIAdd.props}
              />
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="row justify-content-start">
          <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-4">
            <QdtComponent
              className="risk__main-firstTable table"
              type={this.vizKPISelected.type}
              props={this.vizKPISelected.props}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <QdtComponent className="table" type={this.vizTable.type} props={this.vizTable.props} />
          </div>
        </div>
      </div>
    );
  }

}
