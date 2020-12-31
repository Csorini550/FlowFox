// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { postProjectTeam } from '../../store/projectTeam.js'

// const NewProjectTeam = () => {

//     const [name, setName] = useState("");

//     const dispatch = useDispatch();
//     const userId = useSelector((state) => state.session.user.id)
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(postProjectTeam({ name, userId }))

//     };
//     return (
//         <div>
//             <h2>Project Team</h2>
//         </div>
//     )
// }
