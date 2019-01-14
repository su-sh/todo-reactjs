import React from 'react';

const SearchTodo = props => {
  const { changeSearchString } = props;

  return (
    <div className="search-todo">
      <input placeholder="Search" onChange={changeSearchString} />
    </div>
  );
};

export default SearchTodo;
