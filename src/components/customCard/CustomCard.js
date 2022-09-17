/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

const {width: windowWidth} = Dimensions.get('window');

const cardWidth = windowWidth - 32;
const brandIconWidth = 70;

const styles = StyleSheet.create({
  cardContainer: {
    height: 340,
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 8,
    padding: 16,
    justifyContent: 'space-between',
    width: cardWidth,
  },
  basicInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandIcon: {
    height: 70,
    width: brandIconWidth,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#000',
    marginRight: 16,
  },
  StockName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  stockNameAndListSection: {
    width: cardWidth - (32 + brandIconWidth + 16 + 40),
    height: 66,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  StockItemPrice: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 12,
    color: 'rgb(120,120,131)',
    textAlign: 'right',
  },
  stockListItemContainer: {
    backgroundColor: 'rgb(220,220,220)',
    height: 28,
    minWidth: 50,
    marginRight: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  StockItemList: {
    fontSize: 14,
    color: '#333',
  },
  topSection: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  bottomSection: {
    height: 80,
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
    justifyContent: 'center',
  },
  stockInfoTitle: {
    fontSize: 14,
    color: '#999',
  },
  stockInfoSubtitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  stockInfoSubtitleProgress: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: '##ff006c',
  },
  otherInfoItemContainer: {
    alignSelf: 'center',
  },
  description: {
    color: '#999',
    lineHeight: 20,
  },
});

export class CustomCard extends React.Component {
  constructor(props) {
    super(props);
    this.cardData = props.data;
  }

  renderStockListItem = item => (
    <View style={styles.stockListItemContainer}>
      <Text style={styles.StockItemList}>{item}</Text>
    </View>
  );

  renderBasicInfo = () => {
    const {brandName, services, stockPrice} = this.cardData;
    return (
      <View style={styles.basicInfoContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/blocks.png')}
            resizeMode="contain"
            style={styles.brandIcon}
          />
          <View style={styles.stockNameAndListSection}>
            <Text style={styles.StockName}>{brandName}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {services.map(this.renderStockListItem)}
            </ScrollView>
          </View>
        </View>
        <Text style={styles.StockItemPrice}>{stockPrice}</Text>
      </View>
    );
  };

  renderDescription = () => (
    <Text style={styles.description}>{this.cardData.description}</Text>
  );

  renderStockInfoItem = item => (
    <View>
      <Text style={styles.stockInfoTitle}>{item.name}</Text>
      <Text style={styles.stockInfoSubtitle}>{item.value}</Text>
    </View>
  );

  renderStockInfoItemProgress = () => (
    <View>
      <Text style={styles.stockInfoSubtitle}>{this.cardData.progress}</Text>
    </View>
  );

  renderStockInfo = () => (
    <View style={styles.basicInfoContainer}>
      {this.cardData.raisedDta.map(this.renderStockInfoItem)}
      {this.renderStockInfoItemProgress()}
    </View>
  );

  renderOtherInfoItem = item => (
    <View style={styles.otherInfoItemContainer}>
      <Text style={styles.stockInfoSubtitle}>{item.value}</Text>
      <Text style={styles.stockInfoTitle}>{item.name}</Text>
    </View>
  );

  renderOtherInfo = () => (
    <View style={styles.basicInfoContainer}>
      {this.cardData.otherInfo.map(this.renderOtherInfoItem)}
    </View>
  );

  render() {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.topSection}>
          {this.renderBasicInfo()}
          {this.renderDescription()}
          {this.renderStockInfo()}
        </View>
        <View style={styles.bottomSection}>{this.renderOtherInfo()}</View>
      </View>
    );
  }
}
