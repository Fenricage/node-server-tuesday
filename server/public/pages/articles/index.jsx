import React, { Component } from 'react';
import HomeMainPage from '../../components/home/HomeMainPage/HomeMainPage';
import {getAllArticleCategories, getAllArticleCategoriesServer, getAllArticleCategoriesUniversal} from '../../actions/articleCategories';
import { getAllTagsAndSet, getAllTagsAndSetServer, getAllTagsAndSetUniversal } from '../../actions/tags';
import {getAllArticlesAndSet, getAllArticlesAndSetServer, getAllArticlesAndSetUniversal} from '../../actions/articles';
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


// вызывается и на сервере и на клиенте (при маршриутизации) работает тлько на страницах, на страницах читай что это замена cdm
HomePageWithLayout.getInitialProps = async ({
  query, pathname, store, isServer,
}) => {
  const { dispatch } = store;
  const { page = 1, size = SIZE_PAGE, categoryId } = query;

  const getArticlesQueryParams = { page, size, orderBy: { _id: -1 } };
  const getArticlesCategoriesQueryParams = {
    extra: {
      exclude: 'blog',
    },
  };

  // готовим extra для categories
  // TODO надо наверное объединить все индексные страницы в одну
  const extra = {};
  if (categoryId) {
    extra.category = categoryId;
  }
  getArticlesQueryParams.extra = extra;

  // if (isServer) {
  //   await dispatch(getAllArticleCategoriesServer(getArticlesCategoriesQueryParams));
  //   await dispatch(getAllTagsAndSetServer());
  //   await dispatch(getAllArticlesAndSetServer(getArticlesQueryParams));
  // } else {
  //   await dispatch(getAllArticleCategories(getArticlesCategoriesQueryParams));
  //   await dispatch(getAllTagsAndSet());
  //   await dispatch(getAllArticlesAndSet(getArticlesQueryParams));
  // }

  await dispatch(getAllArticleCategoriesUniversal(getArticlesCategoriesQueryParams, isServer));
  await dispatch(getAllTagsAndSetUniversal({}, isServer));
  await dispatch(getAllArticlesAndSetUniversal(getArticlesQueryParams, isServer));

  return { query, pathname };
};

HomePageWithLayout.getLayout = getLayout;

export default HomePageWithLayout;
