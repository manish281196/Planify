/* eslint-disable react/react-in-jsx-scope */
import {View, Text, Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  MarketScreen,
  StartupScreen,
  StoreScreen,
  DiscoverScreen,
  BasketScreen,
} from '../screens';

const Tab = createBottomTabNavigator();
export function MyTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen
        name="Startup"
        component={StartupScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/startup.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? '#ff006c' : 'grey',
                }}
              />
              <Text
                style={{
                  color: focused ? '#ff006c' : 'grey',
                  fontSize: 12,
                }}>
                Startup
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/store.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? '#ff006c' : 'grey',
                }}
              />
              <Text
                style={{
                  color: focused ? '#ff006c' : 'grey',
                  fontSize: 12,
                }}>
                Market
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/briefcase.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? '#ff006c' : 'grey',
                }}
              />
              <Text
                style={{
                  color: focused ? '#ff006c' : 'grey',
                  fontSize: 12,
                }}>
                Store
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/blocks.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? '#ff006c' : 'grey',
                }}
              />
              <Text
                style={{
                  color: focused ? '#ff006c' : 'grey',
                  fontSize: 12,
                }}>
                Discover
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Basket"
        component={BasketScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/shopping-basket.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? '#ff006c' : 'grey',
                }}
              />
              <Text
                style={{
                  color: focused ? '#ff006c' : 'grey',
                  fontSize: 12,
                }}>
                Basket
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
