import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reqArticleAndSet } from 'Actions/article';
import { ArticleDetailPageView } from 'Components';
import './ArticleDetailPage.scss';

class ArticleDetailPage extends Component {


  componentDidMount() {
    const { match, reqArticleAndSetDispatch } = this.props;
    reqArticleAndSetDispatch(match.params.id);
  }


  render() {
    const { isLoadedArticle, articleData } = this.props;
    if (!isLoadedArticle) {
      return <p>loader...</p>;
    }
    return (
      <ArticleDetailPageView articleData={articleData} />
    );
  }

}

const mapStateToProps = state => ({
  articleData: state.getIn(['article', 'data']),
  isLoadedArticle: state.getIn(['article', 'isLoaded']),
});

const mapDispatchToProps = dispatch => ({
  reqArticleAndSetDispatch: id => dispatch(reqArticleAndSet(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetailPage);