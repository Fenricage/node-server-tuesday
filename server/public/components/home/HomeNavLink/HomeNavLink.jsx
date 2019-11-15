import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cs from 'classnames';
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


const HomeNavLink = ({
  exact, to, label, onClick,
}) => {
  const router = useRouter();
  console.log('router', router)
  return (
    <Link
      href={to}
    >
      <a
        className={cs({
          'home-nav-link': true,
          'home-nav-link_selected': router.pathname === to,
        })}
        onClick={onClick}
      >
        {label}
      </a>
    </Link>
  );
};

export default HomeNavLink;
