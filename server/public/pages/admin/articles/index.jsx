import React, { Component } from 'react';
import AdminLayout from '../../../shared/layouts/AdminLayout/AdminLayout';
import AllArticlesAdminPage from '../../../components/admin/AllArticlesAdminPage/AllArticlesAdminPage';

class ArticlesAdminPage extends Component {

  render() {
    return (
      <AdminLayout>
        <AllArticlesAdminPage />
      </AdminLayout>
    );
  }

}

export default ArticlesAdminPage;
