import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },

  loading: {
    marginTop: metrics.baseMargin * 2,
  },

  banner: {
    alignSelf: 'center',
    width: '100%',
    height: 250,
    resizeMode: 'stretch',
  },

  category: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 120,
    height: 120,
    marginTop: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin * 2,
    marginLeft: metrics.baseMargin,
  },

  categoryImage: {
    width: '100%',
    height: 120,
    borderRadius: 100,
  },

  categoryText: {
    fontSize: 16,
    alignSelf: 'center',
    color: colors.regular,
    marginLeft: 12,
    marginBottom: metrics.baseMargin * 2,
  },

  collumWrapper: {
    marginHorizontal: metrics.baseMargin,
    justifyContent: 'space-between',
  },
});

export default styles;
