import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
// import { fetch } from '../../store/csrf'
import { getProjects } from '../../store/projects'
import './MyProjects.css'

const MyProjects = () => {
    const dispatch = useDispatch();
    const [projectName, setprojectName] = useState([]);
    const loggedInUser = useSelector(state => {
        return state.session.user;
    })
    useEffect(async () => {
        const projects = await dispatch(getProjects(loggedInUser.id));
        setprojectName(projects)
    }, [])
    return (
        <div className='main'>
            {!projectName && <h3>Loading....</h3>}
            {projectName && projectName.map(project => {
                return (
                    <div className='project'>
                        <Link className='project-link' to={`/projects/${project.Project.id}/tasks`}>
                            <h3>{project.Project.name}</h3>
                        </Link>
                    </div>)
            })}
        </div>
    )
}
export default MyProjects;