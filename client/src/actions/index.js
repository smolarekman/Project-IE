import axios from 'axios';
import {FETCH_USER} from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/profile');

    //console.log(res.data.token)
    dispatch({type: FETCH_USER, payload: res.data.token});
};


export const logIn = cos => async dispatch => {
    const res = await axios.post('/api/login', cos);
    dispatch({type: FETCH_USER, payload: res});
};

export const loginTo = user => {
    return axios
        .post('/api/login', {
            email: user.email,
            password: user.password
        }).then(res => {
            return res.data
        })
};

export const signUp = user => {
    return axios
        .post('/api/signup', {
            email: user.email,
            password: user.password
        }).then(
            res => {
                return res.data
            })
};

export const showProfile = user => {
    return axios
        .post('/api/token/user'
            , {}, {
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            }
        )
        .then(res => {
            return res.data.authData.user.local;
        })
}

