import { fetch } from './csrf.js';
const initialState = {};

const CREATE_PROJECT = 'projects/createProject';
const GET_PROJECTS = 'projects/getProjects'

const createProject = (project) => ({
    type: CREATE_PROJECT,
    payload: project
});
const getProjectsAction = (projects) => ({
    type: GET_PROJECTS,
    payload: projects
})

export const getProjects = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/projects/user/${userId}`)
        dispatch(getProjectsAction(res.data));
        return res.data;
    }
};

export const postProject = (body) => {
    return async (dispatch) => {
        const res = await fetch('/api/projects', {
            method: 'POST',
            body: JSON.stringify(
                body
            )
        })
        dispatch(createProject(res.data))

    };
}




function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case CREATE_PROJECT:
            return { ...state, [action.payload.id]: action.payload }
        case GET_PROJECTS:
            return action.payload;
        default:
            return state;
    }
}





export default reducer;

