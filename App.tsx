import React from 'react';
import Navigation from './source/Navigation';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <Navigation />
    </>
  );
};

export default App;
