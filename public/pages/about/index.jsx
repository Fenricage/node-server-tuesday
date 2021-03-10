import React, { Component } from 'react';
import { getAllArticleCategoriesUniversal } from '../../actions/articleCategories';
import { getAllTagsAndSetUniversal } from '../../actions/tags';
import { getAllArticlesAndSetUniversal } from '../../actions/articles';
import { getLayout } from '../../shared/layouts/BlogLayout/BlogLayout';
import { SIZE_PAGE } from '../../shared/constants/page';
import getApiDependingOnContext from '../../shared/api/getApiDependingOnContext';

class HomePageWithLayout extends Component {

  render() {
    return (
      <p>About page</p>
    );
  }

}


HomePageWithLayout.getInitialProps = async (context) => {

  const {
    query,
    pathname,
    store,
  } = context;

  const { dispatch } = store;
  const { page = 1, size = SIZE_PAGE, categoryId = 'Блог' } = query;
  const queryParams = {
    page, size, orderBy: { _id: -1 }, extra: { category: categoryId },
  };

  const api = getApiDependingOnContext(context);

  await dispatch(getAllArticleCategoriesUniversal({}, api));
  await dispatch(getAllTagsAndSetUniversal({}, api));
  await dispatch(getAllArticlesAndSetUniversal(queryParams, api));

  return { query, pathname };
};

HomePageWithLayout.getLayout = getLayout;

export default HomePageWithLayout;
