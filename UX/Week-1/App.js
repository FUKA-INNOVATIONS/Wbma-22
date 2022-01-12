import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import GlobalStyles from './utils/GlobalStyles';
import List from './components/List';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const App = () => {
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <StatusBar
        animated={true}
        backgroundColor="black"
        barStyle={STYLES[2]}
        showHideTransition={TRANSITIONS[0]}
      />
      <List />
    </SafeAreaView>
  );
};
export default App;
