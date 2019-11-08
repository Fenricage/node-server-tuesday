import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeNavigationSearchModal.scss';
import Button from '../../../shared/components/Button/Button';
import Times from '../../../shared/icons/Times/Times';
import { getAllArticleCategories } from '../../../actions/articleCategories';
import { getAllTagsAndSet } from '../../../actions/tags';
import HomeNavigationSearchForm from '../HomeNavigationSearchForm/HomeNavigationSearchForm';

class HomeNavigationSearchModal extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    const {
      controls: {
        title,
        cross,
      },
      onClose,
    } = this.props;
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
              <HomeNavigationSearchForm />
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
