// export default function({ dispatch }) {
//   return function(next) {
//     return function(action) {};
//   };
// }

const async = ({ dispatch }) => next => action => {
  // if payload exist, nothing to be done, pass it along to the next middleware (if exists).
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // if promise exists // wait for the promise to return and then return a action with same type and new payload
  // callback function is passed on to the .then call of the promise which return a function
  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};

export default async;
