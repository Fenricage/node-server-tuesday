import React from 'react';
import { useRouter } from 'next/router';
import cs from 'classnames';
import { Link } from '../../../routes';
import './CustomNavLink.scss';

const CustomNavLink = ({
  exact,
  to,
  label,
  onClick,
  className,
  children,
}) => {

  const router = useRouter();

  let isActive;

  // strict equal to with asPath
  if (exact) {
    isActive = router.asPath === to;
  } else {
    // soft equal for non-exact
    const softLinkRegExp = new RegExp(`^${to}`);
    isActive = router.asPath.match(softLinkRegExp);
  }

  return (
    <Link
      route={to}
      // href={to}
    >
      <a
        className={cs({
          'custom-nav-link': true,
          'custom-nav-link_selected': isActive,
          [`${className}`]: className,
          [`${className}_selected`]: className && isActive,
        })}
        onClick={onClick}
      >
        {children || label}
      </a>
    </Link>
  );
};

export default CustomNavLink;
