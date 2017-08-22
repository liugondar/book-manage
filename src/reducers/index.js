import {combineReducers} from 'redux';
import booksReducers from './reducer_book';
import activeBook from './reducer_active_book.js';

const rootReducer=combineReducers({
    books: booksReducers,
    activeBook
})

export default rootReducer;
