// import { fetch } from './csrf.js';
// const initialState = {};

// const CREATE_PROJECTTEAM = 'projectTeam/createProjectTeam';


// const createProject = () => ({
//     type: CREATE_PROJECTTEAM,
//     payload: projectTeam
// });


// export const postProject = (body) => {
//     return async (dispatch) => {
//         const res = await fetch('/api/projectTeam', {
//             method: 'POST',
//             body: JSON.stringify(
//                 body
//             )
//         })
//         dispatch(createProjectTeam(res.data))

//     };
// }




// function reducer(state = initialState, action) {
//     let newState;
//     switch (action.type) {
//         case CREATE_PROJECTTEAM:

//             return { ...state, [action.payload.id]: action.payload }
//         default:
//             return state;
//     }
// }





// export default reducer;