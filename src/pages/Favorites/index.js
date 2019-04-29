import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';

import {
  View, Text, ScrollView, Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';

import styles from './styles';

const tabIcon = ({ tintColor }) => <Icon name="heart" size={22} color={tintColor} />;

tabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Favorites extends Component {
  static navigationOptions = {
    tabBarIcon: tabIcon,
  };

  constructor(props) {
    super(props);

    this.state = {
      dataProduct: [],
    };
  }

  async componentDidMount() {
    const { data: dataCustomer } = await api.get('/customer/1');

    const dataProduct = dataCustomer.favoriteProducts;

    this.setState({
      dataProduct,
    });
  }

  render() {
    const { dataProduct } = this.state;

    return (
      <View style={styles.container}>
        <Header style={styles.header} title="Favoritos" />
        <ScrollView>
          {dataProduct.map(product => (
            <View style={styles.productContainer} key={product.id}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: product.images }} />
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.value}>{`R$${product.value}`}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
