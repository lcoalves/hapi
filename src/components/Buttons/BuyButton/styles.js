import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  button: {
    width: metrics.screenWidth / 1.15,
    height: 50,
    padding: 13,
    alignSelf: 'center',
    backgroundColor: colors.success,
    color: colors.white,
    fontSize: 16,
    borderRadius: 50,
    marginTop: metrics.baseMargin * 2,
  },
});

export default styles;
