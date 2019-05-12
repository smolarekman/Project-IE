import axios from 'axios';
import {FETCH_USER} from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/profile');

    dispatch({ type: FETCH_USER, payload: res.data });
};


export const logIn = cos => async dispatch => {
    const res = await axios.post('/api/login', cos);
    dispatch({type: FETCH_USER, payload: res});
};

export const loginto = user => {
    return axios
        .post('/api/login', {
        email: user.email,
        password: user.password
    }).
        then(res => {
        return res.data
    })
};
