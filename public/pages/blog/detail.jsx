import React, { Component } from 'react';
import HomeLayout from '../../shared/layouts/HomeLayout/HomeLayout';
import BlogDetailPage from '../../components/blog/BlogDetailPage/BlogDetailPage';
import { reqArticleAndSetUniversal } from '../../actions/article';
import { getAllTagsAndSetUniversal } from '../../actions/tags';
import { getAllArticleCategoriesUniversal } from '../../actions/articleCategories';
import getApiDependingOnContext from '../../shared/api/getApiDependingOnContext';


class ArticleDetailPageWithLayout extends Component {

  render() {
    const { query, pathname } = this.props;
    return (
      <HomeLayout>
        <BlogDetailPage
          query={query}
          pathname={pathname}
        />
      </HomeLayout>
    );
  }

}


// вызывается и на сервере и на клиенте (при маршриутизации)
// работает тлько на страницах, на страницах читай что это замена cdm
ArticleDetailPageWithLayout.getInitialProps = async (context) => {

  const {
    query,
    pathname,
    store,
  } = context;

  const { id } = query;
  const { dispatch } = store;

  const api = getApiDependingOnContext(context);

  await dispatch(reqArticleAndSetUniversal(id, api));
  await dispatch(getAllTagsAndSetUniversal({}, api));
  await dispatch(getAllArticleCategoriesUniversal({}, api));

  return { query, pathname };
};


export default ArticleDetailPageWithLayout;
