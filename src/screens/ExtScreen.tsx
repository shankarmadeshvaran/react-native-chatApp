import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ExtScreen = () => {
  return (
    <View style={styles.center}>
      <Text>Consider this screen as your existing screen on your app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default ExtScreen;
