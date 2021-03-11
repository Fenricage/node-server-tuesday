import api from '.';
import { API_SERVER, API_BROWSER } from '../constants/api';

// только для использования внутри getInitialProps
// узнает что выполняется на клиенте/сервере, возвращает нужный API
const getApiDependingOnContext = (context) => {
  const { req } = context;
  const isServer = !!req;
  return isServer ? api.get(API_SERVER, context) : api.get(API_BROWSER, context);
};

export default getApiDependingOnContext;
