import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { fetch } from '../../store/csrf'
import { postTask } from '../../store/tasks.js'
import { getTasks } from '../../store/tasks.js'
// import { getProjects } from '../../store/projects'
import './Tasks.css'


const NewTask = () => {
    const [projectName, setprojectName] = useState([]);
    const [name, setName] = useState("");
    const [priority, setPriority] = useState('High');
    const [dueDate, setDueDate] = useState(new Date());
    const [completed, setCompleted] = useState(false)
    // const [tasks, setTasks] = useState([])
    const dispatch = useDispatch();
    // const userId = useSelector((state) => state.session.user.id)
    let { projectId } = useParams();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postTask({ name, priority, dueDate, completed, projectId, userId: loggedInUser.id })) //pass it in here

    };

    // useEffect(async () => {
    //     const projects = await dispatch(getProjects(loggedInUser.id));
    //     setprojectName(projects)
    // }, [])

    const loggedInUser = useSelector(state => {
        return state.session.user;
    })

    const tasks = useSelector(state => {
        return state.tasks
    })

    useEffect(async () => {
        const storeTasks = await dispatch(getTasks(projectId, loggedInUser.id))
        // setTasks(storeTasks);
    }, [])

    // const userTasks = () => {
    //     const tasks = useSelector(state => [...state.session.name])
    //     return tasks
    // }

    const toggleCheck = () => {

        setCompleted(!completed);
    };

    const handleChange = (e) => {
        setPriority(e.target.value);
        // setValue("dueDate", e.target.value);
    }
    return (
        <div className='main'>
            <form onSubmit={handleSubmit} className='form'>
                <label className='annoyed'>
                    New Task
          <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className='input one'
                    />
                </label>
                <label className='annoyed'>
                    Priority

                <select className='input two' value={priority} onChange={handleChange} required>
                        <option default value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>

                    </select>
                </label>
                <label className='annoyed'>
                    Due Date
          <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        required
                        className='input three'
                    />
                </label>
                <label className='annoyed'>
                    Completed
            <span onClick={() => { toggleCheck() }}>
                        <input type="checkbox" defaultChecked={completed} />
                        <span />
                    </span>
                </label>
                <button className='input four' type='submit' value='Submit'>Submit</button>
            </form>
            <div className='tasks'>
                <h4>Current tasks</h4>
                {!tasks && <h3>Loading...</h3>}

                {tasks && Object.values(tasks).map((task, index) => {
                    console.log(task)
                    return (
                        <div key={task.id}>
                            <div> {task.name}</div>
                            <div> {task.completed}</div>
                            <div> {task.priority}</div>
                            <div> {task.dueDate}</div>
                            <br />
                        </div>
                    )

                })}

            </div>

        </div>
    )
}


export default NewTask;