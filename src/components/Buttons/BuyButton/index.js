import React, { Component } from 'react';

import Button from 'react-native-button';

import styles from './styles';

export default class BuyButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: [],
    };
  }

  buyProduct = () => {};

  render() {
    const { favorites } = this.state;

    return (
      <Button
        style={styles.button}
        styleDisabled={{ color: '#999' }}
        onPress={() => this.buyProduct(favorites)}
      >
        {'ADICIONAR AO CARRINHO'}
      </Button>
    );
  }
}
