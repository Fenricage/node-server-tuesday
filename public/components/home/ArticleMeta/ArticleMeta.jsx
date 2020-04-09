import React, { Component } from 'react';
import ArticleMetaView from '../ArticleMetaView/ArticleMetaView';
import './ArticleMeta.scss';

class ArticleMeta extends Component {

  render() {

    const { articleMeta } = this.props;

    
    return (
      <ArticleMetaView articleMeta={articleMeta} />
    );
  }


}

export default ArticleMeta;
