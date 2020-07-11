import React from 'react';

import { Form, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ToDoItem(props) {

  // let theData = props.data;
  // console.log('theData===', theData); // Remember: Noooooooooooooooooooooot Arraaaaaaaay (try getting the items array to sort the data)

  // let array = theData.sort(function (a, b) {
  //   return a.difficulty - b.difficulty;
  // });
  // console.log('array===', array);

  return (
    <div className="itemD">
      <div className="threeE">
     <span className="status">{props.data.complete === true ? <Badge variant="danger">Complete</Badge> : <Badge variant="success">Pending</Badge>}</span>

     <span className="assignee">{props.data.assignee}</span>
    
     <span
        className="deleteB"
        onClick={() => {
          props.deleteTask(props.indx);
        }}
      >
        x
      </span>
      </div>

      <p className="text">{props.data.text}</p>

      <span className="switch">
        <Form.Check
          // value={false}
          type='switch'
          onChange={() => {
            let newTask = { ...props.data };
            newTask.complete = !newTask.complete;
            props.modifyTask(props.indx, newTask);
          }}
          id={'status-switch-' + props.indx}
          // label={props.data.complete ? 'Complete' : 'Pending'}
          label="Change Status"
        />
        </span>

      <span className="difficulty">Difficulty: {props.data.difficulty}</span>



      {/* <Form.Group controlId={'todo-status-' + props.indx}> */}
        {/* <Form.Label><span>Change Status:  </span>{props.data.complete}</Form.Label> */}
        
      {/* </Form.Group> */}

    </div>
  );
}

export default ToDoItem;