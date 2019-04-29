import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: metrics.baseRadius,
    alignItems: 'center',
    maxWidth: (metrics.screenWidth - 30) / 2,
    marginBottom: metrics.baseMargin,
  },

  image: {
    width: '100%',
    height: 100,
    resizeMode: 'stretch',
    borderTopLeftRadius: metrics.baseRadius,
    borderTopRightRadius: metrics.baseRadius,
  },

  productContainer: {
    width: '100%',
    height: 90,
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    borderBottomLeftRadius: metrics.baseRadius,
    borderBottomRightRadius: metrics.baseRadius,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  infoContainer: {
    flexDirection: 'row',
  },

  info: {
    flexDirection: 'row',
    marginRight: metrics.baseMargin,
    alignItems: 'flex-start',
  },

  infoIcon: {
    color: colors.dark,
  },

  infoText: {
    color: colors.dark,
    fontSize: 12,
    marginLeft: metrics.baseMargin / 2,
  },
});

export default styles;
