import React, { Component } from 'react';
import BlogMainPage from '../../components/blog/BlogMainPage/BlogMainPage';
import { getAllArticleCategories, getAllArticleCategoriesServer } from '../../actions/articleCategories';
import { getAllTagsAndSet, getAllTagsAndSetServer } from '../../actions/tags';
import { getAllArticlesAndSet, getAllArticlesAndSetServer } from '../../actions/articles';
import { getLayout } from '../../shared/layouts/BlogLayout/BlogLayout';
import { SIZE_PAGE } from '../../shared/constants/page';

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

  // получаем последние 5 статей из категории блога
  const queryParams = {
    page, size, orderBy: { _id: -1 }, extra: { category: categoryId },
  };

  // готовим extra для categories
  // TODO надо наверное объединить все индексные страницы в одну
  // const extra = {};
  //
  // if (categoryId) {
  //   extra.category = categoryId;
  // }
  //
  // queryParams.extra = extra;

  if (isServer) {
    await dispatch(getAllArticleCategoriesServer());
    await dispatch(getAllTagsAndSetServer());
    await dispatch(getAllArticlesAndSetServer(queryParams));
  } else {
    await dispatch(getAllArticleCategories());
    await dispatch(getAllTagsAndSet());
    await dispatch(getAllArticlesAndSet(queryParams));
  }
  // console.log('\x1b[36m', 'store.getState()', store.getState().toJS(), '\x1b[0m');

  // console.log(' SECOND GET INITIAL PROPS COMPONENT');
  // console.log("SERVE AND CLIEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEENT!!!!!!!!!") вызывает и на клиенте при маршритизации why?
  return { query, pathname };
};

HomePageWithLayout.getLayout = getLayout;

export default HomePageWithLayout;
