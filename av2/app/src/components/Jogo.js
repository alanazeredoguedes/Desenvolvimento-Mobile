import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Image, TextInput,ImageBackground, Button, View, TouchableHighlight } from 'react-native';
import Moment from 'react-moment';
import 'moment-timezone';
import ReactInterval from 'react-interval';
import {default as axios} from "axios";
const image = require('../../assets/template2.png') ;
//import apiPokemon from "../services/api";
const apiPokemon = require("../services/api").apiPokemon;


function Jogo(props) {
    const { navigate } = props.navigation
    const { params } = props.navigation.state;
    var user = params ? params.usuario : null;
    const [usuario, setUsuario] = useState( user )

    const url_pokemon = 'https://pokeapi.co/api/v2/pokemon/id'
    const url_pokemon_image = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/id.png'
    //const url_pokemon_image = 'https://images.gameinfo.io/pokemon-trimmed/60/pid.webp'

    function randomNumber(minimum, maximum){
        return Math.round( Math.random() * (maximum - minimum) + minimum);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function returnRaking(obj) {
        //return obj['nick'].charAt(0).toUpperCase() + obj['nick'].slice(1) + ' - ' + obj['pontos'] + ' - ' + obj['jogosRealizados'] + '  '
        return obj['nick'].toUpperCase() +' -> ' + obj['pontos'] + ' Pontos  '
    }

    const [imagemVez, setImagemVez] = useState( {  uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png' })
    const [opcaoCorreta, setOpcaoCorreta] = useState( '...' )
    const [opcao1, setOpcao1] = useState( '' )
    const [opcao2, setOpcao2] = useState( '' )
    const [opcao3, setOpcao3] = useState( '' )
    const [opcao4, setOpcao4] = useState( '' )
    const [ocultarResposta, setOcultarResposta] = useState(true);
    const [acerto, setAcerto] = useState(false);
    const [erro, setErro] = useState(false);
    const [pular, setPular] = useState(false);
    const [ranking1, setRanking1] = useState( '' )
    const [ranking2, setRanking2] = useState( '' )
    const [ranking3, setRanking3] = useState( '' )
    const [disabledBtn, setDisabledBtn] = useState( false )



    const novoJogo = () => {

        console.log(usuario)

        apiPokemon.usuarioUpdate(usuario).then(function (response) {
            let data = response.data
            console.log("API DADOS = ")
            console.log(data)
        })
        setTimeout(()=>{

        apiPokemon.getTop3().then(function (response) {
            let dados = response.data
            //console.log(dados[0])
            setRanking1(dados[0])
            setRanking2(dados[1])
            setRanking3(dados[2])
        })

        setOcultarResposta(true)

        let pokemons = []
        for(var i=0; i<4; i++) { pokemons.push(randomNumber(1, 898)) }

        apiPokemon.getPokemon(pokemons[0]).then(function (response) {
            let pokemon = response.data

            if(pokemon.id <=9){
                pokemon.id = '00' + pokemon.id
            }else if(pokemon.id <= 99){
                pokemon.id = '0' + pokemon.id
            }
            //console.log(pokemon.id)

            let linkImage = url_pokemon_image.replace('id', pokemon.id)
            setOpcaoCorreta( pokemon.name )

            setImagemVez( {  uri: linkImage }  )
        })

        pokemons.sort( () => .5 - Math.random() );

        apiPokemon.getPokemon(pokemons[0]).then(function (response) {
            let pokemon = response.data
            setOpcao1( pokemon.name )
        })

        apiPokemon.getPokemon(pokemons[1]).then(function (response) {
            let pokemon = response.data
            setOpcao2( pokemon.name )
        })

        apiPokemon.getPokemon(pokemons[2]).then(function (response) {
            let pokemon = response.data
            setOpcao3( pokemon.name )
        })

        apiPokemon.getPokemon(pokemons[3]).then(function (response) {
            let pokemon = response.data
            setOpcao4( pokemon.name )
        })

        // apiPokemon.getTop3().then(function (response) {
        //     let top3 = response.data
        //     console.log(top3)
        // })

        }, 2000);

        setTimeout(()=>{
            setDisabledBtn(false)
        }, 3000);

    }

    const escolha1 = () => { validarEscolha(opcao1)  }

    const escolha2 = () => { validarEscolha(opcao2) }

    const escolha3 = () => { validarEscolha(opcao3) }

    const escolha4 = () => { validarEscolha(opcao4) }

    const validarEscolha = (escolha) => {

        setOcultarResposta(false)

        /** Desativa o botão  */
        setDisabledBtn(true)

        if (escolha === opcaoCorreta) {

            usuario.pontos += 3
            usuario.acertos += 1

            setAcerto(true)
            setErro(false)
            setPular(false)

            setTimeout(()=>{
                novoJogo()
            }, 1000);

        } else {

            if(usuario.pontos >= 2 ){
                usuario.pontos -= 2
                usuario.erros += 1
            }else{
                usuario.pontos = 0
                usuario.erros += 1
            }

            setErro(true)
            setAcerto(false)
            setPular(false)

            setTimeout(()=>{
                novoJogo()
            }, 1000);
        }



    }

    const proximo = () => {

        if( usuario.pontos === 0){ return 0 }

        /** Desativa o botão  */
        setDisabledBtn(true)

        if(usuario.pontos >= 1 ){
            usuario.pontos -= 1
            usuario.jogosPulados += 1
        }

        setOcultarResposta(false)
        setPular(true)
        setErro(false)
        setAcerto(false)

        setTimeout(()=>{
            novoJogo()
        }, 1000)

        // setTimeout(()=>{
        //     setDisabledBtn(false)
        // }, 3000);

    }

   /* setTimeout(()=>{
        if( opcaoCorreta === '...'){
            novoJogo()
        }
    }, 100)*/

    const finalizarJogo = () => {
        return 0
    }

    const Separator = () => ( <View style={styles.separator} /> );

    const continuar = () =>{
        navigate('TelaInicial')
    }

    const sairJogo = () =>{
        navigate('TelaInicial')
    }

    /*
    * Alterando estrutura padrão para estrutura com dados dos vindos do bd
    *
    */

    /** Inicializa o jogo */
    useState(novoJogo);

    // ##########################################################################################
    // ##########################################################################################
    // ##########################################################################################
    // ##########################################################################################
    const padrao = <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>

                <Separator />
                <Separator />

                <View style={ styles.footerWrapper2 }>

                        <Text style={ styles.pontuacao }>
                            Pontos: {usuario.pontos}
                            { !ocultarResposta && acerto && <Text style={ styles.acertou }> +3 </Text> }
                            { !ocultarResposta && erro && <Text style={ styles.errou }> -2 </Text> }
                            { !ocultarResposta && pular && <Text style={ styles.errou }> -1 </Text> }


                        </Text>



                    <Text style={styles.textResposta}>

                        { !ocultarResposta && capitalizeFirstLetter(opcaoCorreta)+' ' }

                    </Text>


                </View>

                <Separator />
                <Separator />

                <Text style={styles.textRankingTitle}>
                    Melhores Jogadores:
                </Text>

                <Text style={styles.textRanking}>
                    {ranking1 && returnRaking(ranking1)}
                </Text>
                <Separator />

                <Text style={styles.textRanking}>
                    {ranking2 && returnRaking(ranking2)}
                </Text>
                <Separator />

                <Text style={styles.textRanking}>
                    {ranking3 && returnRaking(ranking3)}
                </Text>



                { !ocultarResposta &&
                <Image
                    style={styles.img}
                    source={imagemVez}
                    alt="Logo"
                />
                }

                { ocultarResposta &&
                <Image
                    style={styles.imgGray}
                    source={imagemVez}
                    alt="Logo"
                />
                }


                <Separator />
                <Separator />
                <Separator />


                <View style={ styles.footerWrapper }>

                    <TouchableHighlight style ={ styles.touchableHighlight } onPress={ escolha1 } disabled={disabledBtn}>
                        <Text style={ styles.touchableHighlightText }>
                            { capitalizeFirstLetter(opcao1) }
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style ={ styles.touchableHighlight } onPress={ escolha2 } disabled={disabledBtn}>
                        <Text style={ styles.touchableHighlightText }>
                            { capitalizeFirstLetter(opcao2) }
                        </Text>
                    </TouchableHighlight>

                </View>

                <Separator />


                <View style={ styles.footerWrapper }>

                    <TouchableHighlight style ={ styles.touchableHighlight } onPress={ escolha3 } disabled={disabledBtn}>
                        <Text style={ styles.touchableHighlightText }>
                            { capitalizeFirstLetter(opcao3) }
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style ={ styles.touchableHighlight } onPress={ escolha4 } disabled={disabledBtn}>
                        <Text style={ styles.touchableHighlightText }>
                            { capitalizeFirstLetter(opcao4) }
                        </Text>
                    </TouchableHighlight>

                </View>

                <Separator />
                <Separator />
                <Separator />
                <Separator />



                    <View style={ styles.footerWrapper }>


                        <TouchableHighlight style ={ styles.touchableHighlightPerson } onPress={ proximo } disabled={disabledBtn}>
                            <Text style={ styles.touchableHighlightTextPerson }>
                                Proximo
                            </Text>
                        </TouchableHighlight>

                        <TouchableHighlight style ={ styles.touchableHighlightPerson } onPress={ sairJogo }>
                            <Text style={ styles.touchableHighlightTextPerson }>
                                Sair
                            </Text>
                        </TouchableHighlight>

                    </View>


                <Separator />
                <Separator />

            </ImageBackground>
        </View>
    // ##########################################################################################

    return padrao
    // if( statusJogo === 0 ){
    //     return padrao
    // }else if( statusJogo === 1 ){
    //     return jogoGanho
    // }else if( statusJogo === 2 ){
    //     return jogoPerdido
    // }

}

Jogo.navigationOptions = {
    title: 'Qual é esse Pokemon ?',
    headerShown: false,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
        color: 'rgba(0,128,255,0.69)',
        textShadowColor:'rgba(0,128,255,0.24)',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius: 1,
    },
    img: {
        width: 300,
        height: 300,
        alignSelf: "flex-start",
        position: 'absolute',
        transform: [{ scaleX: -1 }]
    },
    imgGray: {
        width: 300,
        height: 300,
        alignSelf: "flex-start",
        position: 'absolute',
        tintColor: '#085d9e',
        transform: [{ scaleX: -1 }]

        //opacity: 0.9
        //tintColor: 'rgba(0,0,0,0.69)',
        //marginLeft: 50,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    tituloVencedor: {
        fontSize: 40,
        color: '#2bb407',
    },
    tituloPerdedor: {
        fontSize: 40,
        color: '#f11b1b',
    },
    descricao: {
        fontSize: 25,
        marginBottom: 20,
    },
    textResposta:{
        alignSelf: "flex-end",
        textAlign: 'right',
        flex: 1,
        marginLeft: 0,
        fontSize: 40,
        color: '#ffcb05',
        fontWeight: 'bold',
        textShadowColor:'#085d9e',
        textShadowOffset:{ width: 4, height: 4},
        textShadowRadius: 5,
        paddingLeft:30,
        paddingRight:30,
    },
    textRankingTitle:{
        alignSelf: "flex-end",
        textAlign: 'left',
        flex: 2,
        marginLeft: 0,
        fontSize: 25,
        color: '#ffcb05',
        fontWeight: 'bold',
        textShadowColor:'#085d9e',
        textShadowOffset:{ width: 4, height: 4},
        textShadowRadius: 5,
        paddingLeft:30,
        paddingRight:30,
    },
    textRanking:{
        alignSelf: "flex-end",
        textAlign: 'right',
        flex: 1,
        marginLeft: 0,
        fontSize: 20,
        color: '#ffcb05',
        fontWeight: 'bold',
        textShadowColor:'#085d9e',
        textShadowOffset:{ width: 4, height: 4},
        textShadowRadius: 5,
        paddingLeft:30,
        paddingRight:30,
        marginBottom:-15,
    },
    pontuacao:{
        alignSelf: 'flex-start',
        textAlign: 'center',
        color: '#085d9e',
        flex: 0,
        marginLeft: 0,
        fontSize: 50,
        fontWeight: 'bold',
        //textShadowColor:'#ffcb05',
        textShadowOffset:{ width: 1, height: 1},
        textShadowRadius: 1,
        paddingLeft:0,
        paddingRight:0,
    },
    total: {
        fontSize: 20,
        color: '#136bde',
    },
    acertou: {
        //alignSelf: "flex-start",
        //textAlign: 'left',
        //flex: 1,
        marginLeft: 0,
        //fontSize: 40,
        color: '#5eb20a',
        fontWeight: 'bold',
        textShadowColor:'#070000',
        textShadowOffset:{ width: 2, height: 2},
        textShadowRadius: 5,
        paddingLeft:30,
        paddingRight:30,
    },
    errou: {
        //alignSelf: "flex-start",
        //textAlign: 'left',
        //flex: 1,
        marginLeft: 0,
        //fontSize: 40,
        color: '#d91826',
        fontWeight: 'bold',
        textShadowColor:'#070000',
        textShadowOffset:{ width: 2, height: 2},
        textShadowRadius: 5,
        paddingLeft:30,
        paddingRight:30,
    },
    acertos: {
        fontSize: 20,
        color: '#33a107',
    },
    erros: {
        fontSize: 20,
        color: '#d00707',
    },
    touchableHighlightPerson: {
        //alignSelf: "flex-end",
        //position: 'relative',
        textAlign: 'center',
        marginRight: 10,
        marginLeft : 0,
        marginTop : 30,
        height: 'auto',
        width: 'auto',
        borderRadius: 12,
        borderColor: '#085d9e',
        borderWidth: 5,
        backgroundColor : '#ffcb05',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    touchableHighlightTextPerson: {
        margin: 10,
        color: '#085d9e',
        fontSize: 15,
    },

    touchableHighlight: {
        alignSelf: "flex-end",
        textAlign: 'center',
        marginRight: 0,
        marginLeft : 20,
        marginTop : 0,
        height: 'auto',
        maxWidth: 150,
        borderRadius: 12,
        borderColor: '#085d9e',
        borderWidth: 5,
        backgroundColor : '#ffcb05',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    touchableHighlightText: {
        margin: 15,
        color: '#085d9e',
        fontSize: 22,
    },
    footerWrapper: {
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        flexDirection:'row',
        marginRight: 20,
    },
    footerWrapper2: {
        flexWrap: 'wrap',
        flexDirection:'row',
        marginRight:20,
        marginLeft: 20,
    },
    //non-container style wrapper for scrollview
    footerWrapperNC: {
        flexDirection:'column',
    },
    column: {
        flexDirection:'column',
    },
});

export default Jogo
