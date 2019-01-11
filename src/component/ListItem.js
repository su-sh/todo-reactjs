import React, { Component } from 'react';
import '../App.css';

// props = todoitem
// const ListItem = props => {
//   let todoItem = props.todoItem;
//   // props.data
//   console.log('from listItem', todoItem);
//   let completedCss = '';
//   todoItem.completed
//     ? (completedCss = 'todoItem todoItem-completed')
//     : (completedCss = 'todoItem');

//   return (
//     <div className='list-item clearfix'>
//       <input
//         className='left'
//         type='checkbox'
//         onChange={() => {}}
//         checked={todoItem.completed}
//         onClick={() => {
//           props.toggleTodoItemCompleted(todoItem.id);
//         }}
//       />

//       <div className={completedCss + ' left'}>{todoItem.content}</div>

//       <div className={'right clearfix'}>
//         <button
//           onClick={() => {
//             console.log('edited');
//           }}
//         >
//           Edit
//         </button>

//         <button
//           className='delete-button'
//           onClick={() => props.deleteTodoItem(todoItem.id)}
//         >
//           Delete
//         </button>
//       </div>

//       <br />
//     </div>
//   );
// };

// export default ListItem;

// import React, { Component } from 'react';

class ListItem extends Component {
  constructor() {
    super();
    this.state = {
      edit: false,
      editedTodoContent: ''
    };
  }

  render() {
    // props.data
    let todoItem = this.props.todoItem;

    let completedCss = '';
    todoItem.completed
      ? (completedCss = 'todoItem todoItem-completed')
      : (completedCss = 'todoItem');

    let displayElement;
    // condition for edit
    if (!this.state.edit) {
      displayElement = (
        <div className='list-item clearfix'>
          <input
            className='left'
            type='checkbox'
            onChange={() => {}}
            checked={todoItem.completed}
            onClick={() => {
              this.props.toggleTodoItemCompleted(todoItem.id);
            }}
          />

          <div className={completedCss + ' left'}>{todoItem.content}</div>

          <div className={'right clearfix'}>
            <button
              onClick={() => {
                this.setState({
                  edit: true
                });
              }}
            >
              <i className='material-icons'>edit</i>
            </button>

            <button
              className='delete-button'
              onClick={() => this.props.deleteTodoItem(todoItem.id)}
            >
              <i className='material-icons'>delete</i>
            </button>
          </div>

          <br />
        </div>
      );
    } else {
      displayElement = (
        <div>
          <div className='list-item clearfix'>
            <div className='left edit-list-item'>
              <input
                type='text'
                // placeholder={todoItem.content}
                defaultValue={todoItem.content}
                onChange={e => this.updateStateContent(e)}
              />
            </div>

            {/* save or cancel */}
            <div className='right clearfix'>
              <div className='left'>
                <button
                  onClick={() => {
                    this.handleSave(todoItem);
                  }}
                >
                  <i className='material-icons'>save</i>
                </button>
              </div>

              <div className='right'>
                <button
                  onClick={() => {
                    this.setState({
                      edit: false
                    });
                  }}
                >
                  <i className='material-icons'>cancel</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <div>{displayElement}</div>;
  }

  updateStateContent = e => {
    let editedTodoContent = e.target.value;
    this.setState({
      editedTodoContent
    });
  };

  handleSave = todoItem => {
    if (this.state.editedTodoContent !== '') {
      this.props.editTodoItem(todoItem.id, this.state.editedTodoContent);
      this.setState({
        edit: false
      });
    } else {
      alert('Input cannot be empty');
    }
  };
}

export default ListItem;
