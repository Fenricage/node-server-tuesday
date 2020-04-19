import React from 'react';
import { useRouter } from 'next/router';
// TODO мб стоиь импортнуть Link из ../routes next-route
import Link from 'next/link';
import cs from 'classnames';
import './HomeNavLink.scss';

const HomeNavLink = ({
  exact, to, label, onClick, className, children,
}) => {
  const router = useRouter();

  return (
    <Link
      href={to}
    >
      <a
        className={cs({
          'home-nav-link': true,
          'home-nav-link_selected': router.pathname === to,
          [`${className}`]: className,
          [`${className}_selected`]: className && router.pathname === to,
        })}
        onClick={onClick}
      >
        {children || label}
      </a>
    </Link>
  );
};

export default HomeNavLink;