import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;
export interface IListItemData {
    id: number,
    text: string
};