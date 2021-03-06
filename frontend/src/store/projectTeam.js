import { fetch } from './csrf.js';
const initialState = []

const GET_PROJECTTEAM = 'projectTeam/getProjectTeam';
const CREATE_PROJECTTEAM = 'projectTeam/createProjectTeam';
const DELETE_PROJECTTEAM = 'projectTeam/deleteProjectTeam';

const deleteProjectTeamAction = (projectTeam) => ({
    type: DELETE_PROJECTTEAM,
    payload: projectTeam
})

const createProjectTeamAction = (projectTeam) => ({
    type: CREATE_PROJECTTEAM,
    payload: projectTeam
});
const getProjectTeamAction = (projectTeams) => ({
    type: GET_PROJECTTEAM,
    payload: projectTeams
});

export const getProjectTeam = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/projectTeams/${userId}`)
        dispatch(getProjectTeamAction(res.data));
        return res.data;
    }
};


export const postProjectTeam = (projectId, name, userId, ownerId) => {
    console.log("psot project team!!!", projectId, name, userId)
    const body = { name, userId, projectId, ownerId }
    return async (dispatch) => {
        const res = await fetch(`/api/projectTeams`, {
            method: 'POST',
            body: JSON.stringify(
                body
            )
        })
        dispatch(createProjectTeamAction(res.data))

    };
}

export const deleteProjectTeam = (userId) => async (dispatch) => {
    const res = await fetch(`/api/projectTeams/${userId}`, {
        method: 'DELETE'
    });
    dispatch(deleteProjectTeamAction(res.data));
    return res;
};




function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case CREATE_PROJECTTEAM:
            return { ...state, [action.payload.id]: action.payload };
        case GET_PROJECTTEAM:
            return [...action.payload];
        // const newObject = {};
        // action.payload.forEach(function (projectTeam) {
        //     newObject[projectTeam.id] = projectTeam;
        // })
        case DELETE_PROJECTTEAM:
            return {
                ...state, tasks: state.tasks.filter(task => task !== action.payload)
            }
        default:
            return state;
    }
}





export default reducer;