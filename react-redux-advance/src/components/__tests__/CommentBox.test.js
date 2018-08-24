import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('should have textarea and a button', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(2);
});

describe('form input and submit events', () => {
  beforeEach(() => {
    wrapper
      .find('textarea')
      .simulate('change', { target: { value: 'new comment' } });
    wrapper.update();
  });

  it('should have a textarea where user are able to type', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment'); // prop('key') this is important
  });

  it('should empty the textarea once form is submitted', () => {
    // wrapper.update(); // not need in my case as my made this.setState sync using callback function
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
});
