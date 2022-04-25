import {Text, TextProps} from 'react-native';
import React from 'react';

const CustomText: React.FC<TextProps> = ({children, ...remainingProps}) => {
  return <Text {...remainingProps}>{children}</Text>;
};

export default CustomText;
