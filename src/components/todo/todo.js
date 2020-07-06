import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import './todo.scss';

function ToDo() {
  const [list, setList] = useState([]);

  const _addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list2 = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(list2);
    }
  };

  const componentDidMount = () => {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];

    setList(list);
  };

  useEffect(componentDidMount, []);

  return (
    <>
      <header>
        <Navbar><h1>Home</h1></Navbar>

        <Container fluid>
          <Row>
            <Col><h2>To Do List Manager ({list.filter(item => !item.complete).length}) 
        </h2></Col>
          </Row>
        </Container>

      </header>

      <section className="todo">

        <div>
          <TodoForm pHandleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            pHandleComplete={_toggleComplete}
          />
        </div>
      </section>
    </>
  );
}


export default ToDo;