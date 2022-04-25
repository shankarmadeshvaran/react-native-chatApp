import React from 'react';
import moment from 'moment';

import {Message} from '../types';
import {colors} from '../constants/Colors';
import {Normalize} from '../utils/Normalize';

import useAppContext from '../hooks/useAppContext';

import CustomView from './CustomView';
import CustomText from './CustomText';

type Props = {
  message: Message;
};

const ChatList: React.FC<Props> = ({message}) => {
  const {
    state: {currentUserId},
  } = useAppContext();

  return (
    <CustomView
      style={{
        alignSelf:
          message?.user?._id === currentUserId?._id ? 'flex-end' : 'flex-start',
        maxWidth: '50%',
        backgroundColor:
          message?.user?._id === currentUserId?._id ? colors.blue : colors.icon,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
      }}>
      <CustomText style={{color: colors.background, fontSize: Normalize(14)}}>
        {message.text}
      </CustomText>
      <CustomText
        style={{
          textAlign:
            message?.user?._id === currentUserId?._id ? 'right' : 'left',
          fontSize: Normalize(10),
          marginTop: 4,
          color: colors.background,
        }}>
        {moment(message.createdAt).format('LT')}
      </CustomText>
    </CustomView>
  );
};

export default ChatList;
