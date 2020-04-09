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


ArticleDetailPageWithLayout.getInitialProps = async ({
  query, pathname, store, isServer,
}) => {
  const { id } = query;
  const { dispatch } = store;
  // TODO(@fenricage): rewrite without using redux
  await dispatch(reqArticleAndSetServer(id));
  await dispatch(getAllTagsAndSetServer());
  await dispatch(getAllArticleCategoriesServer());

  return { query, pathname };
};


export default ArticleDetailPageWithLayout;
