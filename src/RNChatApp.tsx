import React from 'react';

import {Provider} from './context/AppContext';
import Navigation from './Navigation';
import {Message, User} from './types';

type Props = {
  userData: User[];
  user: {_id: string};
  messageData: Message[];
};

const RNChatApp: React.FC<Props> = ({userData, user, messageData}) => {
  return (
    <Provider userData={userData} user={user} messageData={messageData}>
      <Navigation />
    </Provider>
  );
};

export default RNChatApp;
