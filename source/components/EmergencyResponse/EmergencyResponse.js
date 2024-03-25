import React from 'react';
import {FlatList, Image, Platform, StyleSheet, Text, View} from 'react-native';
import {useEmergency} from '../../CustomeHooks/useEmergency';
import {CurvedView, Profile} from '../../assets';
import {BLACK, LIGHT_BLACK, MEDIUM_BLACK, WHITE} from '../../constants/colors';
import {semibold} from '../../constants/fonts';
import {hp, responsiveFontSize, wp} from '../../utils/responsiveSizes';

const Item = ({item}) => {
  return (
    <View style={styles.card}>
      <Image source={item?.image} style={styles.image} />
      <View style={styles.overlay}>
        <Image style={styles.cuvedImage} source={CurvedView} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item?.title} </Text>
          <View style={styles.donorsContainer}>
            <Image style={styles.donorsImage} source={Profile} />
            <Text style={styles.donors}>{item?.donors} Donors</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const EmergencyResponse = () => {
  const {options} = useEmergency();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Emergency Response</Text>
      <FlatList
        data={options}
        horizontal
        contentContainerStyle={styles.contentContainer}
        renderItem={({item}) => <Item {...{item}} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default EmergencyResponse;

const styles = StyleSheet.create({
  card: {
    width: wp(300),
    height: hp(240),
    marginRight: wp(10),
    ...Platform.select({
      ios: {
        shadowColor: BLACK,
        shadowOffset: {width: 0, height: 6.38},
        shadowOpacity: 0.1,
        shadowRadius: 3.22,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: hp(20),
  },
  overlay: {
    backgroundColor: WHITE,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: hp(70),
    borderRadius: hp(20),
  },
  cuvedImage: {
    position: 'absolute',
    top: -30,
    left: 0,
    width: '100.17%',
    resizeMode: 'contain',
  },
  textContainer: {
    paddingHorizontal: wp(16),
    paddingTop: hp(10),
  },
  title: {
    fontSize: responsiveFontSize(16),
    fontFamily: semibold,
    color: MEDIUM_BLACK,
  },
  heading: {
    fontSize: responsiveFontSize(18),
    fontFamily: semibold,
    color: LIGHT_BLACK,
    marginTop: hp(16),
  },
  donorsContainer: {
    flexDirection: 'row',
    marginTop: hp(6),
  },
  donorsImage: {
    opacity: 0.7,
    marginRight: 5,
  },
  donors: {
    fontSize: responsiveFontSize(14),
    fontFamily: semibold,
    color: LIGHT_BLACK,
    opacity: 0.7,
  },
  contentContainer: {
    paddingVertical: hp(10),
  },
});
