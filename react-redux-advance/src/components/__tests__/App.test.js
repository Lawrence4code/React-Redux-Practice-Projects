import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapper; // to ensure wrapper is declared in the component level

beforeEach(() => {
  wrapper = shallow(<App />); // just refering to wrapper // if declared within this scope
});

test('should shows a CommentBox', () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

test('should shows a CommentList', () => {
  expect(wrapper.find(CommentList).length).toEqual(1);
});

// -------------

// console.log(test);
// {
//   [Function: it]
//   concurrent: { [Function] only: [Function], skip: [Function] },
//   only: { [Function: fit] concurrent: [Function] },
//   skip: [Function: xit]
// }

// -------------

// // For reference testing with Enzyme
// test('should shows a comment box', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   expect(div.innerHTML).toContain('Comment Box');
//   ReactDOM.unmountComponentAtNode(div);
// });

// Tests are run in terminal which does not have an access to browser
// So jest fake the jsDOM i.e. const div = document.create('div'); then  ReactDOM.render(<App />, div); then expects something. expect ReactDOM.unmountComponentAtNode(div); will unmount the component created for test only. // its a left over object
//

// -------------
