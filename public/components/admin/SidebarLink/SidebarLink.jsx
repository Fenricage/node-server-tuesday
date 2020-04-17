import React from 'react';
// import { NavLink } from 'react-router-dom';
import Link from 'next/link';
import './SidebarLink.scss';

const SidebarLink = ({ exact, to, label }) => (
  <Link
    exact={exact}
    href={to}
    activeClassName="is-selected"
  >
    <a
      className="b-sidebar-link"
    >
      {label}
    </a>
  </Link>
);

export default SidebarLink;
