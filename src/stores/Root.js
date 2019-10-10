import { createStore, combineReducers, applyMiddleware } from 'redux';
import launchCollection from './LaunchCollectionReducer';
import spacexDataService from '../services/LaunchService';

const rootReducer = combineReducers({
  launchCollection
});

const middleware = applyMiddleware(spacexDataService);

const store = createStore(rootReducer, {}, middleware);

export default store;
