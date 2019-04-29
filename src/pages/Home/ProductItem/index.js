import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class ProductItem extends Component {
  static propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      userFavorites: PropTypes.number,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {};

  goToProduct = (product) => {
    const { navigation } = this.props;

    navigation.navigate('Product', { product });
  };

  render() {
    const { product } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={() => this.goToProduct(product)}>
        <Image
          source={{
            uri: product.images,
          }}
          style={styles.image}
        />
        <View style={styles.productContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <Text>{`R$${product.value}`}</Text>
            </View>
            <View style={styles.info}>
              <Icon name="heart" size={16} style={styles.infoIcon} />
              <Text style={styles.infoText}>{product.userFavorites}</Text>
            </View>
          </View>
          <Text style={styles.title}>{product.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(ProductItem);
