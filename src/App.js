import { React, useState } from 'react';
import Control from './Components/Control';
import Form from './Components/Form';
import ListTask from './Components/ListTask';
import Title from './Components/Title';

function App() {
  const listTasks = [
    { id: "1", name: "JavaScript", level: "high" },
    { id: "2", name: "PHP", level: "medium" },
    { id: "3", name: "ReactJS", level: "small" }
  ]
  const [listTask, setListTack] = useState(listTasks);
  const [open, setOpen] = useState(false);
  const [actionName, setActionName] = useState('');
  const [task, setTask] = useState('');

  const handleOpen = (open) => {
    setOpen(open);
  }

  const handleClose = (close) => {
    setOpen(close);
  }

  const handleDelete = (task) => {
    setListTack(listTask.filter(lt =>
      lt.name !== task.name
    ));
  }

  const handleEdit = (task, actionName) => {
    setOpen(true);
    setTask(task);
    setActionName(actionName);
  }
  const handleNewTask = (id, name, level) => {
    setListTack((prev) => {
      const newTask = [...prev, { id, name, level }]
      return newTask;
    })
    setOpen(false)
  }
  const handleUpdate = (id, name, level, actionName) => {
    const newTask = { name, level, id }
    const newListTask = [...listTask]
    for (let index = 0; index < newListTask.length; index++) {
      if (newListTask[index].id === newTask.id) {
        newListTask[index] = newTask;
      }
    }
    setListTack(newListTask);
    setActionName(actionName);
    setOpen(false);
  }

  const handleSearchData = (data) => {
    const listSearChData = [...listTask];
    const newListSearchDate = listSearChData.filter(item => item.name.toLocaleLowerCase().includes(data.toLocaleLowerCase()))
    setListTack(newListSearchDate);
  }

  const handleSort = (sortField, sortBy) => {
    const listTaskSort = [...listTask];
    if (sortField === "Name") {
      if (sortBy === "ASC") {
        listTaskSort.sort((a, b) => (a.name > b.name) ? 1 : -1)
        setListTack(listTaskSort);
      } else {
        listTaskSort.sort((a, b) => (a.name > b.name) ? -1 : (a.name > b.name) ? 1 : 0)
        setListTack(listTaskSort);
      }
    } else if (sortField === "Level") {
      if (sortBy === "ASC") {
        listTaskSort.sort((a, b) => (a.level > b.level) ? 1 : -1)
        setListTack(listTaskSort);
      } else {
        listTaskSort.sort((a, b) => (a.level > b.level) ? -1 : (a.level > b.level) ? 1 : 0)
        setListTack(listTaskSort);
      }
    }
  }


  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control
        open={handleOpen}
        searchData={handleSearchData}
        sort={handleSort}
      />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      {open ?
        <Form task={task} newTask={handleNewTask} actionName={actionName} close={handleClose} updateTask={handleUpdate} />
        : ''
      }

      {/* FORM : END */}
      {/* LIST : START */}
      <ListTask
        listTask={listTask}
        deleteTask={handleDelete}
        editTask={handleEdit} />
      {/* LIST: END */}
    </div>
  )
}

export default App;
