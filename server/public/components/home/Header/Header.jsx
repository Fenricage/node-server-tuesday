import React, { Component } from 'react';
import Link from 'next/link';
import HomeNavigation from '../HomeNavigation/HomeNavigation';
import Logo from '../../../shared/svg/Logo/Logo';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <section className="header">
        <section className="header__top-bar">
          <Link className="header__logo" to="/">
            <Logo />
          </Link>
        </section>
        <HomeNavigation />
      </section>
    );
  }
}

export default Header;
