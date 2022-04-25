import {StyleSheet} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {colors} from '../constants/Colors';
import {CustomView, MessageList, CustomPress} from '../components';

import {AppStackType} from '../Navigation';

type Props = StackScreenProps<AppStackType, 'messagingScreen'>;

const Messaging = ({navigation}: Props) => {
  return (
    <CustomView style={styles.container}>
      <CustomPress onPress={() => navigation.navigate('chatRoom')}>
        <MessageList
          heading={'Prasath Ravichandran'}
          subHeading={'You send an update'}
          date={'Tue'}
          status
          avatarSize={50}
          imageUrl={{
            uri: 'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg',
          }}
        />
      </CustomPress>
      <MessageList
        heading={'Ankur Mukherjee'}
        subHeading={
          'Hi my name is Ankur, I am director, Technical programs at Great wall of china!'
        }
        date={'Jan 12'}
        status={false}
        avatarSize={50}
        imageUrl={{
          uri: 'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg',
        }}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 10,
  },
});

export default Messaging;
