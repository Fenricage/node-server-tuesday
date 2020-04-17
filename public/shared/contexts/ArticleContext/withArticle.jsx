import React from 'react';
import ArticleContext from './article-context';

const withArticle = Component => props => (
  <ArticleContext.Consumer>
    {
      contextProps => <Component {...props} context={contextProps} />
    }
  </ArticleContext.Consumer>
);

export default withArticle;
