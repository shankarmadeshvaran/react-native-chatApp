import {View, Text, ViewProps} from 'react-native';
import React from 'react';

const CustomView: React.FC<ViewProps> = ({children, ...remainingProps}) => {
  return <View {...remainingProps}>{children}</View>;
};

export default CustomView;
