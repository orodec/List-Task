import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ Task, complete, remove }) => {
  /**
   * returns a badge depdending on the level
   */
  function taskLevelBadge() {
    switch (Task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{Task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{Task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{Task.level}</span>
          </h6>
        );

      default:
        break;
    }
  }
/**
 * icon depending state completed
 * @returns 
 */
  function taskCompletedIcon(){
    if(Task.completed){
      return (<i onClick={()=>complete(Task)} className="bi-toggle-on task-action" style={{ color: "green" }}></i>)
    }else{
      return (<i onClick={()=>complete(Task)} className="bi-toggle-off task-action" style={{ color: "grey" }}></i>)
    }
  }

  return (
    <tr className="fw-normal" className={Task.completed ? 'task-completed':'task-pending'}>
      <th>
        <span className="ms-2">{Task.name}</span>
      </th>
      <td className="align-middle">
        <span>{Task.description}</span>
      </td>
      <td className="align-middle">
        {taskLevelBadge()}
      </td>
      <td className="align-middle">
        {taskCompletedIcon()}
        <i onClick={()=>remove(Task)} className="bi-trash task-action" style={{ color: "tomato" }}></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
  
};

export default TaskComponent;
