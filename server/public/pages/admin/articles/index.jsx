import React, { Component } from 'react';
import nextCookie from 'next-cookies';
import Cookies from 'js-cookie';
import { Router as NextRouter } from '../../../routes';
import AdminLayout from '../../../shared/layouts/AdminLayout/AdminLayout';
import AllArticlesAdminPage from '../../../components/admin/AllArticlesAdminPage/AllArticlesAdminPage';

import { getCurrentUser } from '../../../actions/auth';

class ArticlesAdminPageWithLayout extends Component {


  componentDidMount() {
    getCurrentUser();
    console.log('\x1b[36m', 'Cookies.get(Token!!!!!!!!!!!)' , Cookies.get('Token'), '\x1b[0m');
  }


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


ArticlesAdminPageWithLayout.getInitialProps = async ({ query, pathname, ...context }) => {
  console.log('\x1b[36m', 'Cookies.get(Token!!!!!!!!!!!)' , Cookies.get('Token'), '\x1b[0m');
  // забираем токен из кукисов
  const { Token } = nextCookie(context);

  // это сработает на стороне сервера
  if (context.req && !Token) {
    context.res.writeHead(302, { Location: '/auth/login' });
    context.res.end();
    return;
  }

  // а это на клиенте, если сюда попали при помощи клиентского роутинга
  if (!Token) {
    NextRouter.push('/auth/login');
  }

  return { query, pathname, Token };
};

export default ArticlesAdminPageWithLayout;
