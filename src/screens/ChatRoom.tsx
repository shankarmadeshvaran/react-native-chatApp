import {StyleSheet, SafeAreaView, SectionList} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import moment from 'moment';

import {
  ChatRoomInput,
  ChatRoomListHeader,
  ChatList,
  CustomView,
  CustomText,
} from '../components';
import {ChatRoomHeaderTitle} from '../components/navigation/ChatRoomHeader';

import {colors} from '../constants/Colors';
import {Normalize} from '../utils/Normalize';

import {AppStackType} from '../Navigation';
import {useCurrentUser} from '../hooks/useCurrentUser';
import {useGetMessages} from '../hooks/useGetMessages';

type Props = StackScreenProps<AppStackType, 'chatRoom'>;

const ChatRoom: React.FC<Props> = ({navigation, route}) => {
  const result = useCurrentUser({_id: route.params?.chatUser._id || ''});
  const messages = useGetMessages({
    _otherUserId: route.params?.chatUser._id || '',
  });

  console.log(messages);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <ChatRoomHeaderTitle
          username={result?.name as string}
          isActive={result?.isActive as boolean}
        />
      ),
    });
  }, [navigation, result]);

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={messages}
        keyExtractor={(_, index) => index.toString()}
        inverted
        ListFooterComponent={
          <ChatRoomListHeader
            imageUri={{
              uri: route.params?.chatUser.avatar,
            }}
            avatarSize={60}
            username={result?.name || ''}
            isActive={result?.isActive as boolean}
          />
        }
        renderSectionFooter={({section: {title}}) => (
          <CustomView style={{flexDirection: 'row', marginBottom: 10}}>
            <CustomView style={styles.divider} />
            <CustomText style={styles.dateTitle}>
              {moment(title).format('MMM DD')}
            </CustomText>
            <CustomView style={styles.divider} />
          </CustomView>
        )}
        renderItem={({item}) => (
          <CustomView style={{paddingHorizontal: 10}}>
            <ChatList message={item} />
          </CustomView>
        )}
      />
      <ChatRoomInput onChangeText={text => console.log(text)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  divider: {
    backgroundColor: colors.text,
    height: StyleSheet.hairlineWidth,
    flex: 1,
    alignSelf: 'center',
  },
  dateTitle: {
    fontSize: Normalize(10),
    paddingHorizontal: 20,
    fontWeight: 'bold',
    color: colors.subText,
    textTransform: 'uppercase',
  },
});

export default ChatRoom;
