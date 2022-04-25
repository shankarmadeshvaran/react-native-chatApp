import React from 'react';
import {FontAwesomeIcon, Props} from '@fortawesome/react-native-fontawesome';

const CustomIcon: React.FC<Props> = ({icon, size, color}) => {
  return <FontAwesomeIcon icon={icon} size={size} color={color} />;
};

export default CustomIcon;
