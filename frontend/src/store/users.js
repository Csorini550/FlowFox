import { fetch } from './csrf.js';
const initialState = [];



const GET_USERS = 'users/getUsers'

const getUsersAction = (users) => ({
    type: GET_USERS,
    payload: users
});

export const getUsers = (username, userId) => {
    return async (dispatch) => {
        const res = await fetch('/api/users/all');
        dispatch(getUsersAction(res.data));
        return res.data;
    }
}

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_USERS:
            return [...action.payload];
        default:
            return state
    }
}

export default reducer;