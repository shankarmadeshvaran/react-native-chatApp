import React from 'react';
import {ImageSourcePropType, StyleSheet} from 'react-native';

import CustomView from './CustomView';
import CustomText from './CustomText';
import CustomImage from './CustomImage';

import {colors} from '../constants/Colors';
import {Normalize} from '../utils/Normalize';

type ChatRoomListHeaderType = {
  imageUri: ImageSourcePropType;
  avatarSize: number;
  username: String;
  isActive: boolean;
};

const ChatRoomListHeader: React.FC<ChatRoomListHeaderType> = ({
  imageUri,
  avatarSize,
  username,
  isActive,
}) => {
  return (
    <>
      <CustomView style={styles.avatarContainer}>
        <CustomImage
          source={imageUri}
          style={[styles.avatar, {width: avatarSize, height: avatarSize}]}
          resizeMode={'contain'}
        />
        {isActive && <CustomView style={styles.userActiveStatus} />}
      </CustomView>
      <CustomView
        style={{paddingHorizontal: 10, paddingTop: 5, paddingBottom: 14}}>
        <CustomText style={styles.avatarHeading} numberOfLines={2}>
          {username}
        </CustomText>
      </CustomView>
    </>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {paddingHorizontal: 10, width: 80},
  avatar: {borderRadius: 50},
  userActiveStatus: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 20,
    backgroundColor: colors.green,
    bottom: 0,
    right: 16,
  },
  avatarHeading: {
    fontSize: Normalize(14),
    fontWeight: 'bold',
    flex: 1,
  },
});

export default ChatRoomListHeader;
