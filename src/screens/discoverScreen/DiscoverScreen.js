import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  imgColor: {
    width: 100,
    height: 100,
    tintColor: '#ff006c',
  },
});

export class DiscoverScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/blocks.png')}
          resizeMode="contain"
          style={styles.imgColor}
        />
        <Text style={styles.appName}>Discover Screen</Text>
      </View>
    );
  }
}
