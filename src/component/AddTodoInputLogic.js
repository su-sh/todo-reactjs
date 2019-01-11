import React from 'react';

const AddTodoInputLogic = Component => {
  class BusinessLogic extends React.Component {

    render() {
      return <Component {...this.props} firstName='Sushant' />;
    }
  
}

  return BusinessLogic;
};

export default AddTodoInputLogic;
