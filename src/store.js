import { createStore } from 'redux';
import boardReducer from './boardReducer';

const store = createStore(boardReducer);
export default store;