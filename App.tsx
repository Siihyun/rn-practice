/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>hi</Text>
        <Button title="버튼 이름" onPress={() => console.log('클릭됨!')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'red',
  },
});

export default App;
