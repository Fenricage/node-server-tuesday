import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import List from '../../../shared/components/List/List';
import './AllArticlesAdminPageView.scss';

const AllArticlesAdminPageView = ({
  articles, isLoadedArticles, onDeleteArticleHandler, isDeletingArticles, pathname,
}) => (
  <section className="b-all-articles-admin-page">
    <section className="b-all-articles-admin-page__top-bar">
      <h1>All Articles Here</h1>
      <Link
        href="/admin/articles/[id]"
        as="/admin/articles/create"
      >
        {/* хуйня сверху работает как SPA при совпадении роута с наличием страницы */}
        <a>
            Create Article
        </a>
      </Link>
    </section>
    <List
      pathname={pathname}
      data={articles}
      isLoaded={isLoadedArticles}
      onDeleteItem={onDeleteArticleHandler}
      isDeletingItems={isDeletingArticles}
    />
  </section>
);

AllArticlesAdminPageView.propTypes = {
  articles: PropTypes.oneOfType([
    PropTypes.instanceOf(Array),
    PropTypes.instanceOf(Immutable.Iterable),
  ]),
  isLoadedArticles: PropTypes.bool.isRequired,
};

AllArticlesAdminPageView.defaultProps = {
  articles: [],
};

export default AllArticlesAdminPageView;
