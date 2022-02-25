import React, {useState, useEffect} from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import Taskform from "../pure/forms/taskForm";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  
  const defaultTask1 = new Task("Example1", "Default description1", true, LEVELS.NORMAL);
  const defaultTask2 = new Task("Example2", "Default description2", false, LEVELS.URGENT);
  const defaultTask3 = new Task("Example3", "Default description3", false, LEVELS.BLOCKING);

const [tasks, setTasks] = useState([defaultTask1,defaultTask2,defaultTask3]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  setLoading(false)
  return () => {
    
  };
}, [tasks]);

function completeTask(Task){
  console.log("Complete this Task:", Task)
  const index = tasks.indexOf(Task);
  const tempTasks = [...tasks];
  tempTasks[index].completed = !tempTasks[index].completed;
  setTasks(tempTasks)
}

function deletedTask(Task){
  const index = tasks.indexOf(Task);
  const tempTasks = [...tasks];
  tempTasks.splice(index, 1);
  setTasks(tempTasks)
}

function addTask(Task){
  const tempTasks = [...tasks];
  tempTasks.push(Task)
  setTasks(tempTasks)
}

const Table = () =>{
  return(
    <table>
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Priority</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {tasks.map((Task, index) => {
      return (
        <TaskComponent
          key={index}
          Task={Task}
          complete={completeTask}
          remove={deletedTask}
        ></TaskComponent>
      );
    })}
  </tbody>
</table>
  )


}

let taskTable;

if( tasks.length > 0 ){
  taskTable = <Table></Table>

}else{

  taskTable=(
  <div>
  <h3>No Tasks to show</h3>
  <h4>Please add one</h4>
  </div>
  )
}

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* card header (title) */}
          <div className="card-header p-3">
            <h5>Your Task:</h5>
          </div>
          {/* card body (content) */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar
            style={{ position: "relative", height: "400px" }}
          >
            {taskTable}
          </div>
         
        </div>
      </div>
       <Taskform add={addTask} length={tasks.length}></Taskform>
    </div>
  );
};

export default TaskListComponent;
