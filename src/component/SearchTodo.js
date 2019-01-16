import React from 'react';
import PropTypes from 'prop-types';

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

SearchTodo.propTypes = {
  changeSearchString: PropTypes.func
};

export default SearchTodo;
