import { combineReducers } from 'redux-immutable';

import auth from './auth';
import articles from './articles';
import article from './article';
import articleCategories from './articleCategories';
import articleCategory from './articleCategory';
import users from './users';
import tags from './tags';
import { reducer as form } from 'redux-form/immutable';


const rootReducer = combineReducers({
  auth,
  articles,
  article,
  articleCategories,
  articleCategory,
  users,
  tags,
  form,
});

export default rootReducer;
