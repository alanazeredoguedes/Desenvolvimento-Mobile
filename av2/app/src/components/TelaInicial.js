import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    Button,
    ImageBackground,
    TextInput,
    View,
    SafeAreaView,
    TouchableHighlight
} from 'react-native';
const image = require('../../assets/home.png') ;
const apiPokemon = require("../services/api").apiPokemon;


function TelaInicial(props) {

    const { navigate } = props.navigation


    const [user, setUser] = useState( '' );
    const [pass, setPass] = useState( '' );

    const iniciarJogo = () =>{
        //alert("Iniciando o Jogo")

        //console.log(user)
        //console.log(pass)

        if(user !== '' && pass !== ''){
            apiPokemon.logar(user, pass).then(function (response) {

                let data = response.data
                //console.log(data)
                navigate('Jogo',{
                    usuario: data
                })
            })
        }



        //==navigate('Jogo')
    }




    const Separator = () => (
        <View style={styles.separator} />
    );

    return (
         <ImageBackground source={image} resizeMode="cover" style={styles.image}>

                    <View style={styles.colunaEsquerda}>
                        <SafeAreaView>

                            <Text style={styles.textLabel}>
                                Usuario
                            </Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={setUser}
                                value={user}
                                placeholder="Usuario"
                            />

                            <Text style={styles.textLabel}>
                                Senha
                            </Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={setPass}
                                value={pass}
                                placeholder="Senha"
                                keyboardType="numeric"
                                secureTextEntry={true}
                            />

                            {/*<Button title={'Iniciar Jogo'} onPress={iniciarJogo}/>*/}

                            <TouchableHighlight style ={ styles.touchableHighlight } onPress={iniciarJogo}>
                                <Text style={ styles.touchableHighlightText }>
                                    Jogar
                                </Text>
                            </TouchableHighlight>

                        </SafeAreaView>
                    </View>

                    <View style={styles.colunaDireita}>

                        {/*<Text style={styles.titulo}>Qual é esse Pokemon?</Text>*/}
                        {/*<Text style={styles.titulo}>Game</Text>*/}

                        {/*<Text style={styles.descricao}>*/}
                        {/*    Identifique o pokemon e suba no ranking*/}
                        {/*</Text>*/}

                    </View>

            </ImageBackground>

    )

}

TelaInicial.navigationOptions = {
    title: 'Pagina Incial',
    headerShown: false,

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    input:{
        width: 150,
        height: 35,
        margin: 8,
        color: '#085d9e',
        borderWidth: 2,
        padding: 10,
        borderRadius: 12,
        borderColor: '#085d9e',
        backgroundColor: 'rgba(255,215,100,0.49)'
    },
    image: {
        flex: 1,
        flexDirection: 'row'
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
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
        marginTop: 20,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    linha:{
        flexWrap: 'wrap',
        flexDirection:'row',
        marginRight:20,
        marginLeft: 20,
    },
    textLabel:{
        marginLeft: 12,
    },
    colunaEsquerda:{
        marginTop: 270,
        marginLeft: 100,
        //flexDirection:'row',
    },
    colunaDireita:{
        marginTop: 100,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
        //flexDirection:'row',
    },
    touchableHighlight: {
        //alignSelf: "flex-center",
        textAlign: 'center',
        marginRight: 0,
        marginLeft : 50,
        marginTop : 0,
        height: 40,
        width: 60,
        borderRadius: 12,
        borderColor: '#085d9e',
        borderWidth: 2,
        backgroundColor : '#ffcb05',
    },
    touchableHighlightText: {
        margin: 5,
        color: '#085d9e',
        fontSize: 22,
    },
});


export default TelaInicial
