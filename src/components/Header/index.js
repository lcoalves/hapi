import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    arrowBackHome: PropTypes.string,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  static defaultProps = {
    arrowBackHome: 'false',
  };

  goToCart = () => {
    const { navigation } = this.props;

    navigation.navigate('Cart');
  };

  goTobackScreen = () => {
    const { navigation } = this.props;

    navigation.navigate('Home');
  };

  render() {
    const { title, arrowBackHome } = this.props;

    return (
      <View style={styles.container}>
        {arrowBackHome === 'true' ? (
          <View>
            <TouchableOpacity onPress={this.goTobackScreen}>
              <Icon name="arrow-left" size={22} style={styles.icon} />
            </TouchableOpacity>
          </View>
        ) : (
          <View />
        )}
        <Text style={styles.title}>{title}</Text>
        <View>
          <TouchableOpacity onPress={this.goToCart}>
            <Icon name="opencart" size={22} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(Header);
