import React, { Component } from 'react';
import cs from 'classnames';
import { Link } from '../../../routes';
import Times from '../../../shared/icons/Times/Times';
import Button from '../../../shared/components/Button/Button';
import './HomeNavigationModal.scss';

class HomeNavigationModal extends Component {


  componentDidMount() {

  }


  render() {
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
    } = this.props;

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
                data &&
                data.links &&
                data.links
                  .map(
                    (item, index) => (
                      <Link
                        className="home-nav-modal__link"
                        route={`${data.to}/${item}`}
                        onClick={onClose}
                        key={index}
                      >
                        <a className="home-nav-modal__link">
                          {item}
                        </a>
                      </Link>
                    ),
                  )
              }
            </section>
          </section>
        </div>

      </div>
    );
  }

}

export default HomeNavigationModal;
