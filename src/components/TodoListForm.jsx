import React from 'react'
import axios from 'axios';
import { useState } from 'react';


function TodoListForm(props) {
  const [task, setTask] = useState({})
  const [importance, setImportance] = useState({})
  const [taskName, setTaskName] = useState({})
  const email = props.email
  const BACK_URI = process.env.REACT_APP_API_SERVER_URL;

  const handleTaskName = (e) => {
    const tn = e.target.value
    setTaskName(tn)
    console.log(task)
  }

  const handleTask = (e) => {
    const t = e.target.value
    setTask(t)
    console.log(task)
  }

  const handleImportance = (e) => {
    const i = e.target.value
    setImportance(i)
    console.log(importance)
  }

  function postUserTasks() {
    const data = {taskName, task, importance}
    console.log(data)
    axios.put(`${BACK_URI}/api/user/${email}/createtask`, data)
    .then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  }
  
  
  return(
    <div className='todo__form'>
      <div className='form__title'>
        <h1>Add an item to your todo list!</h1>
      </div>
      <div className='form'>
         <input className='todo__input' onChange={(e) => handleTaskName(e)} type='text' id='todo-input' placeholder='New item'></input>
          <input className='todo__input' onChange={(e) => handleTask(e)} type='text' id='todo-input' placeholder='New item'></input>
          <label className='todo__select-label'>Level Of Importance</label>
            <select className='todo__select'  onChange={(e) => handleImportance(e)} type='text' id='todo-select' placeholder='Level of importance'>
              <option value='Low' selected>Low</option>
              <option value='Medium' >Medium</option>
              <option value='High' >High</option>
              <option value='Urgent' >Urgent</option>
            </select>
            <button onClick={postUserTasks} className='todo__submit' id='todo-submit' >Add Item</button>
      </div>
    </div>
  )
}

export default TodoListForm;