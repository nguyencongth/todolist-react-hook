import { React } from 'react';
function Task(props) {
    let {task, stt, deleteTask, editTask} = props;
    const Level = ()=>{
        if(task.level==='high'){
            return <span className='label label-danger'>{task.level}</span>
        }else if(task.level==='medium'){
            return <span className='label label-warning'>{task.level}</span>
        }else{
            return <span className='label label-default'>{task.level}</span>
        }
    }
    const handleEdit = () => {
        editTask(task, 'Update');
    }
    const handleDelete =() => {
        deleteTask(task);
    }
    return (

        <>
            <tr>
                <td className="text-center">{stt}</td>
                <td>
                    {task.name}
                </td>
                <td className="text-center">
                    {/* <span className="label label-danger">{task.level}</span> */}
                    <Level/>
                </td>
                <td>
                    <button type="button" className="btn btn-warning" onClick={handleEdit}>
                        Edit
                    </button>
                    <button type="button" className="btn btn-danger" onClick={handleDelete}>
                        Delete
                    </button>
                </td>
            </tr>
        </>
    )
}
export default Task;