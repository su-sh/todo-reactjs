import React from 'react';
import ListItem from './ListItem';

const Home = props => {
  let todoList = props.todoList;
  console.log('​todoList', todoList);

  const todoListEl = todoList.length ? (
    todoList.map(todoItem => {
      return (
        <ListItem
          key={todoItem.id}
          todoItem={todoItem}
          toggleTodoItemCompleted={props.toggleTodoItemCompleted}
          deleteTodoItem={props.deleteTodoItem}
        />
      );
    })
  ) : (
    <div>No todo item</div>
  );

  return (
    <div>
      Home
      {todoListEl}
    </div>
  );
};

export default Home;
