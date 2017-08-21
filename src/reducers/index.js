import {combineReducers} from 'redux';
import booksReducers from './reducer_book';

const rootReducer=combineReducers({
  books: booksReducers
})

export default rootReducer;
