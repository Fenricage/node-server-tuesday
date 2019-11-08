import React from 'react';
import List from '../../../shared/components/List/List';
import './AllArticleCategoriesAdminPageView.scss';


const AllArticleCategoriesAdminPageView = ({
  articleCategories,
  isLoadedArticleCategories,
  onDeleteArticleCategoryHandler,
  isDeletingArticleCategories,
  pathname,
}) => (
  <section>
    <h1>Article Categories</h1>
    <List
      pathname={pathname}
      data={articleCategories}
      isLoaded={isLoadedArticleCategories}
      onDeleteItem={onDeleteArticleCategoryHandler}
      isDeletingItems={isDeletingArticleCategories}
    />
  </section>
);

export default AllArticleCategoriesAdminPageView;
