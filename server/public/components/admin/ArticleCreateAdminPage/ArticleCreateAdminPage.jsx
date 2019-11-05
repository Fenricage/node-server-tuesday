import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reqArticleAndSet, initArticle } from '../../../actions/article';
// import { ArticlesAdminForm } from 'Components';
import { getAllArticleCategories } from '../../../actions/articleCategories';
import { getAllTagsAndSet } from '../../../actions/tags';
import './ArticleCreateAdminPage.scss';

class ArticleCreateAdminPage extends Component {

  componentDidMount() {
    const { onUpdateArticle } = this;
    const { getAllArticleCategoriesDispatch, getAllTagsAndSetDispatch } = this.props;
    getAllArticleCategoriesDispatch();
    onUpdateArticle();
    getAllTagsAndSetDispatch();
  }

  componentDidUpdate(prevProps, prevState) {
    const { match } = this.props;
    const { match: prevMatch } = prevProps;
    const { onUpdateArticle } = this;
    if (match !== prevMatch) {
      onUpdateArticle();
    }
  }

  onUpdateArticle = () => {
    const {
      match,
      reqArticleAndSetDispatch,
      initArticleDispatch,
    } = this.props;

    // if (match.params.id) {
    //   const id = match.params.id;
    //   reqArticleAndSetDispatch(id);
    // } else {
    //   initArticleDispatch();
    // }

    initArticleDispatch();
  };

  toOptionsArticleCategoryTransformer = articleCategories => articleCategories
    .map(articleCategory => (
      {
        value: articleCategory.get('_id'),
        label: articleCategory.get('name'),
      }
    ));

  render() {

    const {
      // match: {
      //   params: {
      //     id,
      //   },
      // },
      match,
      isLoadedArticles,
      isLoadedArticleCategories,
      articleCategories,
      isLoadedTags,
      tags,
    } = this.props;

    // if (!isLoadedArticles && id) {
    //   return <p>Loading ...</p>;
    // }


    if (!isLoadedArticleCategories) {
      return <p>Loading ...</p>;
    }

    if (!isLoadedTags) {
      return <p>Loading ...</p>;
    }

    return (
      <section>
        <h1>Create Article</h1>
        {/*<ArticlesAdminForm*/}
        {/*  toOptionsTransformer={this.toOptionsArticleCategoryTransformer}*/}
        {/*  articleCategories={articleCategories}*/}
        {/*  match={match}*/}
        {/*  tags={tags}*/}
        {/*/>*/}
      </section>
    );
  }

}

ArticleCreateAdminPage.propTypes = {
  match: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({
  isLoadedArticles: state.getIn(['article', 'isLoaded']),
  isLoadedTags: state.getIn(['tags', 'isLoaded']),
  articleCategories: state.getIn(['articleCategories', 'data']),
  tags: state.getIn(['tags', 'data']),
  isLoadedArticleCategories: state.getIn(['articleCategories', 'isLoaded']),
});

const mapDispatchToProps = dispatch => ({
  reqArticleAndSetDispatch: id => dispatch(reqArticleAndSet(id)),
  initArticleDispatch: () => dispatch(initArticle()),
  getAllArticleCategoriesDispatch: () => dispatch(getAllArticleCategories()),
  getAllTagsAndSetDispatch: () => dispatch(getAllTagsAndSet()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCreateAdminPage);
