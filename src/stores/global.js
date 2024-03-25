import { configureStore } from '@reduxjs/toolkit';

export const showLoader = () => ({ type: 'SHOW' });
export const hideLoader = () => ({ type: 'HIDE' });

const loaderState = { isLoading: false };

function counterReducer(state = loaderState, action) {
  switch (action.type) {
    case 'SHOW':
      return { isLoading: true };
    case 'HIDE':
      return { isLoading: false };
    default:
      return state;
  }
}


export const store = configureStore({
    reducer: counterReducer, // Import your reducer
});
