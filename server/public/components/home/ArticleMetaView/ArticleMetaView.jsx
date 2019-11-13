import React from 'react';
import ArticleMetaComponent from '../ArticleMetaComponent/ArticleMetaComponent';
import './ArticleMetaView.scss';

const ArticleMetaView = ({ articleMeta }) => {
  const articleMetaComponents = articleMeta.map(
    (articleMetaChunk, index) => <ArticleMetaComponent key={index} data={articleMetaChunk} />,
  );

  return (
    <section className="article-detail-page__meta">
      {articleMetaComponents}
    </section>
  );
};

export default ArticleMetaView;
