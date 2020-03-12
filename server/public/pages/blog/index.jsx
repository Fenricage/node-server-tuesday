import React, { Component } from 'react';
import BlogMainPage from '../../components/blog/BlogMainPage/BlogMainPage';
import { getAllArticleCategoriesUniversal } from '../../actions/articleCategories';
import { getAllTagsAndSetUniversal } from '../../actions/tags';
import { getAllArticlesAndSetUniversal } from '../../actions/articles';
import { getLayout } from '../../shared/layouts/BlogLayout/BlogLayout';

class HomePageWithLayout extends Component {
  render() {
    const { query, pathname } = this.props;
    return (
      <BlogMainPage
        query={query}
        pathname={pathname}
      />
    );
  }
}

HomePageWithLayout.getInitialProps = async ({
  query, pathname, store, isServer,
}) => {
  const { dispatch } = store;
  const {
    page = 1,
    size = 5,
    categoryId = 'Блог',
  } = query;

  // getting last 5 articles from blog category
  const queryParams = {
    page, size, orderBy: { _id: -1 }, extra: { category: categoryId },
  };

  await dispatch(getAllArticleCategoriesUniversal({}, isServer));
  await dispatch(getAllTagsAndSetUniversal({}, isServer));
  await dispatch(getAllArticlesAndSetUniversal(queryParams, isServer));

  return { query, pathname };
};

HomePageWithLayout.getLayout = getLayout;

export default HomePageWithLayout;
