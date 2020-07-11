import React from 'react';
import ToDoItem from './items';
import Pages from '../../context/pages';
// import {SettingsContext} from '../../context/sort';

function ToDoList(props) {
  let items = [];

  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(2);

  if (props.tasks)
    for (let i = 0; i < props.tasks.length; i++) {
      // console.log('#############');

      items.push(
        <ToDoItem
          key={i}
          indx={i}
          data={props.tasks[i]}
          deleteTask={props.deleteTask}
          modifyTask={props.modifyTask}
        />,
      );

      // console.log('forItem', items);
      // console.log('props.tasks===', props.tasks);

    }

    let idxLastPost = currentPage * postsPerPage;
    let idxFirstPost = idxLastPost - postsPerPage;
    let currentPost = items.slice(idxFirstPost, idxLastPost);
    // console.log('currentPost===', currentPost);
    // console.log('items====', items);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="listD">
      <Pages postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate} />
      {currentPost}
    </div>
  );
}

export default ToDoList;