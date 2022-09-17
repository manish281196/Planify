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

const cards = ['First', 'Second'];

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
        <ScrollView horizontal={true} style={styles.pillsContainer}>
          {pills.map(this.renderPillItem)}
        </ScrollView>
      </View>
    );
  };

  renderCardItem = () => {
    return (
      <View>
        <CustomCard />
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
