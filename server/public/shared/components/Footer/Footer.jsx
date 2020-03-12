import React from 'react';
import Link from 'next/link';
import Logo from '../../svg/Logo/Logo';
import './Footer.scss';
import { fromJS } from 'immutable';

const homeNavItems = [
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
    type: 'button',
    label: 'Еще',
    angle: true,
    subMenu: {
      title: 'Еще',
      to: '/',
      links: fromJS([
        {
          label: 'Абаут ас',
          value: 'about',
        },
        {
          label: 'Контакты',
          value: 'contacts',
        },
      ]),
    },
  },
  {
    to: '/blog',
    type: 'link',
    label: 'Блог',
    exact: false,
  },
];


const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__links" />
      <Logo className="footer__logo" />
    </div>
  </footer>
);

export default Footer;
