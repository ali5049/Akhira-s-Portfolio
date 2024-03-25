import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {semibold} from '../../constants/fonts';
import {GREEN, TRANSPARENT_WHITE, WHITE} from '../../constants/colors';
import {useProgressBar} from '../../CustomeHooks/useProgressBar';
import {hp, responsiveFontSize} from '../../utils/responsiveSizes';

const ProgressBar = () => {
  const {data, donationsPercentage} = useProgressBar();

  return (
    <View style={styles.container}>
      <View style={styles.textsContainer}>
        <Text style={styles.valueText}>${data.donations}</Text>
        <Text style={styles.valueText}>2024 donation goal</Text>
        <Text style={styles.valueText}>${data.target}</Text>
      </View>
      <View style={styles.baseContainer}>
        <View style={[styles.baseContainer, styles.yearGoal]} />
        <View
          style={[
            styles.baseContainer,
            styles.donations,
            {width: donationsPercentage},
          ]}
        />
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(20),
  },
  textsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueText: {
    fontFamily: semibold,
    color: WHITE,
    fontSize: responsiveFontSize(14),
  },
  baseContainer: {
    backgroundColor: TRANSPARENT_WHITE,
    width: '100%',
    height: hp(8),
    borderRadius: hp(8),
    marginTop: hp(8),
  },
  yearGoal: {
    backgroundColor: WHITE,
    width: '50%',
    position: 'absolute',
    marginTop: 0,
  },
  donations: {
    backgroundColor: GREEN,
    marginTop: 0,
    position: 'absolute',
  },
});
