import React, { Component } from 'react';
import AdminLayout from '../../../shared/layouts/AdminLayout/AdminLayout';
import ArticleCreateAdminPage from '../../../components/admin/ArticleCreateAdminPage/ArticleCreateAdminPage';

class ArticlesAdminPage extends Component {

  render() {
    return (
      <AdminLayout>
        <ArticleCreateAdminPage />
      </AdminLayout>
    );
  }

}

export default ArticlesAdminPage;
