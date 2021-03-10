import React, { Component } from 'react';
import BlogMainPage from '../../components/blog/BlogMainPage/BlogMainPage';
import { getAllArticleCategoriesUniversal } from '../../actions/articleCategories';
import { getAllTagsAndSetUniversal } from '../../actions/tags';
import { getAllArticlesAndSetUniversal } from '../../actions/articles';
import { getLayout } from '../../shared/layouts/BlogLayout/BlogLayout';
import getApiDependingOnContext from '../../shared/api/getApiDependingOnContext';

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

HomePageWithLayout.getInitialProps = async (context) => {

  const {
    query,
    pathname,
    store,
    isServer,
  } = context;

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

  const api = getApiDependingOnContext(context);

  await dispatch(getAllArticleCategoriesUniversal({}, api));
  await dispatch(getAllTagsAndSetUniversal({}, api));
  await dispatch(getAllArticlesAndSetUniversal(queryParams, api));

  return { query, pathname };
};

HomePageWithLayout.getLayout = getLayout;

export default HomePageWithLayout;
