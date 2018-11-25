import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as detailReducer} from '../pages/detail/store';

//采用redux-immutable的combineReducers方法，此时的reducer是一个immutable对象
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer
})

export default reducer;