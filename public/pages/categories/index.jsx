import React, { Component } from 'react';
import HomeMainPage from '../../components/home/HomeMainPage/HomeMainPage';

// actions
import {
  getAllArticleCategoriesUniversal,
} from '../../actions/articleCategories';
import {
  getAllTagsAndSetUniversal,
} from '../../actions/tags';
import {
  getAllArticlesAndSetUniversal,
} from '../../actions/articles';

import { getLayout } from '../../shared/layouts/HomeLayout/HomeLayout';
import { SIZE_PAGE } from '../../shared/constants/page';
import getApiDependingOnContext from '../../shared/api/getApiDependingOnContext';

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


// вызывается и на сервере и на клиенте (при маршриутизации) работает тлько на страницах, на страницах читай что это замена cdm
HomePageWithLayout.getInitialProps = async (context) => {

  const {
    query,
    pathname,
    store,
  } = context;

  const { dispatch } = store;
  const { page = 1, size = SIZE_PAGE, categoryId } = query;
  const queryParams = { page, size, orderBy: { _id: -1 } };

  // готовим extra для categories
  // TODO надо наверное объединить все индексные страницы в одну
  const extra = {};
  if (categoryId) {
    extra.category = categoryId;
  }
  queryParams.extra = extra;

  const api = getApiDependingOnContext(context);

  await dispatch(getAllArticleCategoriesUniversal({}, api));
  await dispatch(getAllTagsAndSetUniversal({}, api));
  await dispatch(getAllArticlesAndSetUniversal(queryParams, api));

  return { query, pathname };
};

HomePageWithLayout.getLayout = getLayout;

export default HomePageWithLayout;
