import React from 'react';
import { mount } from 'enzyme';
import Root from '../Root';
import App from '../components/App';
import moxios from 'moxios';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('should fetch a list of comments and display name', done => {
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );

  wrapper.find('.fetch-comments').simulate('click');

  //setTimeOut
  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find('li').length).toEqual(2);
    done();
    wrapper.unmount();
  }, 100);
});
