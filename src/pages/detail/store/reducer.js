import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultStatus = fromJS({
    title: 'title',
    content: 'content',
})
export default (state=defaultStatus, action) => {
    switch(action.type){
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default:
            return state;
    }
}