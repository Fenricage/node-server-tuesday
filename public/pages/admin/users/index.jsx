import React, { Component } from 'react';
import AdminLayout from '../../../shared/layouts/AdminLayout/AdminLayout';
import AllUsersAdminPage from '../../../components/admin/AllUsersAdminPage/AllUsersAdminPage';
import withAuthSync from '../../../hoc/withAuthSync';

class AllUsersAdminPageWithLayout extends Component {

  render() {
    const { pathname } = this.props;
    return (
      <AdminLayout>
        <AllUsersAdminPage
          pathname={pathname}
        />
      </AdminLayout>
    );
  }

}


AllUsersAdminPageWithLayout.getInitialProps = async ({ query, pathname }) => {
  return { query, pathname };
};

export default withAuthSync(AllUsersAdminPageWithLayout);
