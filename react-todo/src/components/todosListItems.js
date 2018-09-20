import React, { Component } from 'react';

class TodosListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }
  onEditHandler = () => {
    this.setState({ isEditing: true });
  };

  renderActionSection = () => {
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.onEditHandler}> Save </button>
          <button onClick={this.onCancelHandler}> Cancel </button>
        </td>
      );
    }
    return (
      <td>
        <button onClick={this.onEditHandler}> Edit </button>
        <button> Delete </button>
      </td>
    );
  };
  onCancelHandler = () => {
    this.setState({ isEditing: false });
  };
  render() {
    return (
      <tr>
        <td> {this.props.task}</td>
        {this.renderActionSection()}
      </tr>
    );
  }
}

export default TodosListItems;
