import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home'
import Initial from './Initial';
import Seed from './Seed';
import Address from './Address';

const Stack = createStackNavigator();


const CypherStack = () => {
  return(
    <Stack.Navigator initialRouteName='Initial'>
      <Stack.Screen
        name="Initial"
        component={Initial}
        options={({navigation}) => ({
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'gold' },
        })}
      />
      <Stack.Screen name="Seed" component={Seed}
      options={({navigation}) => ({
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'gold' },
      })}
      ></Stack.Screen>
      <Stack.Screen name="Address" component={Address}
      options={({navigation}) => ({
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'gold' },
      })}
      ></Stack.Screen>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <CypherStack/>
    </NavigationContainer>
  );
}
