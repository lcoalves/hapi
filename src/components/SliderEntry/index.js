import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './styles';

export default class SliderEntry extends Component {
  static propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
    }).isRequired,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.shape({}),
  };

  static defaultProps = {
    parallax: true,
    parallaxProps: {},
  };

  get image() {
    const {
      data: { illustration },
      parallax,
      parallaxProps,
    } = this.props;

    return parallax ? (
      <ParallaxImage
        source={{ uri: illustration }}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.35}
        showSpinner
        spinnerColor="rgba(255, 255, 255, 0.4)"
        {...parallaxProps}
      />
    ) : (
      <Image source={{ uri: illustration }} style={styles.image} />
    );
  }

  render() {
    // const uppercaseTitle = title ? (
    //   <Text style={[styles.title, even ? styles.titleEven : {}]} numberOfLines={2}>
    //     {title.toUpperCase()}
    //   </Text>
    // ) : (
    //   false
    // );

    return (
      <TouchableOpacity activeOpacity={1} style={styles.slideInnerContainer} onPress={() => {}}>
        <View style={styles.shadow} />
        <View style={styles.imageContainer}>{this.image}</View>
      </TouchableOpacity>
    );
  }
}
