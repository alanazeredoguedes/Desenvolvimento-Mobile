import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props); // Compartilha entre os componetes
        this.state = {
            name: 'Alan Guedes',
        } // Apenas para o componente
    }

    render() {
        const { name } = this.state

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            },
            logo: {
                width: 150,
                height: 250,
            },
        });

        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://img.uncyc.org/weird-pt/d/df/Superman_4.jpg',
                    }}
                />
                <Text></Text>
                <Text>Super Man - 6º Período</Text>
                <Text></Text>
                <Text>Unilasalle RJ</Text>
                <Text></Text>

                <Text>31/08/21</Text>
                <Text></Text>

                <Text>Por { name } </Text>
              <StatusBar style="auto" />
            </View>
        );

  }

}


