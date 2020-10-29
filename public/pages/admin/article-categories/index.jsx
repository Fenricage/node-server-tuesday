import React, { Component } from 'react';
import AdminLayout from '../../../shared/layouts/AdminLayout/AdminLayout';
import AllArticleCategoriesAdminPage from '../../../components/admin/AllArticleCategoriesAdminPage/AllArticleCategoriesAdminPage';
import withAuthSync from '../../../hoc/withAuthSync';

class ArticleCategoriesAdminPage extends Component {

  render() {
    const { query, pathname } = this.props;

    return (
      <AdminLayout>
        <AllArticleCategoriesAdminPage
          query={query}
          pathname={pathname}
        />
      </AdminLayout>
    );
  }

}

// это на сервере выполняется, то что возвращается падает в пропсы
ArticleCategoriesAdminPage.getInitialProps = async ({ query, pathname }) => {
  return { query, pathname };
};

export default withAuthSync(ArticleCategoriesAdminPage);
