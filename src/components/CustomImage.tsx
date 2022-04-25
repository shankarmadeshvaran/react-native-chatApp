import {View, Text, Image, ImageProps} from 'react-native';
import React from 'react';

const CustomImage: React.FC<ImageProps> = ({...remainingProps}) => {
  return <Image {...remainingProps} />;
};

export default CustomImage;
