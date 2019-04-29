import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 50,
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

  icon: {
    // justifyContent: 'center',
    // alignItems: 'center',
    color: colors.primary,
  },

  selectedIcon: {
    color: colors.primary,
  },
});

export default styles;
