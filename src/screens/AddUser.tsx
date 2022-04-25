import {FlatList, StyleSheet, TextInput} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {colors} from '../constants/Colors';
import {Normalize} from '../utils/Normalize';

import {
  CustomView,
  CustomTextInput,
  MessageList,
  CustomPress,
} from '../components';
import useAppContext from '../hooks/useAppContext';
import {AppStackType} from '../Navigation';

type Props = StackScreenProps<AppStackType, 'addUser'>;

const AddUser: React.FC<Props> = ({navigation}) => {
  const inputRef = useRef<TextInput | null>(null);

  const {state} = useAppContext();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <CustomView style={styles.container}>
      <CustomView style={{paddingHorizontal: 10, paddingTop: 5}}>
        <CustomTextInput
          style={styles.textInputContainer}
          placeholder="Type a name"
          ref={inputRef}
        />
      </CustomView>

      <FlatList
        data={state.userData}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{marginTop: 10}}
        keyboardShouldPersistTaps={'always'}
        renderItem={({item}) => (
          <CustomPress
            onPress={() => navigation.navigate('chatRoom', {chatUser: item})}>
            <MessageList
              heading={item.name}
              subHeading={'Active now'}
              date={''}
              status={item?.isActive}
              avatarSize={40}
              imageUrl={{
                uri: item.avatar,
              }}
            />
          </CustomPress>
        )}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  textInputContainer: {
    backgroundColor: colors.inputBackground,
    height: 34,
    paddingHorizontal: 10,
    fontSize: Normalize(12),
    borderRadius: 8,
  },
});

export default AddUser;
