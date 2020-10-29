import React, { Component } from 'react';
import AdminLayout from '../../../shared/layouts/AdminLayout/AdminLayout';
import ArticleCreateAdminPage from '../../../components/admin/ArticleCreateAdminPage/ArticleCreateAdminPage';
import withAuthSync from '../../../hoc/withAuthSync';

class ArticleCreateAdminPageWithLayout extends Component {

  render() {
    const { query } = this.props;

    return (
      <AdminLayout>
        <ArticleCreateAdminPage
          query={query}
        />
      </AdminLayout>
    );
  }

}

// это на сервере выполняется, то что возвращается падает в пропсы
ArticleCreateAdminPageWithLayout.getInitialProps = async ({ query }) => {
  return { query };
};

export default withAuthSync(ArticleCreateAdminPageWithLayout);
