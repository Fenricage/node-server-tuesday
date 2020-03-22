import React from 'react';
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
    label: 'Абаут ас',
    exact: false,
  },
  {
    to: '/extra',
    type: 'link',
    label: 'Контакты',
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
            fill="hsla(0, 0%, 30%, .6)"
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
