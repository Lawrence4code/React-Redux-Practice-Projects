import React, { Component } from 'react';
import TodosListHeader from './todosListHeader';
import TodosListItems from './todosListItems';
class TodosList extends Component {
  renderItems = () => {
    return this.props.todos.map((todo, index) => {
      return <TodosListItems {...todo} key={index} />;
    });
  };
  render() {
    console.log(this.props);
    return (
      <table>
        <TodosListHeader />
        <tbody>{this.renderItems()}</tbody>
      </table>
    );
  }
}

export default TodosList;
