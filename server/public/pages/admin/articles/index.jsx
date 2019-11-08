import React, { Component } from 'react';
import AdminLayout from '../../../shared/layouts/AdminLayout/AdminLayout';
import AllArticlesAdminPage from '../../../components/admin/AllArticlesAdminPage/AllArticlesAdminPage';

class ArticlesAdminPageWithLayout extends Component {

  render() {
    const { pathname } = this.props;
    return (
      <AdminLayout>
        <AllArticlesAdminPage
          pathname={pathname}
        />
      </AdminLayout>
    );
  }

}


ArticlesAdminPageWithLayout.getInitialProps = async ({ query, pathname }) => {
  console.log('\x1b[36m', 'pathname', pathname, '\x1b[0m');
  return { query, pathname };
};

export default ArticlesAdminPageWithLayout;
