import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ENTRIES1 } from '~/static/entries';
import SliderEntry from '~ /components/SliderEntry';
import { sliderWidth, itemWidth } from '~/components/SliderEntry/styles';
import stylesCarousel, { colors } from '~/styles/indexCarousel';

import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  FlatList,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';

import ProductItem from './ProductItem';

import styles from './styles';

const tabIcon = ({ tintColor }) => <Icon name="home" size={22} color={tintColor} />;

tabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

const SLIDER_1_FIRST_ITEM = 1;

export default class Home extends Component {
  static navigationOptions = {
    tabBarIcon: tabIcon,
  };

  constructor(props) {
    super(props);

    this.state = {
      dataProduct: [],
      dataCategory: [],
      loading: true,
      refreshing: false,
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
    };
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    this.setState({ refreshing: true });

    const { data: dataProduct } = await api.get('/products');
    const { data: dataCategory } = await api.get('/categories');

    this.setState({
      dataProduct,
      dataCategory,
      loading: false,
      refreshing: false,
    });
  };

  renderItemList = ({ item }) => <ProductItem style={styles.productContainer} product={item} />;

  renderItemWithParallax = ({ item, index }, parallaxProps) => (
    <SliderEntry data={item} even={(index + 1) % 2 === 0} parallax parallaxProps={parallaxProps} />
  );

  renderList = () => {
    const {
      dataProduct, dataCategory, refreshing, slider1ActiveSlide,
    } = this.state;

    return (
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.loadProducts} />}
      >
        <View>
          <Carousel
            // eslint-disable-next-line no-return-assign
            ref={c => (this.slider1Ref = c)}
            data={ENTRIES1}
            renderItem={this.renderItemWithParallax}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            hasParallaxImages
            firstItem={SLIDER_1_FIRST_ITEM}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            containerCustomStyle={stylesCarousel.slider}
            contentContainerCustomStyle={stylesCarousel.sliderContentContainer}
            loop
            loopClonesPerSide={2}
            autoplay
            autoplayDelay={1000}
            autoplayInterval={3000}
            onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
          />
          <Pagination
            dotsLength={ENTRIES1.length}
            activeDotIndex={slider1ActiveSlide}
            containerStyle={stylesCarousel.paginationContainer}
            dotColor="#8B00FE"
            dotStyle={stylesCarousel.paginationDot}
            inactiveDotColor={colors.black}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={this.slider1Ref}
            tappableDots={!!this.slider1Ref}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {dataCategory.map(categorie => (
            <View key={categorie.id}>
              <View style={styles.category}>
                <Image source={{ uri: categorie.image }} style={styles.categoryImage} />
              </View>
              <Text style={styles.categoryText}>{categorie.name}</Text>
            </View>
          ))}
        </ScrollView>
        <FlatList
          data={dataProduct}
          keyExtractor={item => String(item.id)}
          numColumns={2}
          columnWrapperStyle={styles.collumWrapper}
          renderItem={this.renderItemList}
          onRefresh={this.loadProducts}
          refreshing={refreshing}
        />
      </ScrollView>
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Hapi" backscreen="Home" />
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
