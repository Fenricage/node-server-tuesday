import React from 'react';
import CustomNavLink from '../../home/CustomNavLink/CustomNavLink';
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
    <CustomNavLink
      to={to}
      label={label}
      exact={exact}
      className="sidebar-link"
    >
      <IconComponent />
      <span className="sidebar-link__label">
        {label}
      </span>
    </CustomNavLink>
  );
};

export default SidebarLink;
