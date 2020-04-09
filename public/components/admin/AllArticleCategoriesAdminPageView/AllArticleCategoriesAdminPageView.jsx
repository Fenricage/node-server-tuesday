import React from 'react';
import cs from 'classnames';
import List from '../../../shared/components/List/List';
import './AllArticleCategoriesAdminPageView.scss';


const AllArticleCategoriesAdminPageView = ({
  articleCategories,
  isLoadedArticleCategories,
  onDeleteArticleCategoryHandler,
  isDeletingArticleCategories,
  pathname,
  initArticleCategoriesLoaded,
}) => (
  <section className="all-article-categories-admin-page">
    <h1>Article Categories</h1>
    <List
      className={cs({
        'all-article-categories-admin-page__list': true,
        'all-article-categories-admin-page__list_is-loaded': !isLoadedArticleCategories,
      })}
      pathname={pathname}
      data={articleCategories}
      isLoaded={initArticleCategoriesLoaded}
      onDeleteItem={onDeleteArticleCategoryHandler}
      isDeletingItems={isDeletingArticleCategories}
    />
  </section>
);

export default AllArticleCategoriesAdminPageView;
