import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleMeta } from 'Components';
import { getHumanDate, getHumanTime } from 'Helpers';
import './ArticleDetailPageView.scss';

const ArticleDetailPageView = ({ articleData }) => {

  const date = getHumanDate(articleData.get('created_at'));
  const time = getHumanTime(articleData.get('created_at'));

  return (
    <section className="article-detail-page">
      <h1 className="article-detail-page__h1">{articleData.get('title')}</h1>
      <h2 className="article-detail-page__h2">{articleData.get('preview_text')}</h2>
      <section className="article-detail-page__info">
        <time className="article-detail-page__date-publication" dateTime={articleData.get('created_at')} pubdate={date}>{`${date} ${time}`}</time>
        <Link to="#" className="article-detail-page__category">{articleData.getIn(['category', 'name'])}</Link>
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
};

export default ArticleDetailPageView;
