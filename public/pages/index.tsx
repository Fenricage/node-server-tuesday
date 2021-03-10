import React, { Component } from 'react';
import { NextPageContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

// actions
import { getAllArticleCategoriesUniversal } from '../actions/articleCategories';
import { getAllTagsAndSetUniversal } from '../actions/tags';
import { getAllArticlesAndSetUniversal } from '../actions/articles';

import { getLayout } from '../shared/layouts/HomeLayout/HomeLayout';
import { SIZE_PAGE } from '../shared/constants/page';
import TestGrid from '../shared/components/TestGrid/TestGrid';
import getApiDependingOnContext from '../shared/api/getApiDependingOnContext';


type AdditionalMainPageContext = {
  isServer: boolean;
  store: unknown;
}

// custom type and nextjs interface intersection
export type MainPageContext = NextPageContext & AdditionalMainPageContext;


class HomePageWithLayout extends Component {
  static getInitialProps: (context: MainPageContext) => Promise<{
    query: ParsedUrlQuery; pathname: string;
  }>

  render(): JSX.Element {
    const { query, pathname } = this.props;
    return (<TestGrid />);
  }
}

// getInitialProps call both on the server-side and on the client-side (when routing)
// it works only at pages, not in components, in client it work as cdm, but it has differences
HomePageWithLayout.getInitialProps = async (context: MainPageContext) => {
  const {
    query,
    pathname,
    store,
  } = context;

  const { dispatch } = store;
  const { page = 1, size = SIZE_PAGE, categoryId } = query;

  const articlesQueryParams = {
    page,
    size,
    orderBy: { _id: -1 },
    extra: undefined,
  };

  const articleCategoriesQueryParams = {
    extra: {
      exclude: 'blog',
    },
  };

  // prepare extra for categories
  // TODO надо наверное объединить все индексные страницы в одну
  const extra = {
    category: undefined,
  };

  if (categoryId) {
    extra.category = categoryId;
  }

  articlesQueryParams.extra = extra;

  const api = getApiDependingOnContext(context);

  await dispatch(getAllArticleCategoriesUniversal(articleCategoriesQueryParams, api));
  await dispatch(getAllTagsAndSetUniversal({}, api));
  await dispatch(getAllArticlesAndSetUniversal(articlesQueryParams, api));

  return { query, pathname };
};

HomePageWithLayout.getLayout = getLayout;

export default HomePageWithLayout;
