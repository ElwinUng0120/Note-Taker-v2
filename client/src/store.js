import {createStore, combineReducers} from 'redux';
import {notes} from './redux/reducers';

const reducers = {
   notes,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());