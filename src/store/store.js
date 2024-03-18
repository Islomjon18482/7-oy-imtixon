import { createStore } from 'redux';
import cardReducer from './reduser.js';

const store = createStore(cardReducer);

export default store;
