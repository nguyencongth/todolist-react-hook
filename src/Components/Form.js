import { React, useEffect, useState } from 'react';
function Form(props) {
    let {actionName}=props;
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [level, setLevel] = useState('');
    const handleClose = ()=> {
        // setName('');
        // setLevel('');
        props.close(false);
    }
    const handleSubmit = () =>{
        if(actionName !== 'Update'){
            if(name !=='' && level !== ''){
                props.newTask(id, name, level);
                setName('');
                setLevel('');
            }
        }
        else{
            props.updateTask(id, name, level);
            setName('');
            setLevel('');
        }
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleLevel = (e) => {
        setLevel(e.target.value);
    }
    useEffect(()=>{
        if(actionName==='Update'){
            let {task}=props;
            setName(task.name);
            setLevel(task.level);
            setId(task.id)
        }else{
            setId(Math.floor(Math.random()*1000))
        }
    },[])
    return (
        <div className="row">
            <div className="col-md-offset-7 col-md-5">
                <form action="" method="POST" className="form-inline">
                    <div className="form-group">
                        <label className="sr-only" htmlFor="">
                            label
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Task Name"
                            value={name}
                            onChange={handleName}
                        // ref="task_name"
                        />
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="">
                            label
                        </label>
                        <select
                            name="ds"
                            id="inputDs"
                            className="form-control"
                            required="required"
                            value={level}
                            onChange={handleLevel}
                        // ref="task_level"
                        >
                            Small
                            <option value={''}>--Level--</option>
                            <option value={"medium"}>Medium</option>
                            <option value={"high"}>High</option>
                            <option value={"small"}>Small</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                        {actionName ? actionName : 'Submit'}
                    </button>
                    <button type="button" className="btn btn-default" 
                        onClick={handleClose}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Form;