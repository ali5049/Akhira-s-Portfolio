import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Logo, LogoContainer, Search} from '../../assets';
import {hp, responsiveFontSize, wp} from '../../utils/responsiveSizes';
import {WHITE} from '../../constants/colors';
import {bold, regular, semibold} from '../../constants/fonts';

const Header = () => {
  return (
    <View>
      <>
        <Image style={styles.logoContainer} source={LogoContainer} />
        <Image style={styles.logo} source={Logo} />
      </>
      <View style={styles.textContainer}>
        <Text style={styles.name}>
          Salam, <Text style={styles.lastname}>Ahmed</Text>
        </Text>
        <Image source={Search} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  logoContainer: {
    width: wp(157),
    height: hp(110),
    resizeMode: 'stretch',
  },
  logo: {
    position: 'absolute',
    top: hp(36),
    left: hp(23),
    width: wp(70),
    resizeMode: 'contain',
  },
  textContainer: {
    position: 'absolute',
    right: wp(20),
    top: hp(60),
    flexDirection: 'row',
  },
  name: {
    color: WHITE,
    fontSize: responsiveFontSize(24),
    fontFamily: bold,
    marginRight: wp(11),
  },
  lastname: {
    fontFamily: semibold,
  },
});
