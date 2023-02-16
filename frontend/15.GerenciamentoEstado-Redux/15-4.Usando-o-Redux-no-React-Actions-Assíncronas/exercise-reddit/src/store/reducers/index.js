import {
  REQUEST_API,
  RECEIVED_POSTS_SUCCESS,
  RECEIVED_POSTS_FAILURE,
  TOGGLE_REDDIT,
} from '../actions';

const INITIAL_STATE = {
  subReddit: '',
  loading: false,
  posts: [],
  error: '',
}

const rootReducer = (state = INITIAL_STATE, action) => {
  const { type, subReddit, data, error } = action;


  switch(type) {
    case REQUEST_API: return {
      ...state,
      loading: true,
    }
    case TOGGLE_REDDIT: return {
      ...state,
      loading: true,
      subReddit,
    }
    case RECEIVED_POSTS_SUCCESS:
    const { data: { children } } = data;
    return {
      ...state,
      loading: false,
      posts: [...children]
    }
    case RECEIVED_POSTS_FAILURE: return {
      ...state,
      loading: false,
      error,
    }
    default: return state;
  }
}

export default rootReducer;
