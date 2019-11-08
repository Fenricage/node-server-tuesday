import React from 'react';
// import { NavLink } from 'react-router-dom';
import Link from 'next/link'
import './HomeNavLink.scss';

// const HomeNavLink = ({ exact, to, label, onClick }) => (
//   <NavLink
//     className="home-nav-link"
//     exact={exact}
//     to={to}
//     activeClassName="home-nav-link_selected"
//     onClick={onClick}
//   >
//     {label}
//   </NavLink>
// );


const HomeNavLink = ({ exact, to, label, onClick }) => (
  <Link
    className="home-nav-link"
    href={to}
    activeClassName="home-nav-link_selected"
    onClick={onClick}
  >
    <a className="home-nav-link">
      {label}
    </a>
  </Link>
);

export default HomeNavLink;
