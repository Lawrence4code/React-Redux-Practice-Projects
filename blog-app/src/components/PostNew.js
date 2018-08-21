import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
class PostNew extends Component {
  renderField = field => {
    return (
      <div className="form-group">
        <label> {field.label} </label>
        <input {...field.input} type="text" className="form-control" />
        {field.meta.errors}
      </div>
    );
  };

  onSubmit(values) {
    console.log(values);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title" component={this.renderField} label="title" />
        <Field
          name="categories"
          component={this.renderField}
          label="categories"
        />
        <Field
          name="content"
          component={this.renderField}
          label="Post Content"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content';
  }
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(PostNew);
