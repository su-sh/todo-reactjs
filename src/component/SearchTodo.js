import React from 'react';

/**
 * Renders Search Bar.
 *
 *  @param {object} props
 *  @returns {*}.
 */
const SearchTodo = props => {
  const { changeSearchString } = props;

  return (
    <div className="search-todo">
      <input placeholder="Search" onChange={changeSearchString} />
    </div>
  );
};

export default SearchTodo;
