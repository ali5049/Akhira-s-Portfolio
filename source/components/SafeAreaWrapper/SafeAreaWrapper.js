// SafeAreaWrapper.js
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {MAIN_COLOR, WHITE} from '../../constants/colors';

const SafeAreaWrapper = ({children, upperColor, bottomColor}) => {
  return (
    <>
      <SafeAreaView
        style={[styles.upperSafeArea, {backgroundColor: upperColor || WHITE}]}
      />
      <SafeAreaView
        style={[
          styles.bottomSafeArea,
          {backgroundColor: bottomColor || WHITE},
        ]}>
        {children}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  upperSafeArea: {
    flex: 0,
  },
  bottomSafeArea: {
    flex: 1,
  },
});

export default SafeAreaWrapper;
