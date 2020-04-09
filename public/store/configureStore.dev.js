import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Map } from 'immutable';
import rootReducer from '../reducers/index';

const defaultInitialState = Map({});


export const configureStore = (initialState = defaultInitialState) => createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(
    thunk,
  )),
);


// import { connectRouter, routerMiddleware } from 'connected-react-router/immutable';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import { applyMiddleware, createStore } from 'redux';
// import rootReducer from '../reducers';
//
// export default function configureStore(initialState, history) {
//   const store = createStore(
//     rootReducer(history),
//     initialState,
//     composeWithDevTools(applyMiddleware(
//       thunk,
//       routerMiddleware(history),
//     )),
//   );
//   return store;
// }
