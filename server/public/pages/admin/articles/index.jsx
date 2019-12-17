import React, { Component } from 'react';
import nextCookie from 'next-cookies';
import Cookies from 'js-cookie';
import { Router as NextRouter } from '../../../routes';
import AdminLayout from '../../../shared/layouts/AdminLayout/AdminLayout';
import AllArticlesAdminPage from '../../../components/admin/AllArticlesAdminPage/AllArticlesAdminPage';

import { getCurrentUser, getCurrentUserServer } from '../../../actions/auth';


const auth = async (context) => {
  console.log('\x1b[36m', 'Cookies.get(Token!!!!!!!!!!!)', Cookies.get('Token'), '\x1b[0m');
  // забираем токен из кукисов
  const { Token } = nextCookie(context);
  console.log('\x1b[36m', 'Token NEXT', Token, '\x1b[0m');
  // это сработает на стороне сервера
  if (context.req && !Token) {
    context.res.writeHead(302, { Location: '/auth/login' });
    context.res.end();
    return;
  }

  // а это на клиенте, если сюда попали при помощи клиентского роутинга
  if (!Token) {
    // тут проверяем валидность токена
    NextRouter.push('/auth/login');
  }

  if (Token) {
    // далее если ответ будет содержать статус 401/403 то управление
    // отойдет интерсептору axios который сделает редирект
    const user = await getCurrentUserServer({
      headers: {
        'x-access-token': `${Token}`,
      },
    }, context);

    // TODO можно отказаться от интерсептора и сделать редирект тут, опираясь на auth: false
    // TODO в КРАЙНЕМ СЛУЧАЕ
    // TODO или можно прокинуть контекст
    // если ответил что авторизация не прошла
    // if (!user.auth) {
    //   // для сервера
    //   if (context.req) {
    //     context.res.writeHead(302, { Location: '/auth/login' });
    //     context.res.end();
    //     return;
    //   }
    //   // для клиента
    //   NextRouter.push('/auth/login');
    // }
  }

  return Token;
};

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


ArticlesAdminPageWithLayout.getInitialProps = async ({ query, pathname, ...context }) => {

  const Token = await auth(context);

  return { query, pathname, Token };
};

export default ArticlesAdminPageWithLayout;
