import React, { Component } from 'react';
import CreateTodos from './createTodos';
import TodosList from './todosList';

const todos = [
  {
    task: 'Complete nodejs project',
    isCompleted: false
  },
  {
    task: 'Complete React project',
    isCompleted: false
  },
  {
    task: 'Get the F and F done',
    isCompleted: true
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }
  render() {
    return (
      <div>
        <h1>React Todo App</h1>
        <CreateTodos />
        <TodosList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
