import React from 'react';

function TodoList(props) {
  return (
    <ul>
      {props.list.map(item => (
        <li
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <span onClick={() => props.pHandleComplete(item._id)}>
            {item.text} / {item.assignee}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
