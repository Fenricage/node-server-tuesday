import React, { Component } from 'react';
import AdminLayout from '../../../shared/layouts/AdminLayout/AdminLayout';
import TagsAdminPage from '../../../components/admin/TagsAdminPage/TagsAdminPage';
import withAuthSync from '../../../hoc/withAuthSync';

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
  return { query, pathname };
};

export default withAuthSync(TagsAdminPageWithLayout);
