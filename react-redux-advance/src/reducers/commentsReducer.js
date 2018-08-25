import { SAVE_COMMENT, FETCH_COMMENTS } from '../actions/constants';
const initialState = [];

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload, {}];
    case FETCH_COMMENTS:
      console.log(action.payload);
      const comments = action.payload.data.map(comment => comment.name);
      return [...state, ...comments];
    default:
      return state;
  }
};

export default commentsReducer;
