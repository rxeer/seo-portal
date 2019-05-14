import React from 'react';
import { Settings } from './finance.setting';
import QdtComponent from '../../components/QdtComponent';

export class Finance extends Settings {

  render() {
    return (
      <main className="finance__main">
        <QdtComponent
          className="finance__main-title page-title"
          type={this.vizFinance.type}
          props={this.vizFinance.props}
        />
        <div className="finance__main-upperWrapper">
          <div>
            <QdtComponent
              className="finance__main-upperWrapper-filter"
              type={this.vizPeriod.type}
              props={this.vizPeriod.props}
            />
          </div>
          <div>
            <QdtComponent
              className="finance__main-upperWrapper-filter"
              type={this.vizIndustry.type}
              props={this.vizIndustry.props}
            />
          </div>
          <div>
            <QdtComponent
              className="finance__main-upperWrapper-filter"
              type={this.vizOwnership.type}
              props={this.vizOwnership.props}
            />
          </div>
          <div>
            <QdtComponent
              className="finance__main-upperWrapper-filter"
              type={this.vizSOE.type}
              props={this.vizSOE.props}
            />
          </div>
        </div>
        <div className="finance__main-tableTitleWrapper">
          <span className="finance__main-tableTitle">
            Фінансовий стан/результат
          </span>
          <QdtComponent
            className="finance__main-filter"
            type={this.vizKPI.type}
            props={this.vizKPI.props}
          />
        </div>

        <div className="finance__main-tableWrapper">
          <QdtComponent
            className="finance__main-table"
            type={this.vizTable.type}
            props={this.vizTable.props}
          />
        </div>

        <QdtComponent
          className="finance__main-hiddenFilter"
          type={this.vizPeriodType.type}
          props={this.vizPeriodType.props}
        />
        <QdtComponent
          className="finance__main-hiddenFilter"
          type={this.vizKPIType.type}
          props={this.vizKPIType.props}
        />
      </main>
    );
  }

}
