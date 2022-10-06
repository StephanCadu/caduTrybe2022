import requestAPI from "../../services/requestAPI";

export const REQUEST_API = 'REQUEST_API';
export const TOGGLE_REDDIT = 'TOGGLE_REDDIT';
// const REFRESH_POSTS = 'REFRESH_POSTS';
export const RECEIVED_POSTS_SUCCESS = 'RECEIVED_POSTS_SUCCESS';
export const RECEIVED_POSTS_FAILURE = 'RECEIVED_POSTS_FAILURE';

const requestApiAct = () => ({
  type: REQUEST_API,
});

const toggleRedditAct = (subReddit) => ({
  type: TOGGLE_REDDIT,
  subReddit,
});

const postsSuccessAct = (data) => ({
  type: RECEIVED_POSTS_SUCCESS,
  data,
});

const postsFailureAct = (error) => ({
  type: RECEIVED_POSTS_FAILURE,
  error,
});

export const fetchAPI = (subReddit) => {
  return async (dispatch) => {
    dispatch(toggleRedditAct(subReddit));
    dispatch(requestApiAct());
    await requestAPI(subReddit)
      .then((data) => dispatch(postsSuccessAct(data)))
      .catch((error) => dispatch(postsFailureAct(error)));
  }
}

