/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Login from './src/app/login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/app/main/Main';
import Register from './src/app/register/Register';
import RegisterMeal from './src/app/registerMeal/RegisterMeal';
import ChoiceMeal from './src/app/choiseMeal/ChoiceMeal';
import RegisterFoods from './src/app/registerFoods/RegisterFoods';
import Perfil from './src/app/perfil/Perfil';
import Ajuda from './src/app/ajuda/Ajuda';
import Favoritas from './src/RefeicoesFavoritas/Favoritas';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerTitleStyle: { fontFamily: 'Bellota-Bold' }}}/>
        <Stack.Screen name="Principal" component={Main} options={{headerTitleStyle: { fontFamily: 'Bellota-Bold' }}}/>
        <Stack.Screen name="Cadastro" component={Register} options={{headerTitleStyle: { fontFamily: 'Bellota-Bold' }}}/>
        <Stack.Screen name="Escolher Refeição" component={ChoiceMeal} options={{headerTitleStyle: { fontFamily: 'Bellota-Bold' }}}/>
        <Stack.Screen name="Cadastrar" component={RegisterFoods} options={{headerTitleStyle: { fontFamily: 'Bellota-Bold' }}}/>
        <Stack.Screen name="Cadastrar Refeição" component={RegisterMeal} options={{headerTitleStyle: { fontFamily: 'Bellota-Bold' }}}/>
        <Stack.Screen name="Perfil" component={Perfil} options={{headerTitleStyle: { fontFamily: 'Bellota-Bold' }}}/>
        <Stack.Screen name="Ajuda" component={Ajuda} options={{headerTitleStyle: { fontFamily: 'Bellota-Bold' }}}/>
        <Stack.Screen name="Favoritas" component={Favoritas} options={{headerTitleStyle: { fontFamily: 'Bellota-Bold' }}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
