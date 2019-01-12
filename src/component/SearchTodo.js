import React from 'react';

const SearchTodo = props => {
  let { changeSearchString } = props;

  return (
    <div className="search-todo">
      <input placeholder="Search" onChange={changeSearchString} />
    </div>
  );
};

export default SearchTodo;
