
import { combineReducers } from 'redux';
import nasaReducer from './nasaReducer'


// combine reducers
const reducers = combineReducers({
	// we only have a single reducer, but if we had others we could combine them here,
  //by mapping them to a key.
  nasaData: nasaReducer
});


export default reducers;