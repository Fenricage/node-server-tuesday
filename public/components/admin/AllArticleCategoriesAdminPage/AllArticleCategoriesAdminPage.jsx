import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import AllArticleCategoriesAdminPageView from '../AllArticleCategoriesAdminPageView/AllArticleCategoriesAdminPageView';
import { getAllArticleCategories, reqDeleteArticleCategory } from '../../../actions/articleCategories';

class AllArticleCategoriesAdminPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initArticleCategoriesLoaded: false,
    };
  }


  componentDidMount() {
    const { getAllArticleCategoriesDispatch } = this.props;
    getAllArticleCategoriesDispatch()
      .then(() => {
        this.setState({
          initArticleCategoriesLoaded: true,
        });
      });
  }

  onDeleteArticleCategoryHandler = id => () => {
    const { getAllArticleCategoriesDispatch } = this.props;
    return this.props.reqDeleteArticleCategoryDispatch(id)
      .then(() => {
        getAllArticleCategoriesDispatch();
      });
  }

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


    const { initArticleCategoriesLoaded } = this.state;


    if (!initArticleCategoriesLoaded) {
      return <p>Loader ...</p>;
    }



    // eslint-disable-next-line max-len
    const transformedToListFormatArticles = this.transformArticleCategoriesDataToListFormat(articleCategories);

    return (
      <AllArticleCategoriesAdminPageView
        pathname={pathname}
        articleCategories={transformedToListFormatArticles}
        initArticleCategoriesLoaded={initArticleCategoriesLoaded}
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
});

const mapDispatchToProps = dispatch => ({
  getAllArticleCategoriesDispatch: () => dispatch(getAllArticleCategories()),
  reqDeleteArticleCategoryDispatch: id => dispatch(reqDeleteArticleCategory(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllArticleCategoriesAdminPage);
