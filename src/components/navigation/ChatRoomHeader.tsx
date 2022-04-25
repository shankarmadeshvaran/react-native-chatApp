import React from 'react';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';

import CustomView from '../CustomView';
import CustomText from '../CustomText';

import {Normalize} from '../../utils/Normalize';
import {colors} from '../../constants/Colors';
import CustomPress from '../CustomPress';
import CustomIcon from '../CustomIcon';

type ChatRoomHeaderTitleProps = {
  username: string;
  isActive: boolean;
};

const ChatRoomHeaderTitle: React.FC<ChatRoomHeaderTitleProps> = ({
  username,
  isActive,
}) => {
  return (
    <CustomView style={{marginLeft: 10, alignItems: 'center'}}>
      <CustomText
        style={{fontSize: Normalize(14), fontWeight: 'bold'}}
        numberOfLines={1}>
        {username}
      </CustomText>
      <CustomView style={{flexDirection: 'row', alignItems: 'center'}}>
        {isActive && (
          <CustomView
            style={{
              width: 10,
              height: 10,
              backgroundColor: colors.green,
              borderRadius: 50,
              marginRight: 4,
            }}
          />
        )}
        <CustomText
          style={{
            color: colors.subText,
            fontSize: Normalize(10),
          }}>
          {isActive ? 'Active Now' : 'Not Active'}
        </CustomText>
      </CustomView>
    </CustomView>
  );
};

const ChatRoomHeaderRight = () => {
  return (
    <CustomPress style={{marginRight: 10}}>
      <CustomIcon icon={faEllipsis} size={24} color={colors.icon} />
    </CustomPress>
  );
};

export {ChatRoomHeaderTitle, ChatRoomHeaderRight};
