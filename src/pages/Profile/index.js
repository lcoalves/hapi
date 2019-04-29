import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';

import styles from './styles';

const Profile = () => (
  <View style={styles.container}>
    <Header title="Meu perfil" />
    <Text>Olá Mundo</Text>
  </View>
);

const tabIcon = ({ tintColor }) => <Icon name="user" size={22} color={tintColor} />;

tabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Profile.navigationOptions = {
  tabBarIcon: tabIcon,
};

export default Profile;
