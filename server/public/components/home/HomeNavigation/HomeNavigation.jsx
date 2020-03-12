import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { fromJS } from 'immutable';
import Button from '../../../shared/components/Button/Button';
import Angle from '../../../shared/icons/Angle/Angle';
import Portal from '../../../shared/components/Portal/Portal';
import HomeNavigationModal from '../HomeNavigationModal/HomeNavigationModal';
import HomeNavigationSearchModal from '../HomeNavigationSearchModal/HomeNavigationSearchModal';
import HomeNavLink from '../HomeNavLink/HomeNavLink';

import './HomeNavigation.scss';


class HomeNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPortalOpen: false,
      portal: {
        // то что упадет в модалку
        data: [],
        // стили модалки
        style: {},
        // поставлен ли уже листенер, нужно чтобы не поставить более одного
        isMouseOverListenerAdded: false,
        // на что навели при открытии?
        hoveredNode: null,
        //  класс передаваемый содержимому портала
        className: '',
        //  управление контролами модалки
        controls: {
          title: true,
          cross: true,
        },
        // здесь указан тип портала, по нему
        // определяется окно которое попадет в портал
        type: '',
      },
    };

    this.component = createRef();
    this.modal = createRef();
  }

  handleClickSearchButton = (e) => {
    this.setState((prevState, props) => ({
      isPortalOpen: true,
      portal: {
        ...prevState.portal,
        controls: {
          title: true,
          cross: true,
        },
        type: 'search',
      },
    }));
  };

  handleClickNavButton = data => (e) => {
    const { clientWidth } = document.documentElement;
    // отрабатываем только при мобилках и планшетах

    if (clientWidth < 1024) {
      this.setState({
        isPortalOpen: true,
        portal: {
          ...this.state.portal,
          data,
          controls: {
            title: true,
            cross: true,
          },
          type: '',
        },
      });
    }
  };

  handleMouseOverNavButton = data => (e) => {
    const { portal: { isMouseOverListenerAdded } } = this.state;
    const { clientWidth } = document.documentElement;
    // отрабатываем только при десктопном вью порте
    if (clientWidth >= 1024) {
      const hoveredNodeCoords = e.currentTarget.getBoundingClientRect();

      if (!isMouseOverListenerAdded) {
        this.setState((prevState, props) => ({
          portal: {
            ...prevState.portal,
            isMouseOverListenerAdded: true,
          },
        }));

        document.addEventListener('mouseover', this.handleDetectOutsideMouseOver);
      }

      // сохраняем отдельно иначе persist будет ругаться и затрет
      // warning: это не код смеллс
      const hoveredNode = e.currentTarget;
      // вешаем модификатор как на ссылках при селекте
      // TODO: в метод или хелпер
      hoveredNode.classList.add('home-nav-link_selected');

      this.setState((prevState, props) => ({
        isPortalOpen: true,
        portal: {
          ...prevState.portal,
          data,
          style: {
            ...prevState.portal.style,
            // eslint-disable-next-line no-restricted-globals
            top: hoveredNodeCoords.bottom + pageYOffset,
          },
          className: 'is-desktop',
          hoveredNode,
          controls: {
            title: false,
            cross: false,
          },
          type: '',
        },
      }));
    }
  };

  handleDetectOutsideMouseOver = (e) => {
    const { target } = e;
    const { portal: { hoveredNode } } = this.state;

    // ждем рефы
    if (this.modal.current && hoveredNode) {
      // внутри наведенной изначально ноды?
      const isHoveredNode = hoveredNode.contains(target);
      // внутри ноды с порталом?
      const isPortalNode = this.modal.current.contains(target);
      // внутри любой из вышеобозначенных нод?
      const isOutside = !(isHoveredNode || isPortalNode);
      if (isOutside) {
        // убираем модификатор с наведенного баттона при оутсайд маусовере
        // TODO: в метод
        if (this.state.portal.hoveredNode) {
          this.state.portal.hoveredNode.classList.remove('home-nav-link_selected');
        }
        this.setState({
          isPortalOpen: false,
          portal: {
            ...this.state.portal,
            style: {},
            isMouseOverListenerAdded: false,
            hoveredNode: null,
            className: '',
          },
        });
        document.removeEventListener('mouseover', this.handleDetectOutsideMouseOver);
      }
    }
  };

  handleClickCloseModal = () => {
    this.setState({
      isPortalOpen: false,
      portal: {
        ...this.state.portal,
        isMouseOverListenerAdded: false,
        style: {
          ...this.state.portal.style,
          // eslint-disable-next-line no-restricted-globals
          top: 0,
        },
        className: '',
      },
    });

    // TODO: в метод
    if (this.state.portal.hoveredNode) {
      this.state.portal.hoveredNode.classList.remove('home-nav-link_selected');
    }

    document.removeEventListener('mouseover', this.handleDetectOutsideMouseOver);
  }

  render() {
    const { isPortalOpen, portal } = this.state;
    const { articleCategories } = this.props;


    const transformedToMenuFormatArticleCategories = articleCategories
      .map(articleCategory => fromJS({
        label: articleCategory.get('name'),
        value: articleCategory.get('name'),
      }));

    const homeNavItems = [
      {
        to: '/',
        type: 'link',
        label: 'Главная',
        exact: true,
      },
      {
        to: '/articles',
        type: 'link',
        label: 'Статьи',
        exact: false,
      },
      {
        to: '/best',
        type: 'link',
        label: 'Лучшее',
        exact: false,
      },
      {
        to: '/categories',
        type: 'button',
        label: 'Категории',
        angle: true,
        subMenu: {
          title: 'Категории',
          to: '/categories',
          links: transformedToMenuFormatArticleCategories,
        },
      },
      {
        to: '/useful',
        type: 'link',
        label: 'Полезное',
        exact: false,
      },
      {
        to: '/huinya',
        type: 'link',
        label: 'Хуйня',
        exact: false,
      },
      {
        to: '/extra',
        type: 'button',
        label: 'Еще',
        angle: true,
        subMenu: {
          title: 'Еще',
          to: '/',
          links: fromJS([
            {
              label: 'Абаут ас',
              value: 'about',
            },
            {
              label: 'Контакты',
              value: 'contacts',
            },
          ]),
        },
      },
      {
        to: '/blog',
        type: 'link',
        label: 'Блог',
        exact: false,
      },
      {
        to: '/search',
        type: 'button',
        label: 'Поиск',
        angle: false,
        // TODO придумать способ сброса стандартных хендлеров
        handlers: {
          onClick: this.handleClickSearchButton,
          onMouseOver: () => false,
        },
        subMenu: {
          title: 'Поиск',
          to: '/',
          links: [ 'Абаут ас', 'Контакты' ],
        },
      },
    ];

    // формируем навигационные элементы
    const navItems = homeNavItems.map((item, index) => {
      switch (item.type) {
        case 'link':
          return (
            <HomeNavLink
              key={index}
              to={item.to}
              label={item.label}
              exact={item.exact}
            />
          );
        case 'button':
          // проверка на наличие кастомных хэндлеров и установка флага
          let customHandlers = null;
          if (item.handlers && Object.keys(item.handlers).length) {
            customHandlers = item.handlers;
          }
          // в onClick забираем данные в замыкание
          // чтобы воспользоваться ими позже
          // формируем объект стандартных хендлеров отдельно на случай
          // перезаписи их кастомными варимантами
          let handlers = {
            onClick: this.handleClickNavButton(item.subMenu),
            onMouseOver: this.handleMouseOverNavButton(item.subMenu),
          };

          if (customHandlers) {
            handlers = {
              ...handlers,
              ...customHandlers,
            };
          }

          return (
            <Button
              key={index}
              className="home-nav-link"
              {...handlers}
            >
              {item.label}
              {item.angle
                && (
                  <Angle className="home-nav-link__angle" />
                )
              }
            </Button>
          );
        default:
          break;
      }
    });

    let portalNode = null;
    // формируем портал
    if (isPortalOpen) {
      switch (portal.type) {
        case 'search':
          portalNode = (
            <Portal forRef={this.modal}>
              <section>
                <HomeNavigationSearchModal
                  controls={portal.controls}
                  onClose={this.handleClickCloseModal}
                />
              </section>
            </Portal>
          );
          break;
        default:
          portalNode = (
            <Portal forRef={this.modal}>
              <section>
                <HomeNavigationModal
                  data={portal.data}
                  style={portal.style}
                  controls={portal.controls}
                  className={portal.className}
                  onClose={this.handleClickCloseModal}
                />
              </section>
            </Portal>
          );
          break;
      }
    }

    return (
      <section className="home-navigation" ref={this.component}>
        <section className="home-navigation__links">
          {navItems}
        </section>
        {portalNode}
      </section>
    );
  }
}


const mapStateToProps = state => ({
  articleCategories: state.getIn([ 'articleCategories', 'data' ]),
});

const mapDispatchToProps = dispatch => ({});


const HomeNavigationConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeNavigation);

// тут нужен withRouter чтобы был перерендер на изменение location,
// иначе ссылки не видят изиенения
// и не перерендеривают активный класс
export default HomeNavigationConnected;
