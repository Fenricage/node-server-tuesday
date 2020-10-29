import React, { Component } from 'react';
import AdminLayout from '../../../shared/layouts/AdminLayout/AdminLayout';
import AllArticlesAdminPage from '../../../components/admin/AllArticlesAdminPage/AllArticlesAdminPage';
import withAuthSync from '../../../hoc/withAuthSync';

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

// сделай HOC c getInitialProps, и задебажь, должна быть рпавильная последовательность логов, первый лог тут, второй в HOC
// затести также ожидание, сделай тут setTimeout
ArticlesAdminPageWithLayout.getInitialProps = async ({ query, pathname, ...context }) => {
  return { query, pathname };
};

export default withAuthSync(ArticlesAdminPageWithLayout);
