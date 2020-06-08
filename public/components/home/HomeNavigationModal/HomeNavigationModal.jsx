import React from 'react';
import cs from 'classnames';
import { useRouter } from 'next/router';
import { Link } from '../../../routes';
import Times from '../../../shared/icons/Times/Times';
import Button from '../../../shared/components/Button/Button';
import HomeNavLink from '../HomeNavLink/HomeNavLink';
import './HomeNavigationModal.scss';

const HomeNavigationModal = (props) => {

  const {
    onClose,
    data,
    style,
    className,
    onClickNavLink,
    controls: {
      title,
      cross,
    },
  } = props;

  const { asPath } = useRouter();

  return (
    <div
      className={cs({
        'home-nav-modal': true,
        [`home-nav-modal_${className}`]: className,
      })}
      style={style}
    >
      <div className="home-nav-modal__inner">
        {cross && title && (
          <div className="home-nav-modal__top-bar">
            {title && (
              <h2 className="home-nav-modal__title">
                {data.title}
              </h2>
            )}
            {cross && (
              <Button
                className="home-nav-modal__close"
                onClick={onClose}
              >
                <Times />
              </Button>
            )}
          </div>
        )}

        <section className="home-nav-modal__main-area">
          <section className="home-nav-modal__main-area-inner">
            {
              data
              && data.links
              && data.links
                .map(
                  (item, index) => (
                    <HomeNavLink
                      to={`${data.to}/${item.get('value')}`.replace('//', '/')}
                      className="home-nav-modal__link"
                      label={item.get('label')}
                      key={index}
                      onClick={onClose}
                    />
                  ),
                )
            }
          </section>
        </section>
      </div>

    </div>

  );

};

// <Link
//     route={`${data.to}/${item.get('value')}`.replace('//', '/')}
//     key={index}
// >
//   <a
//
//
//   >
//     {item.get('label')}
//   </a>
// </Link>


export default HomeNavigationModal;
