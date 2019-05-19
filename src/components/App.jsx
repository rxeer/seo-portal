import React, { Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes, faHome, faDatabase, faChartBar,
} from '@fortawesome/free-solid-svg-icons';

import Header from '../containers/header/Header';
import Footer from '../containers/footer/footer';

import SOE from '../pages/seo/seo';
import Home from '../pages/home/home';
import Risk from '../pages/risk/risk';
import Balance from '../pages/balance/balance';
import Finance from '../pages/finance/finance';
import Country from '../pages/country/country';
import Industry from '../pages/industry/Industry';
import Ownership from '../pages/ownership/ownership';
import Analytics from '../pages/analytics/analytics';

library.add(faTimes, faDatabase, faHome, faChartBar);

const App = () => (
  <div>
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/country" component={Country} />
          <Route exact path="/industry" component={Industry} />
          <Route exact path="/ownership" component={Ownership} />
          <Route exact path="/SOE" component={SOE} />
          <Route exact path="/risk" component={Risk} />
          <Route exact path="/Balance" component={Balance} />
          <Route exact path="/Finance" component={Finance} />
          <Route exact path="/Analytics" component={Analytics} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  </div>
);

export default App;
