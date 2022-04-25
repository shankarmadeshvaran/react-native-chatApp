import React from 'react';
import {ImageSourcePropType, StyleSheet} from 'react-native';

import {colors} from '../constants/Colors';
import {Normalize} from '../utils/Normalize';

import CustomView from './CustomView';
import CustomImage from './CustomImage';
import CustomText from './CustomText';

type MessageListProps = {
  imageUrl: ImageSourcePropType;
  heading: string;
  subHeading: string;
  date: string;
  status: boolean;
  avatarSize: number;
};

const MessageList: React.FC<MessageListProps> = ({
  imageUrl,
  heading,
  subHeading,
  date,
  status,
  avatarSize,
}) => {
  return (
    <CustomView style={styles.listContainer}>
      <CustomView style={styles.avatarContainer}>
        <CustomImage
          source={imageUrl}
          style={[styles.avatar, {width: avatarSize, height: avatarSize}]}
          resizeMode={'contain'}
        />
        {status && <CustomView style={styles.userActiveStatus} />}
      </CustomView>

      <CustomView style={styles.listTextContainer}>
        <CustomView style={styles.listTextHeaderWrapper}>
          <CustomText style={styles.listTextHeading} numberOfLines={1}>
            {heading}
          </CustomText>
          <CustomText style={styles.listDate}>{date}</CustomText>
        </CustomView>

        <CustomText style={styles.listTextSubHeading} numberOfLines={2}>
          {subHeading}
        </CustomText>
      </CustomView>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 12,
  },
  avatarContainer: {paddingHorizontal: 10, paddingBottom: 12},
  avatar: {borderRadius: 50},
  listTextContainer: {
    borderBottomColor: colors.subText,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 1,
    paddingBottom: 12,
  },
  listTextHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 6,
  },
  listTextHeading: {
    fontSize: Normalize(14),
    color: colors.headerTitle,
    flex: 1,
  },
  listTextSubHeading: {
    fontSize: Normalize(12),
    color: colors.subText,
  },
  listDate: {
    paddingRight: 10,
    color: colors.subText,
  },
  userActiveStatus: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 20,
    backgroundColor: colors.green,
    bottom: 10,
    right: 10,
  },
});

export default MessageList;
