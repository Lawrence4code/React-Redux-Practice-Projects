import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPost = () => {
    return _.map(this.props.posts, post => {
      return <li key={post.id}> {post.title}</li>;
    });
  };
  render() {
    console.log(this.props.posts);
    return (
      <div className="container">
        <div className="text-xs-right">
          <Link className="btn btn-primary float-right" to="/new">
            Create Post
          </Link>
        </div>
        <h3> Posts Dashboard </h3>
        <ul className="list-group">{this.renderPost()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);
