import { Component } from 'react';

import './risk.scss';

export class Settings extends Component {

    // SHEET Name
    vizRISK = {
      type: 'QdtViz',
      props: {
        id: 'XUHkNsJ', height: '2.5rem',
      },
    };

    // LANG
     vizLANG = {
       type: 'QdtViz',
       props: {
         id: 'zcZBDTa', height: '30px',
       },
     };

     // Filters UP
     vizYear = {
       type: 'QdtViz',
       props: {
         // id: 'wAVZxEP',
         id: 'ktxVjN',
         height: '30px',
       },
     };

     vizQuarter = {
       type: 'QdtViz',
       props: {
         id: 'eRTPkXy', height: '30px',
       },
     };

     vizPeriodType = {
       type: 'QdtViz',
       props: {
         id: 'uskbfz', height: '30px',
       },
     };

     /* const vizPeriod = {
      type: 'QdtViz',
      props: {
        id: 'dEYeJV', height: '30px',
      },
    }; */
     vizSOE = {
       type: 'QdtViz',
       props: {
         id: 'rpGyYnp', height: '30px',
       },
     };

     vizOwnership = {
       type: 'QdtViz',
       props: {
         id: 'duvuuJ', height: '30px',
       },
     };

     vizIndustry = {
       type: 'QdtViz',
       props: {
         id: 'QpPAW', height: '30px',
       },
     };

     // KPI param
     vizKPI = {
       type: 'QdtViz',
       props: {
         id: 'HrdGJt', height: '30px',
       },
     };

     vizAvgLabel = {
       type: 'QdtViz',
       props: {
         id: 'UjBqvfy', height: '30px',
       },
     };

     vizAvg = {
       type: 'QdtViz',
       props: {
         id: 'kHjFf', height: '30px',
       },
     };

     vizCopyLabel = {
       type: 'QdtViz',
       props: {
         id: 'EHqx', height: '30px',
       },
     };

     vizCopy = {
       type: 'QdtViz',
       props: {
         // id: 'WWfPU',
         //id: 'jGFLpVj',
         id: 'jkFseW',
         height: '30px',
       },
     };

     vizTHoldLabel = {
       type: 'QdtViz',
       props: {
         id: 'wAxgFQ', height: '30px',
       },
     };

     vizTHold = {
       type: 'QdtViz',
       props: {
         id: 'tCphvJ', height: '30px',
       },
     };

     vizTHDirectLabel = {
       type: 'QdtViz',
       props: {
         id: 'LJJpL', height: '30px',
       },
     };

     vizTHDirectDown = {
       type: 'QdtViz',
       props: {
         id: 'upfEMm', height: '30px',
       },
     };

     vizTHDirectUp = {
       type: 'QdtViz',
       props: {
         id: 'mmVDxTp', height: '30px',
       },
     };

     vizTrendLabel = {
       type: 'QdtViz',
       props: {
         id: 'hskrLQ', height: '30px',
       },
     };

     vizTrendDown = {
       type: 'QdtViz',
       props: {
         id: 'aPFQkJ', height: '30px',
       },
     };

    vizTrendUp = {
      type: 'QdtViz',
      props: {
        id: 'TvSreRD', height: '30px',
      },
    };

    vizKPIAdd = {
      type: 'QdtViz',
      props: {
        id: 'ZDcLA', height: '30px',
      },
    };

    // Table
    vizKPISelected = {
      type: 'QdtViz',
      props: {
        id: 'pYaXAEj',
        height: '135px',
      },
    };

    vizTable = {
      type: 'QdtViz',
      props: {
        id: 'TQGeTkP',
        height: '500px',
        exportData: true,
        exportDataOptions: { format: 'OOXML', state: 'P' },
        exportDataTitle: 'Excel',
      },
    };

}
