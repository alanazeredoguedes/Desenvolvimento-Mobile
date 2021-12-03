import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, ImageBackground, Button, View } from 'react-native';
const image = require('../../assets/background.png') ;

function Acertou(props) {

    const { navigate } = props.navigation

    const continuar = () =>{
        //alert("Iniciando o Jogo")
        navigate('Jogo')
    }

    return (

        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>

            <Text style={styles.titulo}>Parabéns Voce Acertou!</Text>

            <Text style={styles.descricao}>
                Parabéns pelo acerto, continue assim!
            </Text>

            <Button title={'Continuar'} onPress={continuar}/>
            </ImageBackground>
        </View>

    )

}

Acertou.navigationOptions = {
    title: 'Resposta Correta'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    titulo: {
        fontSize: 40,
        color: '#136bde',
        marginBottom: 30,
    },
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    descricao: {
        fontSize: 17,
        marginBottom: 20,
    },
    pontuacao:{
        fontSize: 30,
        marginBottom: 40,
    }
});





export default Acertou
