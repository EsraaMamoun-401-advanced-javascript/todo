// import React from 'react';

// import useAjax from '../components/hooks/useAjax';

// const todoAPI = 'https://lab32-401.herokuapp.com/todo';

// export const SettingsContext = React.createContext();

// function SettingsProvider(props) {

//     const { setRequest, response } = useAjax({
//         url: todoAPI,
//     });

//     async function addTask(taskDetails) {
//         await setRequest({
//           url: todoAPI,
//           method: 'POST',
//           body: taskDetails,
//           getMethod: todoAPI,
//         });
//     }

//     async function modifyTask(indx, updatedTask) {
//         await setRequest({
//           url: `${todoAPI}/${response[indx]._id}`,
//           method: 'PUT',
//           body: updatedTask,
//           getMethod: todoAPI,
//         });
//     }

//     async function deleteTask(indx) {
//         await setRequest({
//           url: `${todoAPI}/${response[indx]._id}`,
//           method: 'DELETE',
//           getMethod: todoAPI,
//         });
//     }

//     let data ={
//         addTask,
//         modifyTask,
//         deleteTask,
//     }

//     return (
//         <SettingsContext.Provider value={data}>
//           {props.children}
//         </SettingsContext.Provider>
//       );
// }

// export default SettingsProvider;