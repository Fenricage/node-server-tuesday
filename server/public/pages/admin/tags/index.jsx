import React, { Component } from 'react';
import AdminLayout from '../../../shared/layouts/AdminLayout/AdminLayout';
import TagsAdminPage from '../../../components/admin/TagsAdminPage/TagsAdminPage';

class TagsAdminPageWithLayout extends Component {

  render() {
    const { pathname } = this.props;
    return (
      <AdminLayout>
        <TagsAdminPage
          pathname={pathname}
        />
      </AdminLayout>
    );
  }

}


TagsAdminPageWithLayout.getInitialProps = async ({ query, pathname }) => {
  console.log('\x1b[36m', 'pathname', pathname, '\x1b[0m');
  return { query, pathname };
};

export default TagsAdminPageWithLayout;
