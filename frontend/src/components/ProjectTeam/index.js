import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useHistory } from 'react-router-dom'
import { postProjectTeam, getProjectTeam } from '../../store/projectTeam.js'
import { getUsers } from '../../store/users.js'
import { getProjects } from '../../store/projects'
// import { getProjects } from '../../store/projects'
import './ProjectTeam.css';
const ProjectTeam = () => {

    const loggedInUser = useSelector(state => {
        return state.session.user;
    })

    let currentUser = loggedInUser.username
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [teamUsers, setTeamUsers] = useState({ currentUser })
    const [projectName, setprojectName] = useState([]);
    const [projectId, setProjectId] = useState('')
    const dispatch = useDispatch();
    let { currentUserId } = useParams();
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

    useEffect(() => {
        console.log(userId, projectId)
    }, [projectId, userId])


    useEffect(async () => {
        const projects = await dispatch(getProjects(loggedInUser.id));
        setprojectName(projects)
    }, [])

    useEffect(() => {
        dispatch(getProjectTeam(loggedInUser.id))
        dispatch(getUsers(users))
    }, [])


    // const projectId = projectTeams.id
    const ownerId = loggedInUser.id
    const handleSubmit = (e) => {
        console.log('stuff!!', projectId, name, userId)
        e.preventDefault();
        dispatch(postProjectTeam(projectId, name, userId, ownerId))

    };
    return (
        <>
            <form onSubmit={handleSubmit} className='form text'>
                <label className='text'>
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
                        <select className='input two' onChange={(e) => {
                            setUserId(e.target.value)
                        }}>
                            {users.map((user) => {
                                return (
                                    <option key={user.id} value={user.id}>
                                        {user.username}
                                    </option>
                                )
                            })}

                        </select>
                    </label>
                    <label>
                        Select Project
                        <select className='input two' onChange={(e) => {
                            setProjectId(e.target.value)
                        }}>

                            {!projectName && <h3>Loading....</h3>}
                            {projectName && projectName.map(project => {
                                return (
                                    <option key={project.id} value={project.projectId}>
                                        {project.Project.name}
                                    </option>
                                )
                            })}

                        </select>
                    </label>
                </label>
                <button className='input four submit-project' type='submit' value='Submit'>Submit</button>

            </form>
            <>
                <div className='text'>

                    <h3> My Project Teams</h3>
                    <div className='main'>
                        {!projectTeams && <h3>Loading....</h3>}
                        {projectTeams && projectTeams.map(projectTeam => {
                            if (projectTeam.name !== null) {
                                return (
                                    <div className='project'>
                                        <Link className='project-link' to={`/projects/${projectTeam.projectId}/tasks`}>
                                            <h4>{projectTeam.name}</h4>
                                        </Link>
                                    </div>)
                            }
                        })}
                    </div>
                </div>
            </>
        </>
    )
}

export default ProjectTeam;