import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyTab} from './navigator/Navigator';

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyTab />
      </NavigationContainer>
    );
  }
}

export default App;
