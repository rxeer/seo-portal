import React, { Fragment, Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes, faHome, faDatabase, faChartBar, faTimesCircle, faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

import { setLocalization } from '../middlewares/localization';

import Spinner from '../components/spinner/spinner';
import Header from '../containers/header/Header';
import Footer from '../containers/footer/footer';

const Dev = lazy(() => import('./dev'));
const SOE = lazy(() => import('../pages/seo/seo'));
const Home = lazy(() => import('../pages/home/home'));
const Risk = lazy(() => import('../pages/risk/risk'));
const Balance = lazy(() => import('../pages/balance/balance'));
const Finance = lazy(() => import('../pages/finance/finance'));
const Country = lazy(() => import('../pages/country/country'));
const Industry = lazy(() => import('../pages/industry/Industry'));
const Ownership = lazy(() => import('../pages/ownership/ownership'));
const Analytics = lazy(() => import('../pages/analytics/analytics'));
const NotFoundPage = lazy(() => import('../pages/not-found/not-found'));

library.add(faTimes, faDatabase, faHome, faChartBar, faTimesCircle, faCheckCircle);

const App = () => (
  <Suspense fallback={<Spinner show/>}>
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dev" component={Dev} />
          <Route exact path="/country" component={Country} />
          <Route exact path="/industry" component={Industry} />
          <Route exact path="/ownership" component={Ownership} />
          <Route exact path="/SOE" component={SOE} />
          <Route exact path="/risk" component={Risk} />
          <Route exact path="/balance" component={Balance} />
          <Route exact path="/finance" component={Finance} />
          <Route exact path="/analytics" component={Analytics} />
          <Route exact path="/*" component={NotFoundPage} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  </Suspense>
);

setLocalization();

export default App;
