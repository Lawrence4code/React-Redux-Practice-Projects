import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import requireAuth from './requireAuth';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  handleTextareaInputChange = event => {
    const inputText = event.target.value;
    this.setState(() => {
      return { comment: inputText };
    });
  };

  onFormSubmitHandler = event => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState(() => {
      return {
        comment: ''
      };
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmitHandler}>
          <h4>add a comment</h4>
          <textarea
            cols="30"
            rows="10"
            value={this.state.comment}
            onChange={this.handleTextareaInputChange}
          />
          <button> Submit Comment </button>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Load Comments
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveComment: comment => dispatch(actions.saveComment(comment)),
    fetchComments: () => dispatch(actions.fetchComments())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(requireAuth(CommentBox));
