import React, { Component } from 'react';
import ArticleCategoryAdminForm from '../ArticleCategoryAdminForm/ArticleCategoryAdminForm';
import './ArticleCategoryCreateAdminPage.scss';
import PropTypes from 'prop-types';
import { initArticle, reqArticleAndSet } from '../../../actions/article';
import { getAllArticleCategories } from '../../../actions/articleCategories';
import { reqArticleCategoryAndSet } from '../../../actions/articleCategory';
import { connect } from 'react-redux';

class ArticleCategoryCreateAdminPage extends Component {


  componentDidMount() {
    this.onUpdateArticleCategory();
  }


  onUpdateArticleCategory = () => {
    const {
      match,
      query,
      reqArticleCategoryAndSetDispatch,
      // reqArticleAndSetDispatch,
      // initArticleDispatch,
    } = this.props;
    // if (match.params.id) {
    //   const id = match.params.id;
    //   reqArticleCategoryAndSetDispatch(id);
    // } else {
    //   // initArticleDispatch();
    // }

    if (query.id) {
      reqArticleCategoryAndSetDispatch(query.id);
    } else {
      // initArticleDispatch();
    }


  };

  render() {
    const { isLoadedArticleCategory, match, query } = this.props;

    if (!isLoadedArticleCategory) {
      return <p>Loading ...</p>;
    }

    return (
      <section>
        <h1>Create/Edit Article Category</h1>
        <ArticleCategoryAdminForm
          query={query}
          match={match}
        />
      </section>
    );
  }

}

ArticleCategoryCreateAdminPage.propTypes = {
  match: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({
  isLoadedArticleCategory: state.getIn(['articleCategory', 'isLoaded']),
  // articleCategories: state.articleCategories.data,
  // isLoadedArticleCategories: state.articleCategories.isLoaded,
});

const mapDispatchToProps = dispatch => ({
  // reqArticleAndSetDispatch: id => dispatch(reqArticleAndSet(id)),
  // initArticleDispatch: () => dispatch(initArticle()),
  // getAllArticleCategoriesDispatch: () => dispatch(getAllArticleCategories()),
  reqArticleCategoryAndSetDispatch: id => dispatch(reqArticleCategoryAndSet(id)),
});

export default
connect(mapStateToProps, mapDispatchToProps)(ArticleCategoryCreateAdminPage);
