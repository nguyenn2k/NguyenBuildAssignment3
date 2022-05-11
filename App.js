import * as React from 'react';
import { Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Import Screen:
import HomeScreen from './screens/HomeScreen';
import LeaderScreen from './screens/LeaderScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import AlertScreen from './screens/AlertScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          //1: Add icon cho Home:
          tabBarIcon:({focused}) =>(
            <View>
              <Image
                source = {require('./assets/icons/home.png')}
                resizeMode = 'contain'
                style = {{width: 25, height:25}}
              />
            </View>
          ),
          headerShown: false}}/>
        <Tab.Screen name="LeaderBoard" component={LeaderScreen} options={{
          //2: Add icon cho LeaderBoard:
          tabBarIcon:({focused}) =>(
            <View>
              <Image
                source = {require('./assets/icons/leaderboard.png')}
                resizeMode = 'contain'
                style = {{width: 25, height:25}}
              />
            </View>
          ),
          headerShown: false}}/>
        <Tab.Screen name="Discover" component={DiscoverScreen} options={{
          //3: Add icon cho Discover:
          tabBarIcon:({focused}) =>(
            <View>
              <Image
                source = {require('./assets/icons/search.png')}
                resizeMode = 'contain'
                style = {{width: 25, height:25}}
              />
            </View>
          ),
          headerShown: false}}/>
        <Tab.Screen name="Alert" component={AlertScreen} options={{
          //4: Add icon cho Alert:
          tabBarIcon:({focused}) =>(
            <View>
              <Image
                source = {require('./assets/icons/alert.png')}
                resizeMode = 'contain'
                style = {{width: 25, height:25}}
              />
            </View>
          ),
          headerShown: false}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          //5: Add icon cho Profile:
          tabBarIcon:({focused}) =>(
            <View>
              <Image
                source = {require('./assets/icons/profile.png')}
                resizeMode = 'contain'
                style = {{width: 25, height:25}}
              />
            </View>
          ),
          headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}