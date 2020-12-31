import "./Home.css";

import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai"
import { useSelector } from 'react-redux';
// import { useState, useEffect } from 'react';

// import { getProjects } from '../../store/projects'







const Home = () => {
    // const dispatch = useDispatch();
    // const [showForm, setShowForm] = useState(false);
    // const [projectName, setprojectName] = useState([]);

    // const updateProject = (e) => setProject(e.target.value);

    // const hideForm = () => setShowForm(false)


    const loggedInUser = useSelector(state => {
        return state.session.user;
    })

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    // };

    // const handleCancelClick = (e) => {
    //     e.preventDefault();
    //     hideForm();
    // };
    // getProjects();
    // const project = useSelector(state => {
    //     return state.projects
    // })
    // useEffect(async () => {
    //     const projects = await dispatch(getProjects(loggedInUser.id));
    //     setprojectName(projects)
    // }, [])

    return (
        <div>
            {loggedInUser && <h3> Welcome {loggedInUser.username} start building that foxy flow</h3>}
            <div id="home-page-container">
                <div className='project'>
                    <div>
                        <div className='create-project'>
                            <Link to='/project/new' className='new-project'>

                                <AiIcons.AiOutlinePlusSquare className='new-project-button' />
                            </Link>
                        </div>
                        <h4>New Project</h4>

                    </div>
                </div>
            </div>
        </div>
    )
};


export default Home;