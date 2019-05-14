import React from 'react';
import { Settings } from './balance.setting';
import QdtComponent from '../../components/QdtComponent';

export class Balance extends Settings {

  render() {
    return (
      <main className="balance__main">
        <QdtComponent
          className="balance__main-title page-title"
          type={this.vizBalance.type}
          props={this.vizBalance.props}
        />
        <div className="balance__main-upperWrapper">
          <div>
            <QdtComponent
              className="balance__main-upperWrapper-filter"
              type={this.vizPeriod.type}
              props={this.vizPeriod.props}
            />
          </div>
          <div>
            <QdtComponent
              className="balance__main-upperWrapper-filter"
              type={this.vizIndustry.type}
              props={this.vizIndustry.props}
            />
          </div>
          <div>
            <QdtComponent
              className="balance__main-upperWrapper-filter"
              type={this.vizOwnership.type}
              props={this.vizOwnership.props}
            />
          </div>
          <div>
            <QdtComponent
              className="balance__main-upperWrapper-filter"
              type={this.vizSOE.type}
              props={this.vizSOE.props}
            />
          </div>
        </div>
        <div className="balance__main-tableTitleWrapper">
          <span className="balance__main-tableTitle">
            Фінансовий стан/результат
          </span>
          <QdtComponent
            className="balance__main-filter"
            type={this.vizKPI.type}
            props={this.vizKPI.props}
          />
        </div>
        <div className="balance__main-tableWrapper">
          <QdtComponent
            className="balance__main-table"
            type={this.vizTable.type}
            props={this.vizTable.props}
          />
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
