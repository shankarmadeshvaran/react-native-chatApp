import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RNChatApp from './src/RNChatApp';
import {user, Messages} from './src/dummyData';

const App = () => {
  return (
    <NavigationContainer>
      <RNChatApp userData={user} messageData={Messages} user={{_id: '1'}} />
    </NavigationContainer>
  );
};

export default App;
