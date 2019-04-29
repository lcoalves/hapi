import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View, ScrollView, Text, Image,
} from 'react-native';

import BuyButton from '~/components/Buttons/BuyButton';
import HeartButton from '~/components/Buttons/HeartButton';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';

import styles from './styles';

export default class Product extends Component {
  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      value: PropTypes.string,
      userFavorites: PropTypes.number,
    }),
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  static defaultProps = {
    product: {},
  };

  state = {};

  render() {
    const { navigation } = this.props;

    const product = navigation.getParam('product');

    return (
      <View style={styles.container}>
        <Header title="Produto" arrowBackHome="true" />
        <ScrollView>
          <Image
            source={{
              uri: product.images,
            }}
            style={styles.imageDetails}
          />
          <View style={styles.favoriteButton}>
            <HeartButton product={product} />
          </View>
          <View style={styles.info}>
            <Icon name="heart" size={14} style={styles.favoritesIcon} />
            <Text style={styles.favorites}>{`${product.userFavorites} casais já estão Hapi`}</Text>
          </View>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.value}>{`R$${product.value}`}</Text>
          <BuyButton product={product} />
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>DESCRIÇÃO</Text>
            <Text style={styles.descriptionInfo}>{product.description}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
