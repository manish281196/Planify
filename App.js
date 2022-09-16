import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
});

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>Planify</Text>
      </View>
    );
  }
}

export default App;
