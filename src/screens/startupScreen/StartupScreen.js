import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import {CustomCard} from '../../components';

const {width: windowWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(248, 246, 251)',
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#eaeaea',
    width: windowWidth - 48,
    height: 52,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    alignSelf: 'center',
  },
  serachIcon: {
    height: 24,
    width: 24,
    marginRight: 8,
  },
  txtInput: {
    flex: 1,
    fontSize: 14,
  },
  pillsContainer: {
    margin: 20,
  },
  pillsItem: {
    height: 36,
    backgroundColor: 'rgb(255,0,108)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  pillItemName: {
    minWidth: 24,
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});

const cards = [
  {
    brandName: 'Bazar India',
    services: ['Equity', 'DMAT', 'Pvt Ltd'],
    stockPrice: '\u20B9 70',
    description:
      'Bazar India is a retail chain that offers a wide range of apparel and general merchandise with latest fashion at affordable price...',
    progress: '67%',
    raisedDta: [
      {
        name: 'To Raised',
        value: '\u20B9 15,00,00,000',
      },
      {
        name: 'Launch Date',
        value: '24 Days Left',
      },
    ],
    otherInfo: [
      {
        name: 'Raised',
        value: '\u20B9 336,792',
      },
      {
        name: 'Equity',
        value: '17.42%',
      },
      {
        name: 'Investors',
        value: '175',
      },
    ],
  },
  {
    brandName: 'Madbow',
    services: ['CCPS', 'Physical', 'Public Ltd'],
    stockPrice: '\u20B9 60',
    description:
      'Madbow ventures Limited is an indian e-commerce lifestyle fashion brand that makes creative, distinctive fashion, ... ',
    progress: '100%',
    raisedDta: [
      {
        name: 'To Raised',
        value: `\u20B9 15,00,00,000`,
      },
      {
        name: 'Launch Date',
        value: '24 Days Left',
      },
    ],
    otherInfo: [
      {
        name: 'Raised',
        value: '\u20B9 426,792',
      },
      {
        name: 'Equity',
        value: '20.50%',
      },
      {
        name: 'Investors',
        value: '125',
      },
    ],
  },
];

const pills = [
  'All',
  'Startup Up',
  'Early Revenue',
  'Ideas',
  'Growth',
  'Launching Soon',
  'Most Funded',
  'Certified',
  'Funded Companies',
];

export class StartupScreen extends React.Component {
  renderSearchBar = () => {
    return (
      <View style={styles.searchBar}>
        <Image
          source={require('../../assets/search.png')}
          resizeMode="contain"
          style={styles.serachIcon}
        />
        <TextInput style={styles.txtInput} placeholder="Search" />
      </View>
    );
  };

  renderPillItem = item => (
    <View style={styles.pillsItem}>
      <Text style={styles.pillItemName}>{item}</Text>
    </View>
  );

  renderPillsCarousel = () => {
    return (
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.pillsContainer}>
          {pills.map(this.renderPillItem)}
        </ScrollView>
      </View>
    );
  };

  renderCardItem = item => {
    return (
      <View>
        <CustomCard data={item} />
      </View>
    );
  };

  renderCardsList = () => {
    return <ScrollView>{cards.map(this.renderCardItem)}</ScrollView>;
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderSearchBar()}
        {this.renderPillsCarousel()}
        {this.renderCardsList()}
      </View>
    );
  }
}
