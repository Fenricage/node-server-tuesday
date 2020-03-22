import React, { Component } from 'react';
import HomeMainPage from '../../components/home/HomeMainPage/HomeMainPage';
import { getAllArticleCategoriesUniversal } from '../../actions/articleCategories';
import { getAllTagsAndSetUniversal } from '../../actions/tags';
import { getAllArticlesAndSetUniversal } from '../../actions/articles';
import { getLayout } from '../../shared/layouts/HomeLayout/HomeLayout';
import { SIZE_PAGE } from '../../shared/constants/page';

class HomePageWithLayout extends Component {
  render() {
    const { query, pathname } = this.props;
    return (
      <HomeMainPage
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
    page = 1, size = SIZE_PAGE, categoryId, offset = SIZE_PAGE,
  } = query;


  const getArticlesQueryParams = { page, size, orderBy: { _id: -1 } };
  const getArticlesCategoriesQueryParams = {
    extra: {
      exclude: 'blog',
    },
  };

  // TODO(@fenricage): need to unite this logic of index-pages to component
  const extra = {};
  if (categoryId) {
    extra.category = categoryId;
  }
  getArticlesQueryParams.extra = extra;

  await dispatch(getAllArticleCategoriesUniversal(getArticlesCategoriesQueryParams, isServer));
  await dispatch(getAllTagsAndSetUniversal({}, isServer));
  await dispatch(getAllArticlesAndSetUniversal(getArticlesQueryParams, isServer));

  return { query, pathname };
};

HomePageWithLayout.getLayout = getLayout;

export default HomePageWithLayout;
