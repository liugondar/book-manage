import {SELECT_BOOK} from '../constants.js';

export default (state=null,action)=>{
    switch(action.type){
        case SELECT_BOOK:
            return action.book;
        default:
            return state;
    }
}
