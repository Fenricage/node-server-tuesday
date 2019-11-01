import React, { Component } from 'react';
import AdminLayout from '../../shared/layouts/AdminLayout/AdminLayout';
import MainAdminPage from '../../components/admin/MainAdminPage/MainAdminPage';

class IndexAdminPage extends Component {

  render() {
    return (
      <AdminLayout>
        <MainAdminPage/>
      </AdminLayout>
    );
  }

}

export default IndexAdminPage;
