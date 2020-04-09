import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import AllArticlesAdminPageView from '../AllArticlesAdminPageView/AllArticlesAdminPageView';
import { getAllArticlesAndSet, reqDeleteArticle } from '../../../actions/articles';
import './AllArticlesAdminPage.scss';


class AllArticlesAdminPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initLoadedArticles: false,
    };
  }

  componentDidMount() {
    const { getAllArticlesAndSetDispatch } = this.props;
    getAllArticlesAndSetDispatch()
      .then(() => {
        this.setState({
          initLoadedArticles: true,
        });
      });
  }


  componentDidUpdate(prevProps, prevState) {

  }


  transformArticleDataToListFormat = records => records.map(record => new Map({
    title: record.get('title'),
    _id: record.get('_id'),
  }));

  onDeleteArticleHandler = id => () => {
    const { getAllArticlesAndSetDispatch } = this.props;
    // TODO сделай на await
    return this.props.reqDeleteArticleDispatch(id)
      .then((res) => {
        getAllArticlesAndSetDispatch();
      });
  }

  render() {
    const {
      articles,
      isLoadedArticles,
      isDeletingArticles,
      pathname,
    } = this.props;

    const {
      initLoadedArticles,
    } = this.state;

    if (!initLoadedArticles) {
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
        initLoadedArticles={initLoadedArticles}
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

const mapDispatchToProps = dispatch => ({
  getAllArticlesAndSetDispatch: () => dispatch(getAllArticlesAndSet()),
  reqDeleteArticleDispatch: id => dispatch(reqDeleteArticle(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllArticlesAdminPage);
