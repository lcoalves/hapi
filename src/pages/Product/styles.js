import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },

  imageDetails: {
    width: metrics.screenWidth,
    height: metrics.screenWidth - 50,
    resizeMode: 'cover',
  },

  favoriteButton: {
    position: 'absolute',
    left: metrics.screenWidth - 90,
    top: 280,
    zIndex: 2,
  },

  info: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: metrics.basePadding,
    paddingRight: metrics.basePadding,
    marginTop: metrics.baseMargin * 2,
  },

  favoritesIcon: {
    color: colors.primary,
  },

  favorites: {
    fontSize: 14,
    color: colors.regular,
    flexDirection: 'row',
    marginLeft: metrics.baseMargin / 2,
    alignItems: 'flex-start',
  },

  name: {
    fontSize: 22,
    color: colors.darker,
    paddingLeft: metrics.basePadding,
    paddingRight: metrics.basePadding,
    marginTop: metrics.baseMargin / 2,
  },

  value: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    paddingLeft: metrics.basePadding,
    paddingRight: metrics.basePadding,
    marginTop: metrics.baseMargin * 1.5,
  },

  descriptionContainer: {
    marginTop: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin * 2,
    width: metrics.screenWidth / 1.15,
    alignSelf: 'center',
    padding: metrics.basePadding,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    borderWidth: 0.5,
    borderColor: colors.light,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },

  descriptionTitle: {
    fontSize: 16,
  },

  descriptionInfo: {
    fontSize: 14,
    color: colors.regular,
    marginTop: metrics.baseMargin / 2,
  },
});

export default styles;
