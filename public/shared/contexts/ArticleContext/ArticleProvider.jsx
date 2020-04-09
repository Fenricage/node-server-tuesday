import React from 'react';
import ArticleContext from './article-context';

const ArticleProvider = ({ children, value }) => (
  <ArticleContext.Provider value={value}>
    {children}
  </ArticleContext.Provider>
);

export default ArticleProvider;
