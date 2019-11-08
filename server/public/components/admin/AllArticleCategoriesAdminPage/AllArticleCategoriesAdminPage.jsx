import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllArticleCategoriesAdminPageView from '../AllArticleCategoriesAdminPageView/AllArticleCategoriesAdminPageView';
import { getAllArticleCategories, reqDeleteArticleCategory } from '../../../actions/articleCategories';
import { Map } from 'immutable';

class AllArticleCategoriesAdminPage extends Component {

  componentDidMount() {
    const { getAllArticleCategoriesDispatch } = this.props;
    getAllArticleCategoriesDispatch();
  }

  onDeleteArticleCategoryHandler = id => () => this.props.reqDeleteArticleCategoryDispatch(id)

  transformArticleCategoriesDataToListFormat = articleCategories => articleCategories
    .map(articleCategory => new Map({
      title: articleCategory.get('name'),
      _id: articleCategory.get('_id'),
    }))

  render() {
    const {
      articleCategories,
      isLoadedArticleCategories,
      isDeletingArticleCategories,
      pathname,
    } = this.props;


    // eslint-disable-next-line max-len
    const transformedToListFormatArticles = this.transformArticleCategoriesDataToListFormat(articleCategories);

    return (
      <AllArticleCategoriesAdminPageView
        pathname={pathname}
        articleCategories={transformedToListFormatArticles}
        isLoadedArticleCategories={isLoadedArticleCategories}
        onDeleteArticleCategoryHandler={this.onDeleteArticleCategoryHandler}
        isDeletingArticleCategories={isDeletingArticleCategories}
      />
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  articleCategories: state.getIn(['articleCategories', 'data']),
  isLoadedArticleCategories: state.getIn(['articleCategories', 'isLoaded']),
  isDeletingArticleCategories: state.getIn(['articleCategories', 'isDeleting']),
  // articles: state.articles.data,
  // isLoaded: state.articles.isLoaded,
});

const mapDispatchToProps = dispatch => ({
  getAllArticleCategoriesDispatch: () => dispatch(getAllArticleCategories()),
  reqDeleteArticleCategoryDispatch: id => dispatch(reqDeleteArticleCategory(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllArticleCategoriesAdminPage);
