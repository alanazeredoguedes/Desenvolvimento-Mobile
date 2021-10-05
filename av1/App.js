// import { StatusBar } from 'expo-status-bar'
import React, {Component} from 'react'
import { StyleSheet, Text, ScrollView, View, Button,  } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import TelaInicial from "./src/components/TelaInicial";
import Jogo from "./src/components/Jogo";
import Acertou from "./src/components/Acertou";
import Errou from "./src/components/Errou"
import JogoFinalizado from "./src/components/JogoFinalizado";

const Navigator = createStackNavigator({
    TelaInicial: { screen: TelaInicial },
    Jogo: { screen: Jogo },
    Acertou: { screen: Acertou },
    Errou: { screen: Errou },
    JogoFinalizado: { screen: JogoFinalizado },
    initialRouteName: 'TelaInicial'
})

const AppContainer = createAppContainer(Navigator)

export default function App() {

    return <AppContainer/>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
