import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import List from '../../../shared/components/List/List';
import Immutable from 'immutable';
import './AllArticlesAdminPageView.scss';

const AllArticlesAdminPageView = ({ articles, isLoadedArticles, onDeleteArticleHandler, isDeletingArticles }) => {
  return (
    <section className="b-all-articles-admin-page">
      <section className="b-all-articles-admin-page__top-bar">
        <h1>All Articles Here</h1>
        <Link href="/admin/articles/create">
          <a>
            Create Article
          </a>
        </Link>
      </section>
      <List
        data={articles}
        isLoaded={isLoadedArticles}
        onDeleteItem={onDeleteArticleHandler}
        isDeletingItems={isDeletingArticles}
      />
    </section>
  );
}

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
