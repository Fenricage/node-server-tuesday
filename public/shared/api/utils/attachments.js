import { API_BROWSER, API_SERVER } from '../../constants/api';
import api from '../index';


export const deleteAttachment = (id, extra) => {
  return api.get(API_BROWSER).attachments.deleteOne(id, extra);
};
