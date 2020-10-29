import nextCookie from 'next-cookies';
import Cookies from 'js-cookie';
import { Router as NextRouter } from '../routes';
import { getCurrentUserServer } from '../actions/auth';

const auth = async (context) => {

  // забираем токен из кукисов
  const { isServer } = context;
  const { Token } = nextCookie(context);

  /* Redirect if Token doesnt exists */
  // это сработает на стороне сервера
  if (isServer && !Token) {
    context.res.writeHead(302, { Location: '/auth/login' });
    context.res.end();
    return;
  }

  // а это на клиенте, если сюда попали при помощи клиентского роутинга
  if (!Token) {
    // тут проверяем валидность токена
    NextRouter.push('/auth/login');
  }
  /***/

  /* Execute if Token is exists */
  // check token valid
  if (Token) {

    try {

      const user = await getCurrentUserServer({
        headers: {
          'x-access-token': `${Token}`,
        },
      }, context);

    } catch (e) {

      /* Redirect if doesnt authorized or not enough access permissions, also clear Token cookie */
      if (403 === e.response.status || 401 === e.response.status) {

        if (isServer) {

          context.res.writeHead(302, {
            Location: '/auth/login',
            'Set-Cookie': 'Token=deleted; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT', // removes Token
          });

          context.res.end();

          return;
        } else {
          Cookies.remove('Token');
          NextRouter.push('/auth/login');
        }
      /***/
      } else {
        console.error('Unexpected Unhandled Error', { ...e });
      }

    }

  }
  /***/

  return Token;
};

export default auth;
