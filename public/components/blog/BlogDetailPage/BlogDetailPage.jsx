import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { reqArticleAndSet } from '../../../actions/article';
import './BlogDetailPage.scss';
import ArticleMeta from "../../home/ArticleMeta/ArticleMeta";
import {getHumanDate, getHumanTime} from "../../../helpers";

class BlogDetailPage extends Component {


  componentDidMount() {
    const { match, reqArticleAndSetDispatch, query: { id: queryId }, } = this.props;
    // reqArticleAndSetDispatch(queryId);
  }


  render() {
    const { isLoadedArticle, articleData } = this.props;

    const date = getHumanDate(articleData.get('created_at'));
    const time = getHumanTime(articleData.get('created_at'));

    // if (!isLoadedArticle) {
    //   return <p>loader...</p>;
    // }
    return (
      <section className="article-detail-page">
        <h1>Отдельный layout для блога</h1>
        <h1 className="article-detail-page__h1">{articleData.get('title')}</h1>
        <h2 className="article-detail-page__h2">{articleData.get('preview_text')}</h2>
        <section className="article-detail-page__info">
          <time className="article-detail-page__date-publication" dateTime={articleData.get('created_at')} pubdate={date}>{`${date} ${time}`}</time>
          <Link href="#">
            <a href="" className="article-detail-page__category">
              {articleData.getIn(['category', 'name'])}
            </a>
          </Link>
        </section>
        {articleData.get('preview_img') && (
          <img
            className="article-detail-page__preview-img"
            src={articleData.getIn(['preview_img', 'img_url'])}
            alt=""
          />
        )}
        <ArticleMeta
          articleMeta={articleData.get('articles_meta')}
        />
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetailPage);
