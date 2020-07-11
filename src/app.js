import React from 'react';

import ToDo from './components/todo/todo.js';
// import ToDoList from './components/todo/list';
// import SettingsContext from './context/sort';
import Auth from './auth/auth.js';
import Login from './auth/login.js';
import Signup from './auth/signup.js';
import LoginContext from './auth/context.js';

// const EditLink = props => {
//   return (
//     <Auth capability="dance">
//       <span>Fake Update Link </span>
//     </Auth>
//   )
// }


// const ReadLink = props => {
//   return (
//     <Auth capability="read">
//       <span>Welcome to our website! </span>
//     </Auth>
//   )
// }

// const DeleteLink = props => {
//   return (
//     <Auth capability="delete">
//       <span>Fake Delete Link </span>
//     </Auth>
//   )
// }

function App() {
  return (
    <LoginContext>
      <Login />
      <Signup />
      <Auth capability="read">
        {/* <SettingsContext> */}
          <ToDo>
            {/* <ToDoList /> */}
          </ToDo>
        {/* </SettingsContext> */}
      </Auth>
      {/* <EditLink /> */}
      {/* <DeleteLink /> */}
      {/* <ReadLink /> */}
    </LoginContext>
  );
}

export default App;