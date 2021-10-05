import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';


function JogoFinalizado(props) {

    const { navigate } = props.navigation

    const continuar = () =>{
        navigate('TelaInicial')
    }

    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>Jogo Concluido!</Text>

            <Text style={styles.descricao} >
                 ...
            </Text>

            <Button title={'Pagina Inicial'} onPress={continuar}/>

        </View>

    )

}

JogoFinalizado.navigationOptions = {
    title: 'Jogo Concluido'
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





export default JogoFinalizado
