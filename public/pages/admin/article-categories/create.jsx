import React, { Component } from 'react';
import AdminLayout from '../../../shared/layouts/AdminLayout/AdminLayout';
import ArticleCategoryCreateAdminPage from '../../../components/admin/ArticleCategoryCreateAdminPage/ArticleCategoryCreateAdminPage';
import withAuthSync from '../../../hoc/withAuthSync';

class ArticleCategoryCreateAdminPageWithLayout extends Component {

  render() {
    const { query, pathname } = this.props;

    return (
      <AdminLayout>
        <ArticleCategoryCreateAdminPage
          query={query}
          pathname={pathname}
        />
      </AdminLayout>
    );
  }

}

// это на сервере выполняется, то что возвращается падает в пропсы
ArticleCategoryCreateAdminPageWithLayout.getInitialProps = async ({ query, pathname }) => {
  return { query, pathname };
};

export default withAuthSync(ArticleCategoryCreateAdminPageWithLayout);
