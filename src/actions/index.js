import {SELECT_BOOK} from '../constants.js';
export const selectBook=book=>{
    const action={
        type: SELECT_BOOK,
        book
    }
    return action;
}
