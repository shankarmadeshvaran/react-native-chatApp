import {TextInput, TextInputProps} from 'react-native';
import React from 'react';

interface CustomTextInputTypes extends TextInputProps {}

const CustomTextInput = React.forwardRef(
  ({...remainingProps}: CustomTextInputTypes, ref: TextInput | any) => (
    <TextInput {...remainingProps} ref={ref} />
  ),
);

export default CustomTextInput;
