import {StatusBar} from 'react-native';
import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import Router from './src/core/route/Router';
import {COLOR_CONSTNATS} from './src/core/values/constants/ColorConstant';

const App = () => {
  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      style={{backgroundColor: 'White'}}>
      <StatusBar backgroundColor={COLOR_CONSTNATS.backgroundColor} />
      <Router />
    </SafeAreaProvider>
  );
};

export default App;
