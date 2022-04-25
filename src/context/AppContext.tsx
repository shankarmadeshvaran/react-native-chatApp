import React, {useEffect, useReducer} from 'react';
import {createContext} from 'react';

import AppReducer from './reducers/AppReducer';
import {Dispatch, Props, State} from './types';

/** Initial state */
const initialState: State = {
  userData: [],
  currentUserId: {_id: ''},
  messageData: [],
};

/** App Context */
export const AppContext = createContext<
  {state: State; dispatch: Dispatch} | undefined
>(undefined);

/** Providers */
export const Provider: React.FC<Props> = ({
  children,
  userData,
  user,
  messageData,
}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const value = {state, dispatch};

  useEffect(() => {
    dispatch({type: 'ADDUSERDATA', payload: userData});
    dispatch({type: 'ADDCURRENTUSERID', payload: user._id});
    dispatch({type: 'ADDMESSAGEDATA', payload: messageData});
  }, [userData, user]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
