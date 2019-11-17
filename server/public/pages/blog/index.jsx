import React, { Component } from 'react';
import HomeMainPage from '../../components/home/HomeMainPage/HomeMainPage';
import { getAllArticleCategoriesServer } from '../../actions/articleCategories';
import { getAllTagsAndSet, getAllTagsAndSetServer } from '../../actions/tags';
import { getAllArticlesAndSetServer } from '../../actions/articles';
import { getLayout } from '../../shared/layouts/HomeLayout/HomeLayout';

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
  const { page = 1, size = 4, categoryId } = query;
  const queryParams = { page, size, orderBy: { _id: -1 } };

  // готовим extra для categories
  // TODO надо наверное объединить все индексные страницы в одну
  const extra = {};
  if (categoryId) {
    extra.category = categoryId;
  }
  queryParams.extra = extra;

  await dispatch(getAllArticleCategoriesServer());
  await dispatch(getAllTagsAndSetServer());
  await dispatch(getAllArticlesAndSetServer(queryParams));
  // console.log('\x1b[36m', 'store.getState()', store.getState().toJS(), '\x1b[0m');

  // console.log(' SECOND GET INITIAL PROPS COMPONENT');
  // console.log("SERVE AND CLIEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEENT!!!!!!!!!") вызывает и на клиенте при маршритизации why?
  return { query, pathname };
};

HomePageWithLayout.getLayout = getLayout;

export default HomePageWithLayout;
