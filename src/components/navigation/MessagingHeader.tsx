import React from 'react';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';

import CustomPress from '../CustomPress';
import CustomIcon from '../CustomIcon';
import {colors} from '../../constants/Colors';

type MessagingHeaderRightType = {
  onPress: () => void;
};

const MessagingHeaderRight: React.FC<MessagingHeaderRightType> = ({
  onPress,
}) => {
  return (
    <CustomPress style={{marginRight: 8}} onPress={onPress}>
      <CustomIcon size={24} color={colors.icon} icon={faPenToSquare} />
    </CustomPress>
  );
};

export {MessagingHeaderRight};
