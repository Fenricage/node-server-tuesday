import React, { Component } from 'react';
import HomeLayout from '../../shared/layouts/HomeLayout/HomeLayout';
import ArticleDetailPage from '../../components/home/ArticleDetailPage/ArticleDetailPage';
import { reqArticleAndSetServer } from '../../actions/article';
import { getAllTagsAndSetServer } from '../../actions/tags';
import { getAllArticleCategoriesServer } from '../../actions/articleCategories';


class ArticleDetailPageWithLayout extends Component {

  render() {
    const { query, pathname } = this.props;
    return (
      <HomeLayout>
        <ArticleDetailPage
          query={query}
          pathname={pathname}
        />
      </HomeLayout>
    );
  }

}


// вызывается и на сервере и на клиенте (при маршриутизации) работает тлько на страницах, на страницах читай что это замена cdm
ArticleDetailPageWithLayout.getInitialProps = async ({
  query, pathname, store, isServer,
}) => {

  const { id } = query;
  const { dispatch } = store;
  // TODO(@fenricage): переписать без использования редакс
  await dispatch(reqArticleAndSetServer(id));
  await dispatch(getAllTagsAndSetServer());
  await dispatch(getAllArticleCategoriesServer());
  // const { dispatch } = store;
  // const { page = 1, size = 4 } = query;
  // const queryParams = { page, size, orderBy: { _id: -1 } };
  // await dispatch(getAllArticleCategoriesServer());
  // await dispatch(getAllTagsAndSetServer());
  // await dispatch(getAllArticlesAndSetServer(queryParams));
  // console.log('\x1b[36m', 'store.getState()', store.getState().toJS(), '\x1b[0m');

  // console.log(' SECOND GET INITIAL PROPS COMPONENT');
  // console.log("SERVE AND CLIEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEENT!!!!!!!!!") вызывает и на клиенте при маршритизации why?
  return { query, pathname };
};


export default ArticleDetailPageWithLayout;
