import React, { Component } from 'react';
import cs from 'classnames';
import { connect } from 'react-redux';
import { fromJS, List } from 'immutable';
import {
  TransitionGroup, CSSTransition, SwitchTransition, Transition, ReplaceTransition,
} from 'react-transition-group';
import Button from '../../../shared/components/Button/Button';
import Times from '../../../shared/icons/Times/Times';
import { ItemGridProvider } from '../../../shared/contexts/index';
import ItemGrid from '../../../shared/components/ItemGrid/ItemGrid';
import HomeNavigationSearchForm from '../HomeNavigationSearchForm/HomeNavigationSearchForm';
import './HomeNavigationSearchModal.scss';

const duration = 150;

const defaultFadeStyles = {
  transition: `all ${duration}ms ease-in-out`,
  transform: 'translateY(20px)',
  opacity: 0,
  color: 'red',
};

const defaultDisplayFadeStyles = {
  display: 'none',
};

const transitionFadeStyles = {
  entering: {
    opacity: 1,
    transform: 'translateY(0px)',
    display: 'block',
  },
  entered: {
    opacity: 1,
    transform: 'translateY(0px)',
    display: 'block',
  },
  exiting: {
    opacity: 0,
    transform: 'translateY(20px)',
    //     display: 'block',
  },
  exited: {
    opacity: 0,
    transform: 'translateY(20px)',
    //     display: 'block',
  },
};

const displayFadeStyles = {
  entering: {
    display: 'block',
  },
  entered: {
    display: 'block',
  },
  exiting: {
    display: 'block',
  },
  exited: {
    display: 'none',
  },
};


const Fade = ({
  in: inProp,
  defaultFadeStyles,
  transitionFadeStyles,
  defaultDisplayFadeStyles,
  fadeCounter,
  children,
}) => {


  let defaultDisplayFadeStylesAfterMutate = {};

  // устанавливает display: none если еще ни разу не активировали fade анимацию
  if (!fadeCounter) {
    defaultDisplayFadeStylesAfterMutate = defaultDisplayFadeStyles;
  }

  return (

    <Transition in={inProp} timeout={duration}>
      {state => (
        <div style={{
          ...defaultFadeStyles,
          ...defaultDisplayFadeStylesAfterMutate,
          ...transitionFadeStyles[state],
        }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};


const transformArticlesToItemGridData = articles => articles.map(article => fromJS({
  _id: article.get('_id'),
  previewImg: article.get('preview_img') ? article.get('preview_img') : '',
  title: article.get('title'),
  category: article.getIn(['category', 'name']),
  tags: article.get('tags'),
}));

class HomeNavigationSearchModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: {
        isLoading: false,
        data: new List(),
        lastSearchQuery: '',
      },
      fadeStatus: true,
      isTransitioning: false,
      defaultFadeStyles,
      transitionFadeStyles,
      displayFadeStyles,
      fadeCounter: 0,
    };
  }


  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydownCloseModal);
    this.setStunStyles(true);
  }


  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydownCloseModal);
    this.setStunStyles(false);
  }

  handleChangeFadeStatus = (status) => {

    if (status) {
      this.setState(prevState => ({
        ...prevState,
        transitionFadeStyles: displayFadeStyles,
        fadeStatus: status,
        isTransitioning: true,
        fadeCounter: prevState.fadeCounter + 1,
      }));

      setTimeout(() => {
        this.setState(prevState => ({
          ...prevState,
          transitionFadeStyles,
          fadeStatus: status,
          fadeCounter: prevState.fadeCounter + 1,
        }));
      }, 0);

      setTimeout(() => {
        this.setState(prevState => ({
          ...prevState,
          isTransitioning: false,
        }));
      }, duration);
    } else {

      this.setState(prevState => ({
        ...prevState,
        transitionFadeStyles,
        fadeStatus: status,
        isTransitioning: true,
        fadeCounter: prevState.fadeCounter + 1,
      }));

      setTimeout(() => {


        this.setState(prevState => ({
          ...prevState,
          transitionFadeStyles: displayFadeStyles,
          fadeStatus: status,
          isTransitioning: false,
          fadeCounter: prevState.fadeCounter + 1,
        }));
      }, duration);
    }

    // this.setState(prevState => ({
    //   ...prevState,
    //   transitionFadeStyles,
    //   fadeStatus: status,
    // }));
  }


  handleKeydownCloseModal = (e) => {
    if ('Escape' === e.key) {
      this.props.onClose();
    }
  };

  setArticlesLoadingStatus = (status) => {
    this.setState(prevState => ({
      articles: {
        ...prevState.articles,
        isLoading: status,
      },
    }));
  };

  setArticlesData = (articles) => {
    this.handleChangeFadeStatus(!this.state.fadeStatus);

    setTimeout(() => {
      this.setState(prevState => ({
        articles: {
          ...prevState.articles,
          data: articles,
        },
      }));

      this.handleChangeFadeStatus(!this.state.fadeStatus);
    }, 300);

  };

  setLastSearchQuery = (query) => {
    this.setState(prevState => ({
      articles: {
        ...prevState.articles,
        lastSearchQuery: query,
      },
    }));
  };

  setStunStyles = (status) => {
    const htmlNode = document.querySelector('html');
    if (status) {
      htmlNode.style.overflow = 'hidden';
    } else {
      htmlNode.style.overflow = null;
    }

  };

  render() {

    const {
      controls: {
        title,
        cross,
      },
      onClose,
    } = this.props;

    const {
      articles: {
        isLoading,
        data: articlesData,
      },
      defaultFadeStyles,
      transitionFadeStyles,
      displayFadeStyles,
      fadeCounter,
      isTransitioning,
    } = this.state;


    // TODO(@fenricage): оптимизируй, функция выполняется на каждый рендер лол LOL!!
    const transformedArticlesData = transformArticlesToItemGridData(articlesData);


    return (
      <section className="home-navigation-search-modal">
        <div className="home-navigation-search-modal__inner">
          {cross && (
            <div className="home-navigation-search-modal__top-bar">
              {cross && (
                <Button
                  className="home-navigation-search-modal__close"
                  onClick={onClose}
                >
                  <Times />
                </Button>
              )}
            </div>
          )}
          <section className="home-navigation-search__main-area">
            <section className="home-navigation-search__main-area-inner">
              <HomeNavigationSearchForm
                setArticlesLoadingStatus={this.setArticlesLoadingStatus}
                setArticlesData={this.setArticlesData}
                setLastSearchQuery={this.setLastSearchQuery}
                isLoading={isLoading}
              />
            </section>
            <section className="home-navigation-search-modal__articles">
              {/* {isLoading && 'loading ...'} */}
              <ItemGridProvider value={{
                viewComponent: 'EntryBadge',
                className: cs({
                  'home-navigation-search-modal__articles-grid': true,
                  // 'home-navigation-search-modal__articles-grid_is-loading': isLoading || isTransitioning,
                }),
              }}
              >
                <Fade
                  in={this.state.fadeStatus}
                  defaultFadeStyles={defaultFadeStyles}
                  transitionFadeStyles={transitionFadeStyles}
                  defaultDisplayFadeStyles={defaultDisplayFadeStyles}
                  fadeCounter={fadeCounter}
                >
                  <ItemGrid
                    data={transformedArticlesData}
                  />
                </Fade>
              </ItemGridProvider>
            </section>
          </section>
        </div>
      </section>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  // isLoadedArticleCategories: state.getIn(['articleCategories', 'isLoaded']),
  // isLoadedTags: state.getIn(['tags', 'isLoaded']),
});

const mapDispatchToProps = dispatch => ({
  // getAllArticleCategoriesDispatch: () => dispatch(getAllArticleCategories()),
  // getAllTagsAndSetDispatch: () => dispatch(getAllTagsAndSet()),
});


const HomeNavigationSearchModalConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeNavigationSearchModal);

export default HomeNavigationSearchModalConnected;
