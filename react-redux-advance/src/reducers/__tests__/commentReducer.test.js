import commentsReducer from '../commentsReducer';
import { SAVE_COMMENT } from '../../actions/constants';

it('should handle actions of type SAVE_COMMENT', () => {
  const action = { type: SAVE_COMMENT, payload: 'new comment' };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['new comment']);
});

it('should handle unknown action types', () => {
  const newState = commentsReducer([], { type: 'TEST' });
  expect(newState).toEqual([]);
});
