import {Message, User} from '../types';

export type Action =
  | {type: 'ADDUSERDATA'; payload: User[]}
  | {type: 'ADDCURRENTUSERID'; payload: string}
  | {type: 'ADDMESSAGEDATA'; payload: Message[]};

export type Dispatch = (action: Action) => void;

export type Props = {
  userData: User[];
  user: {_id: string};
  messageData: Message[];
};
export interface State {
  userData: User[];
  currentUserId: {_id: string};
  messageData: Message[];
}
