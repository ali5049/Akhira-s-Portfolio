import {FlatList, StyleSheet, Platform, View, Text, Image} from 'react-native';
import React from 'react';
import {hp, responsiveFontSize, wp} from '../../utils/responsiveSizes';
import {useMenu} from '../../CustomeHooks/useMenu';
import {
  BLACK,
  GREEN,
  LESS_TRANSPARENT_WHITE,
  WHITE,
} from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import {semibold} from '../../constants/fonts';

const Item = ({item}) => {
  return (
    <View style={styles.cardContainer}>
      <LinearGradient
        start={{x: 0.5, y: 0}}
        end={{x: 1, y: 1}}
        colors={[WHITE, WHITE, LESS_TRANSPARENT_WHITE]}
        style={styles.card}>
        <View>
          <Text style={styles.title}>{item?.title} </Text>
          <Text style={styles.description}>{item?.description} </Text>
        </View>

        <Image source={item?.icon} />
      </LinearGradient>
    </View>
  );
};

const QuickMenu = () => {
  const {menuOptions} = useMenu();
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={menuOptions}
        scrollEnabled={false}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({item}) => <Item {...{item}} />}
      />
    </View>
  );
};

export default QuickMenu;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(20),
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  cardContainer: {
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
  card: {
    width: wp(165),
    height: hp(90),
    marginBottom: hp(15),
    borderRadius: wp(16),
    padding: wp(13),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: responsiveFontSize(15),
    fontFamily: semibold,
    color: BLACK,
    letterSpacing: 0.2,
  },
  description: {
    marginTop: hp(12),
    width: wp(100),
    fontFamily: semibold,
    color: BLACK,
    opacity: 0.5,
  },
  icon: {
    width: wp(30),
    height: hp(30),
  },
});
