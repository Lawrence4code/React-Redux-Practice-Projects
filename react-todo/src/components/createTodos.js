import React, { Component } from 'react';

class createTodos extends Component {
  render() {
    return (
      <form onSumbit={this.createTodoHandler}>
        <input type="text" placeholder="what do I do" />
        <button> Create todo </button>
      </form>
    );
  }
}

export default createTodos;
