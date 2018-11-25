import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})
export const logout = () => ({
    type: constants.LOGOUT,
    value: false
})
export const login = (account, login) => {
    return (dispatch) => {
        axios.get(`/api/login.json?account=${account}&password=${login}`).then((res)=>{
            const result = res.data.data;
            if(result){
                dispatch(changeLogin())
            }else{
                alert('login fails');
            }
        })
    }
}