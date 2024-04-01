import {FlatList, Image, StyleSheet, Text, View, Platform} from 'react-native';
import React from 'react';
import {useCalculator} from '../../CustomeHooks/useCalculator';
import {hp, responsiveFontSize, wp} from '../../utils/responsiveSizes';
import {BLACK, GRAY, GREEN, LIGHT_BLACK, WHITE} from '../../constants/colors';
import {semibold} from '../../constants/fonts';

const Item = ({item}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.icon} source={item?.icon} />
      <Text style={styles.title}>{item?.title} </Text>
    </View>
  );
};

const Calculator = () => {
  const {calculators} = useCalculator();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Calculators</Text>
      <FlatList
        data={calculators}
        horizontal
        contentContainerStyle={styles.contentContainer}
        renderItem={({item}) => <Item {...{item}} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(10),
    paddingLeft: wp(15),
  },
  heading: {
    fontSize: responsiveFontSize(16),
    fontFamily: semibold,
    color: BLACK,
  },

  card: {
    backgroundColor: WHITE,
    marginRight: wp(10),
    width: wp(100),
    height: hp(100),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(11),
    ...Platform.select({
      ios: {
        shadowColor: GRAY,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  contentContainer: {
    paddingVertical: hp(10),
  },
  title: {
    fontSize: responsiveFontSize(16),
    fontFamily: semibold,
    color: LIGHT_BLACK,
    marginTop: hp(10),
  },
  icon: {
    width: wp(40),
    height: wp(40),
  },
});
