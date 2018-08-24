import { SAVE_COMMENT } from '../constants';
import { saveComment } from '../index';

describe('saveComments', () => {
  it('should have the correct action type', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });
  it('should have the correct payload', () => {
    const action = saveComment('new comment');
    expect(action.payload).toEqual('new comment');
  });
});
describe('fetchComments', () => {
  it('should have the correct actoion type', () => {});
  it('should have the correct payload', () => {});
});
