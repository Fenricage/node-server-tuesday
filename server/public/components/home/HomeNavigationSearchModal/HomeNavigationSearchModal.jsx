import React, { Component } from 'react';
import cs from 'classnames';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import Button from '../../../shared/components/Button/Button';
import Times from '../../../shared/icons/Times/Times';
import { ItemGridProvider } from '../../../shared/contexts/index';
import ItemGrid from '../../../shared/components/ItemGrid/ItemGrid';
import HomeNavigationSearchForm from '../HomeNavigationSearchForm/HomeNavigationSearchForm';
import './HomeNavigationSearchModal.scss';


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
        data: [],
        lastSearchQuery: '',
      },
    };
  }

  setArticlesLoadingStatus = (status) => {
    this.setState(prevState => ({
      articles: {
        ...prevState.articles,
        isLoading: status,
      },
    }));
  };

  setArticlesData = (articles) => {
    this.setState(prevState => ({
      articles: {
        ...prevState.articles,
        data: articles,
      },
    }));
  };

  setLastSearchQuery = (query) => {
    this.setState(prevState => ({
      articles: {
        ...prevState.articles,
        lastSearchQuery: query,
      },
    }));
  }

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
    } = this.state;


    // TODO(@fenricage): оптимизируй, функция выполняется на каждый рендер лол LOL!!
    const transformedArticlesData = transformArticlesToItemGridData(articlesData);
    console.log('transformedArticlesData', transformedArticlesData);


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
              />
            </section>
            <section className="home-navigation-search__articles">
              {isLoading && 'loading ...'}
              <ItemGridProvider value={{
                viewComponent: 'EntryBadge',
                className: cs({
                  'home-navigation-search-modal__articles-grid': true,
                  'home-navigation-search-modal__articles-grid_is-loading': isLoading,
                }),
              }}
              >
                <ItemGrid
                  data={transformedArticlesData}
                />
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
