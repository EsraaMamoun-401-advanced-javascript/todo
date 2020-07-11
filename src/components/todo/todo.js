import React from 'react';
import ToDoForm from './form';
import ToDoList from './list';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './todo.scss';
import useAjax from '../hooks/useAjax';
const todoAPI = 'https://lab32-401.herokuapp.com/todo';

function ToDo(props) {
    const { setRequest, response } = useAjax({
        url: todoAPI,
    });

    async function addTask(taskDetails) {
        await setRequest({
          url: todoAPI,
          method: 'POST',
          body: taskDetails,
          getMethod: todoAPI,
        });
    }

    async function modifyTask(indx, updatedTask) {
        await setRequest({
          url: `${todoAPI}/${response[indx]._id}`,
          method: 'PUT',
          body: updatedTask,
          getMethod: todoAPI,
        });
    }

    async function deleteTask(indx) {
        await setRequest({
          url: `${todoAPI}/${response[indx]._id}`,
          method: 'DELETE',
          getMethod: todoAPI,
        });
    }

    return (
        <Container>
            <ToDoForm addTask={addTask} />
            <ToDoList
                tasks={response}
                modifyTask={modifyTask}
                deleteTask={deleteTask}
            />
        </Container>
    );
}

export default ToDo;
