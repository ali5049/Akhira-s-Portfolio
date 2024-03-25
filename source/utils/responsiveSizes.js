import {Dimensions, I18nManager, PixelRatio} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {isRTL} = I18nManager;
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const dimensionPercentToDP = (valuePercent, dimensionValue) =>
  PixelRatio.roundToNearestPixel(
    (dimensionValue * Number(valuePercent.toFixed(5))) / 100,
  );

const wp = width => {
  const widthPercent = (width / 375) * 100;
  return dimensionPercentToDP(widthPercent, SCREEN_WIDTH);
};

const hp = height => {
  const heightPercent = (height / 813) * 100;
  return dimensionPercentToDP(heightPercent, SCREEN_HEIGHT);
};

const responsiveFontSize = fontSize => {
  if (!isRTL) {
    return PixelRatio.roundToNearestPixel(fontSize / PixelRatio.getFontScale());
  }
  return (
    PixelRatio.roundToNearestPixel(fontSize / PixelRatio.getFontScale()) - 2
  );
};

export {RFValue as RF, hp, responsiveFontSize, wp};
