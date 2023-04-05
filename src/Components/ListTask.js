import { React } from 'react';
import Task from './Task';
function ListTask(props) {
    let {listTask, editTask, deleteTask} = props;
    const handleEdit = (task, actionName) => {
        editTask(task, actionName);
    }
    const handleDelete = (task) => {
        deleteTask(task);
    }
    let elementTask = listTask.map((task,index)=>{
        return(
            <Task key={index} task={task} stt={index+1} editTask={handleEdit} deleteTask={handleDelete}/>
        )
    })
    
    return (
        <div className="panel panel-success">
            <div className="panel-heading">List Task</div>
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th style={{ width: "10%" }} className="text-center">
                            #
                        </th>
                        <th>Task</th>
                        <th style={{ width: "20%" }} className="text-center">
                            Level
                        </th>
                        <th style={{ width: "20%" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <Task/>
                    <Task/>
                    <Task/> */}
                    {elementTask}
                    
                </tbody>
            </table>
        </div>
    )
}
export default ListTask;