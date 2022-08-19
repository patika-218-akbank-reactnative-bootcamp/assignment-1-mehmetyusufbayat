/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import Header from './src/component/Header';
import Story from './src/component/Story';
import Content from './src/component/Content';

const App = () => {
  return (
    <ScrollView
    contentInsetAdjustmentBehavior="automatic">
      <Header 
        head={"Instagram"}
      />
      <Story/>
      <Content/>
    </ScrollView>
  );
};


export default App;
