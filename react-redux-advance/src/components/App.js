import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentList from './CommentList';
import CommentBox from './CommentBox';
import { changeAuth } from '../actions/index';

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}> SignOut</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}> SignIn </button>
      );
    }
  }

  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/post"> Post </Link>
        </li>
        <li> {this.renderButton()}</li>
      </ul>
    );
  };
  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/" component={CommentList} exact />
        <Route path="/post" component={CommentBox} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return { changeAuth: status => dispatch(changeAuth(status)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
