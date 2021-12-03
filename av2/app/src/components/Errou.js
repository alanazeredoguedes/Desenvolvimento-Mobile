import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, ImageBackground, Button, View } from 'react-native';
const image = require('../../assets/background.png') ;


function Errou(props) {

    const { navigate } = props.navigation

    const continuar = () =>{
        //alert("Iniciando o Jogo")

        navigate('Jogo')
    }

    return (

        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>

            <Text style={styles.titulo}>Infelizmente Voce Errou!</Text>

            <Text style={styles.descricao}>
                Você errou a questão, tente novamente!
            </Text>

            <Button title={'Continuar'} onPress={continuar}/>
            </ImageBackground>
        </View>

    )


}

Errou.navigationOptions = {
    title: 'Resposta Incorreta'
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
        color: '#f11b1b',
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





export default Errou
