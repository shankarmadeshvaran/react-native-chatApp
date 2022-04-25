import React, {useEffect, useRef} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {faPaperPlane, faCirclePlus} from '@fortawesome/free-solid-svg-icons';

import CustomTextInput from './CustomTextInput';
import CustomView from './CustomView';
import CustomIcon from './CustomIcon';

import {colors} from '../constants/Colors';
import {Normalize} from '../utils/Normalize';

type ChatRoomInputProps = {
  onChangeText: (arg: string) => void;
};

const ChatRoomInput: React.FC<ChatRoomInputProps> = ({onChangeText}) => {
  const inputRef = useRef<TextInput | null>(null);
  
  return (
    <CustomView style={styles.textInputWrapper}>
      <CustomIcon icon={faCirclePlus} size={24} color={colors.icon} />
      <CustomTextInput
        style={styles.textInputContainer}
        placeholder="Enter a message"
        ref={inputRef}
        multiline={true}
        onChangeText={onChangeText}
      />
      <CustomIcon icon={faPaperPlane} size={24} color={colors.icon} />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: colors.inputBackground,
    height: 34,
    paddingHorizontal: 10,
    fontSize: Normalize(12),
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 10,
  },
  textInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 10,
    borderTopColor: colors.subText,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

export default ChatRoomInput;
