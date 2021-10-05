import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';


function Acertou(props) {

    const { navigate } = props.navigation

    const continuar = () =>{
        //alert("Iniciando o Jogo")

        navigate('Jogo')
    }

    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>Parabéns Voce Acertou!</Text>

            <Text style={styles.descricao}>
                Parabéns pelo acerto, continue assim!
            </Text>

            <Button title={'Continuar'} onPress={continuar}/>

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
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 40,
        color: '#136bde',
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





export default Acertou
