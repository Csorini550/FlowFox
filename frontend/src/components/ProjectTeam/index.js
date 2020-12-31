import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from 'react-router-dom'
import { postProjectTeam, getProjectTeam } from '../../store/projectTeam.js'
// import { getProjects } from '../../store/projects'
import './ProjectTeam.css';
const ProjectTeam = () => {

    const loggedInUser = useSelector(state => {
        return state.session.user;
    })
    let currentUser = loggedInUser.username
    const [name, setName] = useState([]);
    const [teamUsers, setTeamUsers] = useState({ currentUser })

    const dispatch = useDispatch();
    let { userId } = useParams();
    // const userId = useSelector((state) => state.session.user.id)
    const users = useSelector(state => {
        return state.users
    })

    const projects = useSelector(state => {
        return state.projects
    })

    const projectTeams = useSelector(state => {

        return state.projectTeams
    })

    console.log(projectTeams)


    useEffect(() => {
        dispatch(getProjectTeam(loggedInUser.id))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postProjectTeam({ name, userId }))

    };
    return (
        <>
            <form onSubmit={handleSubmit} className='form project-team'>
                <label className='annoyed'>
                    New Project Team
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className='input one'
                    >
                    </input>
                    <label>
                        Add Teammates
                        <select className='input two'>
                            {/* {users.map((user) => {
                                return (
                                    <option key={userId}>
                                        {user.User.username}
                                    </option>
                                )
                            })} */}

                        </select>
                    </label>
                </label>

            </form>
            <div className='main'>
                <h3> My Project Teams</h3>
                {!name && <h3>Loading....</h3>}
                {name && name.map(projectTeam => {
                    return (
                        <div className='project'>
                            <h3>Does this show</h3>
                            <h3>{projectTeam.name}</h3>
                            {/* <Link className='project-link'>
                            </Link> */}
                        </div>)
                })}
            </div>
        </>
    )
}

export default ProjectTeam;