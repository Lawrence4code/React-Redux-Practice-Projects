import { SAVE_COMMENT } from './constants';
import { FETCH_COMMENTS } from './constants';
import axios from 'axios';

export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};
export const fetchComments = () => {
  const response = axios.get('https://jsonplaceholder.typicode.com/comments');
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
};
