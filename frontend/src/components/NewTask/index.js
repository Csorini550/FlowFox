import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { fetch } from '../../store/csrf'
import { postTask } from '../../store/tasks.js'
import { getTasks } from '../../store/tasks.js'
import './Tasks.css'
const NewTask = () => {

    const [name, setName] = useState("");
    const [priority, setPriority] = useState("");
    const [dueDate, setDueDate] = useState(new Date());
    const [completed, setCompleted] = useState(false)
    const [tasks, setTasks] = useState([])
    const dispatch = useDispatch();
    // const userId = useSelector((state) => state.session.user.id)
    let { projectId } = useParams();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postTask({ name, priority, dueDate, completed, projectId })) //pass it in here

    };
    const loggedInUser = useSelector(state => {
        return state.session.user;
    })

    useEffect(async () => {
        const storeTasks = await dispatch(getTasks(loggedInUser.id))
        setTasks(storeTasks);
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
                <h4>My tasks should show here</h4>
                {!tasks && <h3>Loading...</h3>}
                {tasks && tasks.map((task, index) => {
                    return (
                        <ul key={index}>
                            <li> {task.Task.name}</li>
                            <li> {task.Task.completed}</li>
                            <li> {task.Task.priority}</li>
                            <li> {task.Task.dueDate}</li>
                        </ul>

                    )

                })}
            </div>

        </div>
    )
}


export default NewTask;