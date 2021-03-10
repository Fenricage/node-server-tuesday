import React, { Component } from 'react';
import HomeLayout from '../../shared/layouts/HomeLayout/HomeLayout';
import ArticleDetailPage from '../../components/home/ArticleDetailPage/ArticleDetailPage';
import { reqArticleAndSetUniversal } from '../../actions/article';
import { getAllTagsAndSetUniversal } from '../../actions/tags';
import { getAllArticleCategoriesUniversal } from '../../actions/articleCategories';
import getApiDependingOnContext from '../../shared/api/getApiDependingOnContext';


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
