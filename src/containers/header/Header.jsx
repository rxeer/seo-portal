import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import i18n from 'i18next';
import { Trans } from 'react-i18next';
import Collapse, { Panel } from 'rc-collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connectTranslation } from '../../middlewares/connect-translation';

import QdtComponent from '../../components/QdtComponent';

import { setLocalization } from '../../middlewares/localization';

import { Settings } from './header.setting';

@connectTranslation()
class Header extends Settings {

  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isMobile: false,
      currentLocale: 'ua',
      enLanguageButton: null,
      uaLanguageButton: null,
      isBannerFixed: false,
    };
  }

  componentDidMount() {
    this.checkBrowserView();
    this.startLanguagesButtonInterval();
    window.addEventListener('scroll', this.handleBanner);
  }

  startLanguagesButtonInterval() {
    const twoSecondsInterval = 1000;
    this.languageInterval = setInterval(() => {
      const { uaLanguageButton, enLanguageButton } = this.state;
      if (!uaLanguageButton || !enLanguageButton) {
        this.getLanguagesButton();
      } else {
        uaLanguageButton.addEventListener('click', () => this.changeLocalization('ua'));
        enLanguageButton.addEventListener('click', () => this.changeLocalization('en'));
        clearInterval(this.languageInterval);
      }
    }, twoSecondsInterval);
  }

  getLanguagesButton() {
    const uaLanguageButton = window.document.querySelector('button.lui-button[data-text="Ua"]');
    const enLanguageButton = window.document.querySelector('button.lui-button[data-text="En"]');
    this.setState({
      uaLanguageButton,
      enLanguageButton,
    });
  }

  checkBrowserView() {
    if (window.matchMedia('(max-width: 700px)').matches) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  }

  closeMenu() {
    this.setState({ isMenuOpen: false });
  }

  changeLocalization(localization) {
    i18n.changeLanguage(localization);
    setLocalization(localization);
    this.setState({ currentLocale: localization }, () => this.forceUpdate());
  }

  handleBanner = () => {
    const { isMobile } = this.state;
    const mobileBannerHeight = 60;
    const bannerHeight = 80;
    if (
      (!isMobile && window.scrollY >= bannerHeight)
      || (isMobile && window.scrollY >= mobileBannerHeight)
    ) {
      this.setState({
        isBannerFixed: true,
      });
    } else {
      this.setState({
        isBannerFixed: false,
      });
    }
  };

  render() {
    const { isBannerFixed, currentLocale } = this.state;
    return (
      <header className="header">
        <section className="navigation">
          <div className="container navigation">
            <h1 className="navigation__logo">
              <Link to="/">
                <img
                  className="navigation__logo-link-img"
                  alt="logo"
                  src={
                    currentLocale === 'ua'
                      ? '../../assets/images/logo/logo@1x.jpg'
                      : '../../assets/images/logo/logo-eng.svg'
                  }
                />
              </Link>
            </h1>
            {
              this.state.isMobile
                ? (
                  <nav className={`navigation__nav ${this.state.isMenuOpen ? 'active' : ''}`}>
                    <div className="navigation__nav-title">
                      <span>Menu</span>
                      <FontAwesomeIcon icon="times" onClick={() => this.closeMenu()} />
                    </div>
                    <ul className="navigation__nav-list">
                      <Collapse accordion>
                        <li className="navigation__nav-list-item">
                          <NavLink
                            className="navigation__nav-link"
                            activeClassName="active"
                            onClick={() => this.closeMenu()}
                            to="/"
                          >
                            <FontAwesomeIcon icon="home" />
                            <p className="navigation__nav-list-item-title">
                              <Trans i18nKey="menu.home">
                                Головна
                              </Trans>
                            </p>
                          </NavLink>
                        </li>
                        <Panel header={(
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
                            <p className="navigation__nav-list-item-title dropdownDecor">
                              <Trans i18nKey="menu.rating">
                                ТОП-100
                              </Trans>
                            </p>
                          </NavLink>
                        )}
                        >
                          <a
                            className="navigation__dropdown-content-link"
                            href="http://www.me.gov.ua/Documents/Download?id=67d9576a-6d20-4288-b3aa-754f5b087929"
                          >
                          <span className="navigation__dropdown-content-link-title top100Text">
                            6m 2018
                          </span>
                          </a>
                          <a
                            className="navigation__dropdown-content-link"
                            href="http://www.me.gov.ua/Documents/Download?id=0a6ff86b-5bce-4fa5-b06a-511d2a29d0d0"
                          >
                          <span className="navigation__dropdown-content-link-title top100Text">
                            2017
                          </span>
                          </a>
                          <a
                            className="navigation__dropdown-content-link"
                            href="http://www.me.gov.ua/Documents/Download?id=8be2f0ec-1015-4722-b9ed-26f46e974d50"
                          >
                          <span className="navigation__dropdown-content-link-title top100Text">
                            6m 2017
                          </span>
                          </a>
                          <a
                            className="navigation__dropdown-content-link"
                            href="http://www.me.gov.ua/Documents/Download?id=64486187-93ac-4493-b88b-8e62a4542a2e"
                          >
                          <span className="navigation__dropdown-content-link-title top100Text">
                            2016
                          </span>
                          </a>
                          <a
                            className="navigation__dropdown-content-link"
                            href="http://www.me.gov.ua/Documents/Download?id=51b6e766-320c-43ce-b791-cc1d656d0d06"
                          >
                          <span className="navigation__dropdown-content-link-title top100Text">
                            6m 2016
                          </span>
                          </a>
                          <a
                            className="navigation__dropdown-content-link"
                            href="http://www.me.gov.ua/Documents/Download?id=5e146da4-05a5-46fe-87f7-54c30a064bd8"
                          >
                          <span className="navigation__dropdown-content-link-title top100Text">
                            2015
                          </span>
                          </a>
                          <a
                            className="navigation__dropdown-content-link"
                            href="http://www.me.gov.ua/Documents/Detail?lang=uk-UA&id=4d3ccfda-18b5-4dc2-8f74-51b84d976eb0&title=Top100-NaibilshikhDerzhavnikhPidprimstvUkrainiZa6-Misiatsiv2015-roku"
                          >
                          <span className="navigation__dropdown-content-link-title top100Text">
                            6m 2015
                          </span>
                          </a>
                          <a
                            className="navigation__dropdown-content-link"
                            href="http://www.me.gov.ua/Documents/Download?id=1bb3da5e-0a65-4e6d-95d7-889a687603cd"
                          >
                          <span className="navigation__dropdown-content-link-title top100Text">
                            2014
                          </span>
                          </a>
                        </Panel>
                        <Panel header={
                          (
                            <NavLink
                              className="navigation__nav-link"
                              activeClassName="active"
                              onClick={e => e.preventDefault()}
                              to="/test"
                            >
                              <FontAwesomeIcon icon="chart-bar" />
                              <p className="navigation__nav-list-item-title">
                                <Trans i18nKey="menu.finance-statistics">
                                  Фінансова статистика
                                </Trans>
                              </p>
                            </NavLink>
                          )}
                        >
                          <Link
                            onClick={e => this.closeMenu(e)}
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
                            onClick={e => this.closeMenu(e)}
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
                            onClick={e => this.closeMenu(e)}
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
                            onClick={e => this.closeMenu(e)}
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
                            onClick={e => this.closeMenu(e)}
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
                            onClick={e => this.closeMenu(e)}
                            className="navigation__dropdown-content-link"
                            to="/analytics"
                          >
                            <QdtComponent
                              className="navigation__dropdown-content-link-title"
                              type={this.vizAnalytics.type}
                              props={this.vizAnalytics.props}
                            />
                          </Link>
                        </Panel>
                        <Panel header={(
                          <NavLink
                            className="navigation__nav-link"
                            activeClassName="active"
                            onClick={e => e.preventDefault()}
                            to="/test"
                          >
                            <FontAwesomeIcon icon="database" />
                            <p className="navigation__nav-list-item-title">
                              <Trans i18nKey="menu.database">
                                База даних
                              </Trans>
                            </p>
                          </NavLink>
                        )}
                        >
                          <Link
                            onClick={e => this.closeMenu(e)}
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
                            onClick={e => this.closeMenu(e)}
                            to="/finance"
                            className="navigation__dropdown-content-link"
                          >
                            <QdtComponent
                              className="navigation__dropdown-content-link-title"
                              type={this.vizFinance.type}
                              props={this.vizFinance.props}
                            />
                          </Link>
                        </Panel>
                      </Collapse>
                    </ul>
                  </nav>
                )
                : (
                  <nav className="navigation__nav desktop">
                    <ul className="navigation__nav-list">
                      <li className="navigation__nav-list-item">
                        <NavLink
                          className="navigation__nav-link"
                          activeClassName="active"
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
                          <p className="navigation__nav-list-item-title">
                            <Trans i18nKey="menu.home">
                              Головна
                            </Trans>
                          </p>
                        </NavLink>
                      </li>

                      <li className="navigation__nav-list-item top dropdownDecor">
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
                        <p className="navigation__nav-list-item-title dropdownDecor">
                          <Trans i18nKey="menu.rating">
                            ТОП-100
                          </Trans>
                        </p>
                        <div className="navigation__dropdown-content">
                          <a
                            className="navigation__dropdown-content-link"
                            href="http://www.me.gov.ua/Documents/Download?id=67d9576a-6d20-4288-b3aa-754f5b087929"
                          >
                          <span className="navigation__dropdown-content-link-title top100Text">
                            6m 2018
                          </span>
                          </a>
                          <a
                            className="navigation__dropdown-content-link"
                            href="http://www.me.gov.ua/Documents/Download?id=0a6ff86b-5bce-4fa5-b06a-511d2a29d0d0"
                          >
                          <span className="navigation__dropdown-content-link-title top100Text">
                            2017
                          </span>
                          </a>
                          <a
                            className="navigation__dropdown-content-link"
                            href="http://www.me.gov.ua/Documents/Download?id=8be2f0ec-1015-4722-b9ed-26f46e974d50"
                          >
                          <span className="navigation__dropdown-content-link-title top100Text">
                            6m 2017
                          </span>
                          </a>
                          <a
                            className="navigation__dropdown-content-link"
                            href="http://www.me.gov.ua/Documents/Download?id=64486187-93ac-4493-b88b-8e62a4542a2e"
                          >
                          <span className="navigation__dropdown-content-link-title top100Text">
                            2016
                          </span>
                          </a>
                          <a
                            className="navigation__dropdown-content-link"
                            href="http://www.me.gov.ua/Documents/Download?id=51b6e766-320c-43ce-b791-cc1d656d0d06"
                          >
                          <span className="navigation__dropdown-content-link-title top100Text">
                            6m 2016
                          </span>
                          </a>
                          <a
                            className="navigation__dropdown-content-link"
                            href="http://www.me.gov.ua/Documents/Download?id=5e146da4-05a5-46fe-87f7-54c30a064bd8"
                          >
                          <span className="navigation__dropdown-content-link-title top100Text">
                            2015
                          </span>
                          </a>
                          <a
                            className="navigation__dropdown-content-link"
                            href="http://www.me.gov.ua/Documents/Detail?lang=uk-UA&id=4d3ccfda-18b5-4dc2-8f74-51b84d976eb0&title=Top100-NaibilshikhDerzhavnikhPidprimstvUkrainiZa6-Misiatsiv2015-roku"
                          >
                          <span className="navigation__dropdown-content-link-title top100Text">
                            6m 2015
                          </span>
                          </a>
                          <a
                            className="navigation__dropdown-content-link"
                            href="http://www.me.gov.ua/Documents/Download?id=1bb3da5e-0a65-4e6d-95d7-889a687603cd"
                          >
                          <span className="navigation__dropdown-content-link-title top100Text">
                            2014
                          </span>
                          </a>
                        </div>
                      </li>

                      <li className="navigation__nav-list-item finance dropdownDecor">
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
                          <Trans i18nKey="menu.finance-statistics">
                            Фінансова статистика
                          </Trans>
                        </p>
                        <div className="navigation__dropdown-content">
                          <a className="navigation__dropdown-content-link" href="#/country">
                            <QdtComponent
                              className="navigation__dropdown-content-link-title"
                              type={this.vizCountryLevel.type}
                              props={this.vizCountryLevel.props}
                            />
                          </a>
                          <a
                            className="navigation__dropdown-content-link"
                            href="#/industry"
                          >
                            <QdtComponent
                              className="navigation__dropdown-content-link-title"
                              type={this.vizIndustryLevel.type}
                              props={this.vizIndustryLevel.props}
                            />
                          </a>
                          <a
                            className="navigation__dropdown-content-link"
                            href="#/ownership"
                          >
                            <QdtComponent
                              className="navigation__dropdown-content-link-title"
                              type={this.vizOwnershipLevel.type}
                              props={this.vizOwnershipLevel.props}
                            />
                          </a>
                          <a className="navigation__dropdown-content-link" href="#/SOE">
                            <QdtComponent
                              className="navigation__dropdown-content-link-title"
                              type={this.vizSOELevel.type}
                              props={this.vizSOELevel.props}
                            />
                          </a>
                          <a className="navigation__dropdown-content-link" href="#/risk">
                            <QdtComponent
                              className="navigation__dropdown-content-link-title"
                              type={this.vizRISK.type}
                              props={this.vizRISK.props}
                            />
                          </a>
                          <a
                            className="navigation__dropdown-content-link"
                            href="#/analytics"
                          >
                            <QdtComponent
                              className="navigation__dropdown-content-link-title"
                              type={this.vizAnalytics.type}
                              props={this.vizAnalytics.props}
                            />
                          </a>
                        </div>
                      </li>

                      <li className="navigation__nav-list-item dataBase dropdownDecor">
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
                        <p className="navigation__nav-list-item-title">
                          <Trans i18nKey="menu.database">
                            База даних
                          </Trans>
                        </p>
                        <div className="navigation__dropdown-content">
                          <a className="navigation__dropdown-content-link" href="#/balance">
                            <QdtComponent
                              className="navigation__dropdown-content-link-title"
                              type={this.vizBalance.type}
                              props={this.vizBalance.props}
                            />
                          </a>
                          <NavLink
                            to="/finance"
                            activeClassName="active"
                            className="navigation__dropdown-content-link"
                          >
                            <QdtComponent
                              className="navigation__dropdown-content-link-title"
                              type={this.vizFinance.type}
                              props={this.vizFinance.props}
                            />
                          </NavLink>
                        </div>
                      </li>
                    </ul>
                  </nav>
                )
            }
            <QdtComponent
              className="navigation__nav-lang"
              type={this.vizLANG.type}
              props={this.vizLANG.props}
            />
            <div
              onClick={() => this.setState(prevState => ({
                isMenuOpen: !prevState.isMenuOpen,
              }))
              }
              className="burger"
            >
              <i />
              <i />
              <i />
            </div>
          </div>
        </section>
        <QdtComponent
          className={`header-banner ${isBannerFixed ? 'fixed-banner' : null}`}
          type={this.viz1.type}
          props={this.viz1.props}
        />
      </header>
    );
  }

}

export default Header;
