import React, { Component } from 'react';
import HomeMainPage from '../../components/home/HomeMainPage/HomeMainPage';
import { getAllArticleCategoriesUniversal } from '../../actions/articleCategories';
import { getAllTagsAndSetUniversal } from '../../actions/tags';
import { getAllArticlesAndSetUniversal } from '../../actions/articles';
import { getLayout } from '../../shared/layouts/HomeLayout/HomeLayout';
import { SIZE_PAGE, ARTICLES_LIMIT } from '../../shared/constants/page';

// @types
import { MainPageContext } from '../index';
import getApiDependingOnContext from '../../shared/api/getApiDependingOnContext';

class HomePageWithLayout extends Component {

  render(): JSX.Element {

    const { query, pathname } = this.props;

    return (
      <HomeMainPage
        query={query}
        pathname={pathname}
      />
    );

  }
}


HomePageWithLayout.getInitialProps = async (context: MainPageContext) => {

  const {
    query,
    pathname,
    store,
  } = context;

  const { dispatch } = store;
  const {
    page = 1, size = SIZE_PAGE, categoryId, offset = 0,
  } = query;


  const articlesQueryParams = {
    page,
    size,
    orderBy: {
      _id: -1,
    },
    offset,
    limit: ARTICLES_LIMIT,
    extra: undefined,
  };

  const articlesCategoriesQueryParams = {
    extra: {
      exclude: 'blog',
    },
  };

  // TODO(@fenricage): need to unite this logic of index-pages to component
  const extra = {
    category: undefined,
  };
  if (categoryId) {
    extra.category = categoryId;
  }
  articlesQueryParams.extra = extra;

  const api = getApiDependingOnContext(context);

  await dispatch(getAllArticleCategoriesUniversal(articlesCategoriesQueryParams, api)); // done
  await dispatch(getAllTagsAndSetUniversal({}, api));
  await dispatch(getAllArticlesAndSetUniversal(articlesQueryParams, api));

  return { query, pathname };
};

HomePageWithLayout.getLayout = getLayout;

export default HomePageWithLayout;
