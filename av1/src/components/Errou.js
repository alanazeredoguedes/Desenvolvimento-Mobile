import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';


function Errou(props) {

    const { navigate } = props.navigation

    const continuar = () =>{
        //alert("Iniciando o Jogo")

        navigate('Jogo')
    }

    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>Infelizmente Voce Errou!</Text>

            <Text style={styles.descricao}>
                Você errou a questão, tente novamente!
            </Text>

            <Button title={'Continuar'} onPress={continuar}/>

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
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 40,
        color: '#f11b1b',
        marginBottom: 30,
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
