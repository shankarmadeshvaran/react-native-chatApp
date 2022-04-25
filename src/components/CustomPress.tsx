import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import React from 'react';

interface PressableProps extends TouchableOpacityProps {}

const CustomPress: React.FC<PressableProps> = ({
  children,
  ...remainingProps
}) => {
  return <TouchableOpacity {...remainingProps}>{children}</TouchableOpacity>;
};

export default CustomPress;
