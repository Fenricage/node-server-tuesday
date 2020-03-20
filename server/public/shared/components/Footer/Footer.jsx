import React from 'react';
import Link from 'next/link';
import Logo from '../../svg/Logo/Logo';
import Star from '../../svg/Star/Star';
import HomeNavLink from '../../../components/home/HomeNavLink/HomeNavLink';
import './Footer.scss';

const footerNavItems = [
  {
    to: '/',
    type: 'link',
    label: 'Главная',
    exact: true,
  },
  {
    to: '/huinya',
    type: 'link',
    label: 'Хуйня',
    exact: false,
  },
  {
    to: '/extra',
    type: 'link',
    label: 'Еще',
    angle: true,
  },
  {
    to: '/blog',
    type: 'link',
    label: 'Блог',
    exact: false,
  },
];


const Footer = () => {
  const navigationItems = footerNavItems
    .map((navItem, index) => {
      return (
        <HomeNavLink
          key={index}
          to={navItem.to}
          className="footer__nav-item"
          exact={navItem.exact}
        >
          <Star
            className="footer__nav-item"
            fill="hsla(0, 0%, 30%, 1)"
          />
          {navItem.label}
        </HomeNavLink>
      );
    });

  return (
    <footer className="footer">
      <div className="footer__content">
        <section className="footer__links">
          {navigationItems}
        </section>
        <Logo className="footer__logo" />
      </div>
    </footer>
  );
};

export default Footer;
