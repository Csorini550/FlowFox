import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";
import { postProject } from '../../store/projects.js'

const NewProject = () => {

    const [name, setName] = useState("");
    const history = useHistory()
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user.id)
    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(postProject({ name, userId }))
        history.push('/projects')

    };
    return (
        <div className='main'>
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
        </div>
    )
}

export default NewProject;