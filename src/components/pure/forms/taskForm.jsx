import React, { useRef } from 'react';
import ProtoTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const Taskform = ({add, length}) => {

const nameRef = useRef('');
const descriptionRef = useRef('');
const levelRef = useRef(LEVELS.NORMAL);

function addTask(e){
    e.preventDefault();
    const newTask = new Task(
        nameRef.current.value,
        descriptionRef.current.value,
        false,
        levelRef.current.value
    );
    add(newTask)
}

const normalStyle ={
    color:'blue',
    fontWeight: 'bold'
}
const urgenStyle ={
    color:'#FFC109',
    fontWeight: 'bold'
}
const blokingStyle ={
    color:'tomato',
    fontWeight: 'bold'
}

    return (
       <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
       <div className='form-outline flex-fill'>
         <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task name'></input>
         <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task description'></input>
         <label htmlFor='selectLevel' className='sr-only'>Priority</label>
         <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selecLevel'>
            <option style={normalStyle} value={LEVELS.NORMAL}>
                Normal
            </option>
            <option style={urgenStyle} value={LEVELS.URGENT}>
                Urgent
            </option>
            <option style={blokingStyle} value={LEVELS.BLOCKING}>
                Blocking
            </option>

         </select>

       </div>
           <button type='submit'className='btn btn-success btn-lg ms-2'>{length === 0 ? 'Create Task':'Add Task'}</button>
       </form>
    );
}

Taskform.ProtoTypes={
    add: ProtoTypes.func.isRequired,
    length: ProtoTypes.number.isRequired
}
export default Taskform;
