import React, { Component } from 'react';
import SidebarLink from '../SidebarLink/SidebarLink';
import './SidebarContent.scss';

const sidebarLinks = [
  {
    to: '/admin',
    label: 'Main',
    exact: true,
  },
  {
    to: '/admin/articles',
    label: 'Articles',
    exact: false,
  },
  {
    to: '/admin/article-categories',
    label: 'Article Categories',
    exact: false,
  },
  {
    to: '/admin/users',
    label: 'Users',
    exact: false,
  },
  {
    to: '/admin/tags',
    label: 'Tags',
    exact: false,
  },
];

class SidebarContent extends Component {

  render() {

    const links = sidebarLinks.map((link, index) => (
      <SidebarLink
        key={index}
        to={link.to}
        label={link.label}
        exact={link.exact}
      />
    ));

    return (
      <section className="b-sidebar-content">
        <section className="b-sidebar-content__logo">
          <h2>tuesday</h2>
        </section>
        <section className="b-sidebar-content__links">
          {links}
        </section>

      </section>
    );
  }

}

export default SidebarContent;
