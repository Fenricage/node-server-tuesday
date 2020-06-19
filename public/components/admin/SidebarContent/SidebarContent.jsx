import React, { Component } from 'react';
import { RiArticleLine, RiHome2Line } from 'react-icons/ri';
import { GrList } from 'react-icons/gr';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineTags } from 'react-icons/ai';
import { IoIosAttach } from 'react-icons/io';
import SidebarLink from '../SidebarLink/SidebarLink';
import CustomNavLink from "../../home/CustomNavLink/CustomNavLink";
import Logo from '../../../shared/components/Logo/Logo';
import './SidebarContent.scss';

const sidebarLinks = [
  {
    to: '/admin',
    icon: <RiHome2Line />,
    label: 'Main',
    exact: true,
  },
  {
    to: '/admin/articles',
    icon: <RiArticleLine />,
    label: 'Articles',
    exact: false,
  },
  {
    to: '/admin/article-categories',
    icon: <GrList />,
    label: 'Article Categories',
    exact: false,
  },
  {
    to: '/admin/users',
    icon: <FiUsers />,
    label: 'Users',
    exact: false,
  },
  {
    to: '/admin/tags',
    icon: <AiOutlineTags />,
    label: 'Tags',
    exact: false,
  },
  {
    to: '/admin/attachments',
    icon: <IoIosAttach />,
    label: 'Attachments',
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
        icon={link.icon}
      />
    ));

    return (
      <section className="sidebar-content">
        <section className="sidebar-content__logo">
          <Logo />
        </section>
        <section className="sidebar-content__links">
          {links}
        </section>
      </section>
    );
  }

}

export default SidebarContent;
