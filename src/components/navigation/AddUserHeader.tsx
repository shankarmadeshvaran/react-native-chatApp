import React from 'react';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

import CustomPress from '../CustomPress';
import CustomIcon from '../CustomIcon';
import {colors} from '../../constants/Colors';

type AddUserHeaderLeftType = {
  onPress: () => void;
};

const AddUserHeaderLeft: React.FC<AddUserHeaderLeftType> = ({onPress}) => {
  return (
    <CustomPress style={{marginLeft: 8}} onPress={onPress}>
      <CustomIcon size={24} color={colors.icon} icon={faXmark} />
    </CustomPress>
  );
};

export {AddUserHeaderLeft};
