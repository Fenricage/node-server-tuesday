import Cookies from 'js-cookie';
import nextCookie from 'next-cookies';
import { Router as NextRouter } from '../routes';
import { getCurrentUserServer } from '../actions/auth';

const auth = async (context) => {
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
    // тут проверяем валидность токена
    NextRouter.push('/auth/login');
  }

  // проверяем валидность токена
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

export default auth;
