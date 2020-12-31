import { fetch } from './csrf.js';
const initialState = {};

const CREATE_TASK = 'tasks/createTask';

const COMPLETED_TASK = 'tasks/completedTask'
const REMOVE_TASK = 'tasks/removeTask'
const GET_TASKS = 'tasks/getTasks'


const createTask = (task) => ({
    type: CREATE_TASK,
    payload: task
});
const removeTask = (task) => ({
    type: REMOVE_TASK,
    payload: task
})


const completedTask = (task) => ({
    type: COMPLETED_TASK,
    payload: task
})
const getTasksAction = (tasks) => ({
    type: GET_TASKS,
    payload: tasks
})


export const getTasks = (projectId, userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/tasks/${projectId}/${userId}`)
        dispatch(getTasksAction(res.data));
        return res.data;
    }
};

// export const completedTask = (body) => {
//     return async (dispatch) => {
//         const res = await fetch('/api/tasks', {
//             method: 'PATCH',
//             body: JSON.stringify(
//                 body
//             )
//         })
//         dispatch(completedTask(res.data))

//     };
// }
export const deleteTask = (task) => async (dispatch) => {
    const res = await fetch('/api/tasks', {
        method: 'DELETE',
    });
    dispatch(removeTask());
    return res;
};

export const postTask = (body) => {
    return async (dispatch) => {
        const res = await fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(
                body
            )
        })
        dispatch(createTask(res.data))

    };
}

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case CREATE_TASK:
            return { ...state, [action.payload.id]: action.payload }
        // case COMPLETED_TASK:
        //     return {...state,}
        case REMOVE_TASK:
            newState = Object.assign({}, state, { task: null });
            return newState;
        case GET_TASKS:
            const newObject = {};
            action.payload.forEach(function (task) {
                newObject[task.id] = task;
            })
            return newObject;
        default:
            return state;
    }
}
export default reducer;