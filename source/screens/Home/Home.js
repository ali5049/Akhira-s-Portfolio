import {FlatList, View} from 'react-native';
import React from 'react';
import {
  Calculator,
  EmergencyResponse,
  Header,
  ProgressBar,
  QuickMenu,
  SafeAreaWrapper,
} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {MAIN_COLOR, WHITE} from '../../constants/colors';
import {styles} from './Home.styles';

const Home = () => {
  return (
    // <SafeAreaWrapper>
    <LinearGradient
      start={{x: 0, y: 0.5}}
      end={{x: 0, y: 0.7}}
      style={styles.container}
      colors={[MAIN_COLOR, WHITE]}>
      <Header />
      <View style={styles.content}>
        <FlatList
          style={styles.mainScroll}
          contentContainerStyle={styles.contentContainer}
          ListFooterComponent={
            <>
              <ProgressBar />
              <QuickMenu />
              <Calculator />
              <EmergencyResponse />
            </>
          }
        />
      </View>
    </LinearGradient>
    // </SafeAreaWrapper>
  );
};

export default Home;
