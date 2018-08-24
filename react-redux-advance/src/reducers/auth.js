import { CHANGE_AUTH } from '../actions/constants';

const authReducer = (state = false, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
