import React, { Component } from 'react';
import HomeNavigation from '../HomeNavigation/HomeNavigation';
import Logo from '../../../shared/components/Logo/Logo';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <section className="header">
        <section className="header__top-bar">
          <Logo />
        </section>
        <HomeNavigation />
      </section>
    );
  }
}

export default Header;
