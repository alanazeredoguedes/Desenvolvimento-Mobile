import React, {useState} from 'react';
import { StyleSheet, Text, Button, ImageBackground, TextInput, View } from 'react-native';
const image = require('../../assets/background.png') ;


function TelaInicial(props) {

    const { navigate } = props.navigation

    const iniciarJogo = () =>{
        //alert("Iniciando o Jogo")

        navigate('Jogo')
    }

    const Separator = () => (
        <View style={styles.separator} />
    );

    return (

        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>

            <Text style={styles.titulo}>JOGO DO ADIVINHE!</Text>

            <Separator />
            <Separator />
            <Separator />

            <Text style={styles.descricao}>
                O jogo do adivinnhe consistem em escolher uma imagem e advinha qual é o nome da pessoa!
            </Text>

            <Separator />
            <Separator />
            <Separator />
            <Separator />
            <Separator />
            <Separator />
            <Button title={'Iniciar Jogo'} onPress={iniciarJogo}/>

            </ImageBackground>
        </View>

    )

}

TelaInicial.navigationOptions = {
    title: 'Pagina Incial',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //backgroundImage: `url( ${background} )`,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    descricao: {
        fontSize: 17,
        textAlign: 'center',
    },
    pontuacao:{
        fontSize: 30,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});


export default TelaInicial
