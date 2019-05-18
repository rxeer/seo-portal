import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import QdtComponent from '../../components/QdtComponent';

import { Settings } from './header.setting';

export default class Header extends Settings {

  render() {
    return (
      <header className="header">
        <section className="navigation">
          <h3 className="navigation__logo">
            <Link to="/test">
              <img
                className="navigation__logo-link-img"
                alt="logo"
                src="../../assets/images/logo/logo@1x.jpg"
              />
            </Link>
          </h3>
          <nav className="navigation__nav">
            <ul className="navigation__nav-list">
              <li className="navigation__nav-list-item">
                <NavLink
                  className="navigation__nav-link"
                  activeClassName="active"
                  onClick={e => e.preventDefault()}
                  to="/"
                >
                  <svg
                    className="navigation__nav-list-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7.98 2a.224.224 0 0 0-.154.065l-6.763 5.98c-.089.042-.092.13.042.13h.89c.134 0 .315-.088.404-.13l5.469-4.732a.237.237 0 0 1 .32 0l5.427 4.693c.089.042.27.13.403.13h.89c.09 0 .132-.047.043-.13L8.146 2.065A.258.258 0 0 0 7.98 2zm.055 2.08a.258.258 0 0 0-.167.065l-4.578 3.9c-.089.042-.18.213-.18.339V14h4.007v-2.496h1.78V14h4.008V8.384c0-.125-.091-.297-.18-.339l-2.269-1.95-2.351-2.002c-.005-.002-.01.001-.014 0-.022-.007-.033-.013-.056-.013z"
                    />
                  </svg>
                  <p className="navigation__nav-list-item-title">Головна</p>
                </NavLink>
              </li>

              <li className="navigation__nav-list-item dropdownDecor">
                <NavLink
                  className="navigation__nav-link"
                  activeClassName="active"
                  onClick={e => e.preventDefault()}
                  to="/test"
                >
                  <svg
                    className="navigation__nav-list-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.857 11.59v1.392a.223.223 0 0 1-.069.163.223.223 0 0 1-.163.07H2.232a.223.223 0 0 1-.163-.07.223.223 0 0 1-.069-.163V11.59c0-.063.023-.117.069-.163a.223.223 0 0 1 .163-.069h1.393c.063 0 .117.023.163.07.046.045.07.1.07.162zm0-2.786v1.392a.223.223 0 0 1-.069.164.223.223 0 0 1-.163.069H2.232a.223.223 0 0 1-.163-.07.223.223 0 0 1-.069-.163V8.804c0-.063.023-.118.069-.164a.223.223 0 0 1 .163-.069h1.393c.063 0 .117.023.163.07.046.045.07.1.07.163zm0-2.786V7.41a.223.223 0 0 1-.069.163.223.223 0 0 1-.163.069H2.232a.223.223 0 0 1-.163-.07A.223.223 0 0 1 2 7.412V6.018c0-.063.023-.117.069-.163a.223.223 0 0 1 .163-.07h1.393c.063 0 .117.024.163.07.046.046.07.1.07.163zM15 11.589v1.393a.223.223 0 0 1-.069.163.223.223 0 0 1-.163.07h-9.75a.223.223 0 0 1-.163-.07.223.223 0 0 1-.07-.163V11.59c0-.063.024-.117.07-.163a.223.223 0 0 1 .163-.069h9.75c.063 0 .117.023.163.07.046.045.069.1.069.162zM3.857 3.232v1.393a.223.223 0 0 1-.069.163.223.223 0 0 1-.163.07H2.232a.223.223 0 0 1-.163-.07A.223.223 0 0 1 2 4.625V3.232c0-.063.023-.117.069-.163A.223.223 0 0 1 2.232 3h1.393c.063 0 .117.023.163.069.046.046.07.1.07.163zM15 8.804v1.392a.223.223 0 0 1-.069.164.223.223 0 0 1-.163.069h-9.75a.223.223 0 0 1-.163-.07.223.223 0 0 1-.07-.163V8.804c0-.063.024-.118.07-.164a.223.223 0 0 1 .163-.069h9.75c.063 0 .117.023.163.07.046.045.069.1.069.163zm0-2.786V7.41a.223.223 0 0 1-.069.163.223.223 0 0 1-.163.069h-9.75a.223.223 0 0 1-.163-.07.223.223 0 0 1-.07-.162V6.018c0-.063.024-.117.07-.163a.223.223 0 0 1 .163-.07h9.75c.063 0 .117.024.163.07.046.046.069.1.069.163zm0-2.786v1.393a.223.223 0 0 1-.069.163.223.223 0 0 1-.163.07h-9.75a.223.223 0 0 1-.163-.07.223.223 0 0 1-.07-.163V3.232c0-.063.024-.117.07-.163A.223.223 0 0 1 5.018 3h9.75c.063 0 .117.023.163.069.046.046.069.1.069.163z"
                    />
                  </svg>
                  <p className="navigation__nav-list-item-title dropdownDecor">ТОП-100</p>
                </NavLink>
                <div className="navigation__dropdown-content">
                  <Link
                    className="navigation__dropdown-content-link"
                    to="/country"
                  >
                    <QdtComponent
                      className="navigation__dropdown-content-link-title"
                      type={this.vizCountryLevel.type}
                      props={this.vizCountryLevel.props}
                    />
                  </Link>
                  <Link
                    className="navigation__dropdown-content-link"
                    to="/industry"
                  >
                    <QdtComponent
                      className="navigation__dropdown-content-link-title"
                      type={this.vizIndustryLevel.type}
                      props={this.vizIndustryLevel.props}
                    />
                  </Link>
                  <Link
                    className="navigation__dropdown-content-link"
                    to="/ownership"
                  >
                    <QdtComponent
                      className="navigation__dropdown-content-link-title"
                      type={this.vizOwnershipLevel.type}
                      props={this.vizOwnershipLevel.props}
                    />
                  </Link>
                  <Link
                    className="navigation__dropdown-content-link"
                    to="/SOE"
                  >
                    <QdtComponent
                      className="navigation__dropdown-content-link-title"
                      type={this.vizSOELevel.type}
                      props={this.vizSOELevel.props}
                    />
                  </Link>
                  <Link
                    className="navigation__dropdown-content-link"
                    to="/risk"
                  >
                    <QdtComponent
                      className="navigation__dropdown-content-link-title"
                      type={this.vizRISK.type}
                      props={this.vizRISK.props}
                    />
                  </Link>
                  <Link
                    className="navigation__dropdown-content-link"
                    to="/analytics"
                  >
                    <QdtComponent
                      className="navigation__dropdown-content-link-title"
                      type={this.vizAnalytics.type}
                      props={this.vizAnalytics.props}
                    />
                  </Link>
                </div>
              </li>
              <li className="navigation__nav-list-item finance dropdownDecor">
                <NavLink
                  className="navigation__nav-link"
                  activeClassName="active"
                  onClick={e => e.preventDefault()}
                  to="/test"
                >
                  <svg
                    className="navigation__nav-list-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.643 7.571v3.715H3.786V7.57h1.857zm2.786-3.714v7.429H6.57V3.857H8.43zm7.428 8.357v.929H1V2h.929v10.214h13.928zm-4.643-6.5v5.572H9.357V5.714h1.857zM14 2.93v8.357h-1.857V2.929H14z"
                    />
                  </svg>
                  <p className="navigation__nav-list-item-title">
                    Фінансова статистика
                  </p>
                </NavLink>
                <div className="navigation__dropdown-content">
                  <Link
                    className="navigation__dropdown-content-link"
                    to="/country"
                  >
                    <QdtComponent
                      className="navigation__dropdown-content-link-title"
                      type={this.vizCountryLevel.type}
                      props={this.vizCountryLevel.props}
                    />
                  </Link>
                  <Link
                    className="navigation__dropdown-content-link"
                    to="/industry"
                  >
                    <QdtComponent
                      className="navigation__dropdown-content-link-title"
                      type={this.vizIndustryLevel.type}
                      props={this.vizIndustryLevel.props}
                    />
                  </Link>
                  <Link
                    className="navigation__dropdown-content-link"
                    to="/ownership"
                  >
                    <QdtComponent
                      className="navigation__dropdown-content-link-title"
                      type={this.vizOwnershipLevel.type}
                      props={this.vizOwnershipLevel.props}
                    />
                  </Link>
                  <Link
                    className="navigation__dropdown-content-link"
                    to="/SOE"
                  >
                    <QdtComponent
                      className="navigation__dropdown-content-link-title"
                      type={this.vizSOELevel.type}
                      props={this.vizSOELevel.props}
                    />
                  </Link>
                  <Link
                    className="navigation__dropdown-content-link"
                    to="/risk"
                  >
                    <QdtComponent
                      className="navigation__dropdown-content-link-title"
                      type={this.vizRISK.type}
                      props={this.vizRISK.props}
                    />
                  </Link>
                  <Link
                    className="navigation__dropdown-content-link"
                    to="/analytics"
                  >
                    <QdtComponent
                      className="navigation__dropdown-content-link-title"
                      type={this.vizAnalytics.type}
                      props={this.vizAnalytics.props}
                    />
                  </Link>
                </div>
              </li>
              <li className="navigation__nav-list-item dataBase dropdownDecor">
                <NavLink
                  className="navigation__nav-link"
                  activeClassName="active"
                  onClick={e => e.preventDefault()}
                  to="/test"
                >
                  <svg
                    className="navigation__nav-list-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.176 4.855c.92.192 1.909.288 2.967.288a14.51 14.51 0 0 0 2.966-.288c.92-.192 1.645-.476 2.177-.85v1.138c0 .308-.23.594-.69.857-.46.263-1.085.472-1.875.626-.79.154-1.65.231-2.578.231-.929 0-1.788-.077-2.578-.23C1.775 6.471 1.15 6.262.69 6 .23 5.737 0 5.45 0 5.143V4.004c.531.375 1.257.659 2.176.85zm0 5.143c.92.192 1.909.288 2.967.288a14.51 14.51 0 0 0 2.966-.288c.92-.192 1.645-.476 2.177-.85v1.138c0 .308-.23.593-.69.857-.46.263-1.085.472-1.875.626-.79.154-1.65.231-2.578.231-.929 0-1.788-.077-2.578-.231-.79-.154-1.415-.363-1.875-.626-.46-.264-.69-.55-.69-.857V9.147c.531.375 1.257.659 2.176.85zm0-2.572c.92.192 1.909.288 2.967.288a14.51 14.51 0 0 0 2.966-.288c.92-.192 1.645-.475 2.177-.85v1.138c0 .308-.23.594-.69.857-.46.264-1.085.473-1.875.627-.79.154-1.65.23-2.578.23-.929 0-1.788-.076-2.578-.23-.79-.154-1.415-.363-1.875-.627C.23 8.308 0 8.022 0 7.714V6.576c.531.375 1.257.658 2.176.85zM2.565.234A13.3 13.3 0 0 1 5.143 0C6.07 0 6.93.077 7.72.231c.79.154 1.415.363 1.875.626.46.264.69.55.69.857v.857c0 .308-.23.594-.69.858-.46.263-1.085.472-1.875.626-.79.154-1.65.23-2.578.23-.929 0-1.788-.076-2.578-.23C1.775 3.9 1.15 3.692.69 3.429.23 3.165 0 2.879 0 2.57v-.857c0-.308.23-.593.69-.857.46-.263 1.085-.47 1.875-.623z"
                    />
                  </svg>
                  <p className="navigation__nav-list-item-title">База даних</p>
                </NavLink>
                <div className="navigation__dropdown-content">
                  <Link
                    className="navigation__dropdown-content-link"
                    to="/balance"
                  >
                    <QdtComponent
                      className="navigation__dropdown-content-link-title"
                      type={this.vizBalance.type}
                      props={this.vizBalance.props}
                    />
                  </Link>
                  <Link
                    to="/finance"
                    className="navigation__dropdown-content-link"
                  >
                    <QdtComponent
                      className="navigation__dropdown-content-link-title"
                      type={this.vizFinance.type}
                      props={this.vizFinance.props}
                    />
                  </Link>
                </div>
              </li>
            </ul>
            <QdtComponent
              className="navigation__nav-lang"
              type={this.vizLANG.type}
              props={this.vizLANG.props}
            />
          </nav>
        </section>
        <QdtComponent
          type={this.viz1.type}
          props={this.viz1.props}
        />
      </header>
    );
  }

}
