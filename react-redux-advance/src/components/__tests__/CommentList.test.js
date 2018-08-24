import React from 'react';
import { mount } from 'enzyme';
import CommentList from '../CommentList';
import Root from '../../Root';

let wrapper;

beforeEach(() => {
  const initialState = { comments: ['comment1', 'comment2'] };
  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('should create one Li per comment', () => {
  expect(wrapper.find('li').length).toEqual(2);
});

it('should text of reach li elements', () => {
  expect(wrapper.render().text()).toContain('comment1');
  expect(wrapper.render().text()).toContain('comment2');
});
