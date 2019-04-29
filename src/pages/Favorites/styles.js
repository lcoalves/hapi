import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },

  header: {
    marginBottom: metrics.baseMargin,
  },

  productContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    maxWidth: metrics.screenWidth - 20,
    height: 100,
    alignSelf: 'center',
    marginTop: metrics.baseMargin,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    borderWidth: 0.5,
    borderColor: colors.light,
  },

  imageContainer: {
    maxWidth: (metrics.screenWidth - 20) / 3,
    flexDirection: 'row',
  },

  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderTopLeftRadius: metrics.baseRadius,
    borderBottomLeftRadius: metrics.baseRadius,
  },

  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: metrics.basePadding / 1.5,
  },

  name: {
    fontSize: 16,
    color: colors.dark,
  },

  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darker,
  },
});

export default styles;
