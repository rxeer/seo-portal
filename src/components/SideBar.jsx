import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import QdtComponent from './QdtComponent';

// Text
const vizMain = {
  type: 'QdtViz',
  props: {
    id: 'MaBJSm', height: '30px',
  },
};

const vizCountryLevel = {
  type: 'QdtViz',
  props: {
    id: 'HwLEbpk', height: '30px',
  },
};

const vizIndustryLevel = {
  type: 'QdtViz',
  props: {
    id: 'qBJGfd', height: '30px',
  },
};

const vizOwnershipLevel = {
  type: 'QdtViz',
  props: {
    id: 'Gvbcm', height: '30px',
  },
};

const vizSOELevel = {
  type: 'QdtViz',
  props: {
    id: 'jsCarky', height: '30px',
  },
};

const vizRISK = {
  type: 'QdtViz',
  props: {
    id: 'XUHkNsJ', height: '30px',
  },
};

const vizBalance = {
  type: 'QdtViz',
  props: {
    id: 'dJZnyF', height: '30px',
  },
};

const vizFinance = {
  type: 'QdtViz',
  props: {
    id: 'HfnUJjg', height: '30px',
  },
};

const vizAnalytics = {
  type: 'QdtViz',
  props: {
    id: 'ZrhDvkG', height: '30px',
  },
};

export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }


  render() {
    return (
      <div>
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <a onClick={() => this.closeMenu()} className="menu-item" href="#/">
            <div className="menu-icon"><FontAwesomeIcon icon="home" /></div>
            <div className="menu-text"><QdtComponent type={vizMain.type} props={vizMain.props} /></div>
          </a>
          <a onClick={() => this.closeMenu()} className="menu-item" href="#/country">
            <div className="menu-icon"><FontAwesomeIcon icon="globe-europe" /></div>
            <div className="menu-text"><QdtComponent type={vizCountryLevel.type} props={vizCountryLevel.props} /></div>
          </a>
          <a onClick={() => this.closeMenu()} className="menu-item" href="#/industry">
            <div className="menu-icon"><FontAwesomeIcon icon="industry" /></div>
            <div className="menu-text"><QdtComponent type={vizIndustryLevel.type} props={vizIndustryLevel.props} /></div>
          </a>
          <a onClick={() => this.closeMenu()} className="menu-item" href="#/ownership">
            <div className="menu-icon"><FontAwesomeIcon icon="chart-bar" /></div>
            <div className="menu-text"><QdtComponent type={vizOwnershipLevel.type} props={vizOwnershipLevel.props} /></div>
          </a>
          <a onClick={() => this.closeMenu()} className="menu-item" href="#/SOE">
            <div className="menu-icon"><FontAwesomeIcon icon="id-card" /></div>
            <div className="menu-text"><QdtComponent type={vizSOELevel.type} props={vizSOELevel.props} /></div>
          </a>
          <a onClick={() => this.closeMenu()} className="menu-item" href="#/risk">
            <div className="menu-icon"><FontAwesomeIcon icon="desktop" /></div>
            <div className="menu-text"><QdtComponent type={vizRISK.type} props={vizRISK.props} /></div>
          </a>
          <a onClick={() => this.closeMenu()} className="menu-item" href="#/balance">
            <div className="menu-icon"><FontAwesomeIcon icon="file-excel" /></div>
            <div className="menu-text"><QdtComponent type={vizBalance.type} props={vizBalance.props} /></div>
          </a>
          <a onClick={() => this.closeMenu()} className="menu-item" href="#/finance">
            <div className="menu-icon"><FontAwesomeIcon icon="file-download" /></div>
            <div className="menu-text"><QdtComponent type={vizFinance.type} props={vizFinance.props} /></div>
          </a>
          <a onClick={() => this.closeMenu()} className="menu-item" href="#/analytics">
            <div className="menu-icon"><FontAwesomeIcon icon="file-medical-alt" /></div>
            <div className="menu-text"><QdtComponent type={vizAnalytics.type} props={vizAnalytics.props} /></div>
          </a>
        </Menu>
      </div>
    );
  }

}
