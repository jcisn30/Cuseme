export const SET_COMMENTS = 'SET_COMMENTS';

export function setComments(comments) {
  return {
    type: SET_COMMENTS,
    comments,
  };
}

export function getComments(comments) {
  return dispatch =>
    Promise.all(comments.map(comment =>
      fetch(comment)
        .then(res => res.json())
    ))
    .then(comments =>
      dispatch(setComments(comments))
    );
}