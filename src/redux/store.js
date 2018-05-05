import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers  from './reducers/index';


//we create a store, enhanced with thunk middleware to allow for async action in redux.
const store = createStore(
	reducers,
  applyMiddleware(thunk)
);


export default store;