import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';

import { View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class HearthButton extends Component {
  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.string,
    }),
  };

  static defaultProps = {
    product: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      addedToFavorite: false,
    };

    this.addToFavorite = this.addToFavorite.bind(this);
  }

  async componentDidMount() {
    // eslint-disable-next-line no-unused-vars
    const { addedToFavorite } = this.state;

    const { product } = this.props;

    const { data: dataCustomer } = await api.get('customer/1');
    const { favoriteProducts } = dataCustomer;

    // eslint-disable-next-line array-callback-return
    favoriteProducts.map((favorite) => {
      if (favorite.id === product.id) {
        this.setState({
          addedToFavorite: true,
        });
      }
    });
  }

  addToFavorite = async () => {
    const { addedToFavorite } = this.state;

    const { product } = this.props;

    const { data: dataCustomer } = await api.get('customer/1');
    const { favoriteProducts } = dataCustomer;

    const { data: dataProduct } = await api.get(`products/${product.id}`);
    const { userFavorites } = dataProduct;

    if (!addedToFavorite) {
      await api.put('customer/1', {
        favoriteProducts: [...favoriteProducts, product],
      });

      await api.put(`products/${product.id}`, {
        userFavorites: userFavorites + 1,
      });
    } else {
      const withoutRemovedFavorites = favoriteProducts.map((favorite) => {
        if (favorite.id !== product.id) {
          return favorite;
        }
        return {};
      });

      await api.put('customer/1', {
        favoriteProducts: withoutRemovedFavorites,
      });

      await api.put(`products/${product.id}`, {
        userFavorites: userFavorites - 1,
      });
    }

    this.setState({
      addedToFavorite: !addedToFavorite,
    });
  };

  render() {
    const { addedToFavorite } = this.state;

    return (
      <TouchableOpacity style={styles.container} onPress={this.addToFavorite}>
        <View>
          <Icon
            style={addedToFavorite ? styles.selectedIcon : styles.icon}
            name={addedToFavorite ? 'heart' : 'heart-o'}
            size={24}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
