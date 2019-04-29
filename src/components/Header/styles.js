import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 34 + getStatusBarHeight(),
    paddingHorizontal: metrics.basePadding,
    paddingTop: getStatusBarHeight() - 34,
  },

  title: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    fontStyle: 'italic',
  },

  icon: {
    color: colors.darker,
  },
});

export default styles;
