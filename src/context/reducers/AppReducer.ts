import {Action, State} from '../types';

function AppReducer(state: State, action: Action) {
  switch (action.type) {
    case 'ADDUSERDATA':
      return {
        ...state,
        userData: action.payload,
      };
    case 'ADDMESSAGEDATA':
      return {
        ...state,
        messageData: action.payload,
      };
    case 'ADDCURRENTUSERID':
      const finalUserData = state.userData?.filter(
        item => item?._id !== action.payload,
      );
      return {
        ...state,
        userData: finalUserData,
        currentUserId: {_id: action.payload},
      };
    default:
      return state;
  }
}

export default AppReducer;
