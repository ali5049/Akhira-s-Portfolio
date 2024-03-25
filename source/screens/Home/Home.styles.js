import {StyleSheet} from 'react-native';
import {wp} from '../../utils/responsiveSizes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(15),
  },
  mainScroll: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
});
