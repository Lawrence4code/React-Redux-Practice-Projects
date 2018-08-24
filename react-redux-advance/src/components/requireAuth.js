import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      console.log('componentDidMount...');
      this.shouldRedirectBasedOnLoginState();
    }

    componentDidUpdate() {
      console.log('componentDidUpdate...');
      this.shouldRedirectBasedOnLoginState();
    }

    shouldRedirectBasedOnLoginState() {
      console.log('shouldRedirectBasedOnLoginState triggered');
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      auth: state.auth
    };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
