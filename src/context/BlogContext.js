import { useReducer } from 'react';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'edit_blogpost':
      return state.map(post =>
        post.id === action.payload.id ? action.payload : post
      );
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case 'delete_blogpost':
      return state.filter(blogpost => blogpost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({
      type: 'add_blogpost',
      payload: {
        title,
        content
      }
    });
    callback();
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

const editBlogPost = dispatch => {
  return (id, title, content, callback) => {
    dispatch({
      type: 'edit_blogpost',
      payload: { id, title, content }
    });
    callback()
  };
};

export const { Provider, Context } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: 'First Post', content: 'initial test post', id: 1 }]
);
