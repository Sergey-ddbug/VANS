import React, { createContext, useContext, useReducer } from 'react';
import { LOGIN, LOGOUT, SET_USER, UNSET_USER, SET_IMG_ID, REMOVE_POST } from './actions';

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
    case LOGOUT:
      return {
        ...state,
        loading: true,
      };

    case SET_USER:
      return {
        ...state,
        user: action.user,
        loading: false,
      };

    case UNSET_USER:
      return {
        ...state,
        user: null,
        loading: false,
      };

    case SET_IMG_ID:
      return {
        ...state,
        user: {
          ...state.user,
          profileImgPublicId: action.profileImgPublicId
        }
      };

    case REMOVE_POST:
      return {
        ...state,
        meeting: {
          ...state.meeting,
          id: action.id
        }
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    loading: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
