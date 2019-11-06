import React, { Component } from 'react';
import AdminLayout from '../../../shared/layouts/AdminLayout/AdminLayout';
import ArticleCreateAdminPage from '../../../components/admin/ArticleCreateAdminPage/ArticleCreateAdminPage';

class ArticlesAdminPage extends Component {

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
ArticlesAdminPage.getInitialProps = async ({ query }) => {
  console.log('\x1b[36m', 'query', query, '\x1b[0m');
  return { query };
};

export default ArticlesAdminPage;
