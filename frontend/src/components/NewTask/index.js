import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { fetch } from '../../store/csrf'
import { postTask } from '../../store/tasks.js'
import { getTasks, removeTask } from '../../store/tasks.js'
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
    let { projectId, taskId } = useParams();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postTask({ name, priority, dueDate, completed, projectId, userId: loggedInUser.id })) //pass it in here

    };

    const handleDelete = (taskId) => {
        dispatch(removeTask(taskId))
    }

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
        // await dispatch(removeTask(taskId))
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
        <>
            <div className='text'>
                <h3>Current tasks</h3>

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
            <span onClick={() => { toggleCheck() }} onChange={(e) => {
                                setCompleted(e.target.value)

                            }}>
                                <input type="checkbox" defaultChecked={completed} />
                                <span />
                            </span>
                        </label>
                        <button className='submit input four' type='submit' value='Submit'>Submit</button>
                    </form>
                </div>
                <div className='table'>

                    <div >
                        <table >
                            <tr>
                                <th>Task</th>
                                <th>Completed</th>
                                <th>Priority</th>
                                <th>Due Date</th>
                            </tr>

                            {!tasks && <h3>Loading...</h3>}

                            {tasks && Object.values(tasks).map((task, index) => {

                                return (
                                    <tr key={task.id}>
                                        <td> {task.name}</td>
                                        <td> {task.completed}</td>
                                        <td> {task.priority}</td>
                                        <td> {(task.dueDate)}</td>
                                        <br />
                                        <button type='delete' value='Delete' className='input' onClick={() => handleDelete(taskId)}> Delete</button>
                                    </tr>
                                )

                            })}
                        </table>
                    </div>
                </div>

            </div >
        </>

    )
}


export default NewTask;


