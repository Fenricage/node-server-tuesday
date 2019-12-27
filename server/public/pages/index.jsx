import React, { Component } from 'react';
import HomeMainPage from '../components/home/HomeMainPage/HomeMainPage';
import { getAllArticleCategoriesServer, getAllArticleCategories } from '../actions/articleCategories';
import { getAllTagsAndSet, getAllTagsAndSetServer } from '../actions/tags';
import { getAllArticlesAndSetServer, getAllArticlesAndSet } from '../actions/articles';
import { getLayout } from '../shared/layouts/HomeLayout/HomeLayout';
import { SIZE_PAGE } from '../shared/constants/page';

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
HomePageWithLayout.getInitialProps = async ({
  query, pathname, store, isServer,
}) => {
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

  if (isServer) {
    await dispatch(getAllArticleCategoriesServer());
    await dispatch(getAllTagsAndSetServer());
    await dispatch(getAllArticlesAndSetServer(queryParams));
  } else {
    await dispatch(getAllArticleCategories());
    await dispatch(getAllTagsAndSet());
    await dispatch(getAllArticlesAndSet(queryParams));
  }

  return { query, pathname };
};

HomePageWithLayout.getLayout = getLayout;

export default HomePageWithLayout;
