import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import AllArticlesAdminPageView from '../AllArticlesAdminPageView/AllArticlesAdminPageView'
import { getAllArticlesAndSet, reqDeleteArticle } from '../../../actions/articles';
import './AllArticlesAdminPage.scss';


class AllArticlesAdminPage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getAllArticlesAndSetDispatch } = this.props;
    getAllArticlesAndSetDispatch();
  }

  transformArticleDataToListFormat = records => records.map(record => new Map({
    title: record.get('title'),
    _id: record.get('_id'),
  }))

  onDeleteArticleHandler = id => () => this.props.reqDeleteArticleDispatch(id)

  render() {
    const {
      articles,
      isLoadedArticles,
      isDeletingArticles,
      pathname,
    } = this.props;

    if (!isLoadedArticles) {
      return <p>Loader ...</p>;
    }
    // transform data to format list component
    const records = articles.get('records');
    const transformedToListFormatArticles = this.transformArticleDataToListFormat(records);

    return (
      <AllArticlesAdminPageView
        pathname={pathname}
        articles={transformedToListFormatArticles}
        isLoadedArticles={isLoadedArticles}
        onDeleteArticleHandler={this.onDeleteArticleHandler}
        isDeletingArticles={isDeletingArticles}
      />
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  articles: state.getIn(['articles', 'data']),
  isLoadedArticles: state.getIn(['articles', 'isLoaded']),
  isDeletingArticles: state.getIn(['articles', 'isDeleting']),
});

const mapDispatchToProps = (dispatch) => ({
  getAllArticlesAndSetDispatch: () => dispatch(getAllArticlesAndSet()),
  reqDeleteArticleDispatch: id => dispatch(reqDeleteArticle(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllArticlesAdminPage);
