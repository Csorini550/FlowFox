import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
// import { fetch } from '../../store/csrf'
import { getProjects } from '../../store/projects'
import { postProject } from '../../store/projects.js'
import './MyProjects.css';

const MyProjects = () => {
    const [name, setName] = useState("");
    const [projectName, setprojectName] = useState([]);
    const userId = useSelector((state) => state.session.user.id)
    const history = useHistory()
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(postProject({ name, userId }))
        history.push('/projects')

    };


    const loggedInUser = useSelector(state => {
        return state.session.user;
    })

    useEffect(async () => {
        const projects = await dispatch(getProjects(loggedInUser.id));
        setprojectName(projects)
    }, [])
    return (
        <>
            <div className='text'>
                <h3>My Projects</h3>
                <form className='form' onSubmit={handleSubmit}>
                    <label className="label">
                        Project Name
          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='input'
                            required
                        />
                    </label>
                    <button className='input button' type='submit' value='Submit' >
                        Create Project
            </button>

                </form>
                <div className='main-two'>
                    {!projectName && <h3>Loading....</h3>}
                    {projectName && projectName.map(project => {
                        return (
                            <div className='project' >
                                <Link className='project-link' to={`/projects/${project.Project.id}/tasks`}>
                                    <h4>{project.Project.name}</h4>
                                </Link>
                            </div>)
                    })}
                </div>
            </div>
        </>
    )
}
export default MyProjects;