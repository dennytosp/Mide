import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {COLORS} from './src/constants';
import MainStackNavigator from './src/navigation/StackNavigator';

const App = ({index}) => {
  return (
    <>
      {/* <View
        style={{
          marginTop: 50,
        }}>
        <StatusBar
          barStyle="dark-content"
          translucent={true}
          backgroundColor="transparent"
        />
      </View>
 */}
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
