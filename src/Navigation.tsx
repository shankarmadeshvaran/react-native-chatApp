import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {faCommentDots, faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {KeyboardAvoidingView, Platform} from 'react-native';

import ExtScreen from './screens/ExtScreen';
import {Messaging, ChatRoom, AddUser} from './screens';

import {colors} from './constants/Colors';

import {CustomPress, CustomIcon} from './components';
import {
  ChatRoomHeaderRight,
  ChatRoomHeaderTitle,
} from './components/navigation/ChatRoomHeader';
import {MessagingHeaderRight} from './components/navigation/MessagingHeader';
import {AddUserHeaderLeft} from './components/navigation/AddUserHeader';
import {User} from './types';
import {useCurrentUser} from './hooks/useCurrentUser';

export type AppStackType = {
  extScreen: undefined;
  messagingScreen: undefined;
  addUser: undefined;
  chatRoom: {chatUser: User} | undefined;
};

const Stack = createStackNavigator<AppStackType>();

const Navigation = () => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Stack.Navigator>
        <Stack.Screen
          name={'extScreen'}
          component={ExtScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <CustomPress
                style={{marginRight: 8}}
                onPress={() => navigation.navigate('messagingScreen')}>
                <CustomIcon
                  size={24}
                  color={colors.icon}
                  icon={faCommentDots}
                />
              </CustomPress>
            ),
          })}
        />
        <Stack.Screen
          name={'messagingScreen'}
          component={Messaging}
          options={({navigation}) => ({
            headerTitle: 'Messaging',
            headerTitleStyle: {
              color: colors.headerTitle,
            },
            headerBackTitleVisible: false,
            headerTintColor: colors.icon,
            headerRight: () => (
              <MessagingHeaderRight
                onPress={() => navigation.navigate('addUser')}
              />
            ),
          })}
        />
        <Stack.Screen
          name={'addUser'}
          component={AddUser}
          options={({navigation}) => ({
            presentation: 'modal',
            headerTitle: 'New message',
            headerLeft: () => (
              <AddUserHeaderLeft onPress={() => navigation.goBack()} />
            ),
          })}
        />

        <Stack.Screen
          name={'chatRoom'}
          component={ChatRoom}
          options={({navigation}) => ({
            headerBackTitleVisible: false,
            headerLeft: () => (
              <CustomPress
                onPress={() => navigation.pop(2)}
                style={{marginLeft: 4}}>
                <CustomIcon icon={faAngleLeft} size={28} color={colors.icon} />
              </CustomPress>
            ),
            headerRight: () => <ChatRoomHeaderRight />,
          })}
        />
      </Stack.Navigator>
    </KeyboardAvoidingView>
  );
};

export default Navigation;
