import React from 'react';
import { Link } from '../../../routes';
import './SidebarLink.scss';

const SidebarLink = ({
  exact, to, label, icon: IconElement,
}) => {

  const IconComponent = () => {
    return React.cloneElement(
      IconElement,
      {
        className: 'sidebar-link__icon',
      },
    );
  };

  return (
    <Link
      exact={exact}
      href={to}
      activeClassName="is-selected"
    >
      <a
        className="sidebar-link"
      >
        <IconComponent />
        <span className="sidebar-link__label">
          {label}
        </span>
      </a>
    </Link>
  );
};

export default SidebarLink;
