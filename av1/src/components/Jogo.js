import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, TextInput, Button, View } from 'react-native';
import Moment from 'react-moment';
import 'moment-timezone';
import ReactInterval from 'react-interval';


function Jogo(props) {
    const { navigate } = props.navigation

    const path = '../../assets/opcoes/'
    let dados = [{
                imagem: require(path + 'bolsonaro1.jpg'),
                opcaoCorreta: 'BolsoTrump',
                opcao1: 'Bolsonaro',
                opcao2: 'Lula',
                opcao3: 'BolsoTrump',
            },
            {
                imagem: require(path + 'lula1.jpg'),
                opcaoCorreta: 'Lula',
                opcao1: 'Marcondes',
                opcao2: 'Lula',
                opcao3: 'Juca',
            },
            /*{
           imagem: require( path + 'carmen-lucia1.jpeg' ),
           opcaoCorreta: 'Carmem Lucia',
           opcao1: 'Maria Joaquina',
           opcao2: 'Carmem Lucia',
           opcao3: 'Dona Edinalda',
       },
       {
           imagem: require( path + 'barack-obama.jpg' ),
           opcaoCorreta: 'Barack Obama',
           opcao1: 'Ozama Do Larque',
           opcao2: 'Casimiro',
           opcao3: 'Barack Obama',
       },
       {
           imagem: require( path + 'martin-luther-king-negro.jpg' ),
           opcaoCorreta: 'Martin Luther King',
           opcao1: 'Martine de Castro',
           opcao2: 'Luthero',
           opcao3: 'Martin Luther King',
       },
       {
           imagem: require( path + 'menino-ney.jpeg' ),
           opcaoCorreta: 'Menino Ney',
           opcao1: 'Nego Ney',
           opcao2: 'Neymar Junior',
           opcao3: 'Menino Ney',
       },
       {
           imagem: require( path + 'Xi_Jinping.jpg' ),
           opcaoCorreta: 'Xi Jinping',
           opcao1: 'Pyong Lee',
           opcao2: 'Xi Jinping',
           opcao3: 'Ursinho Pooh',
       },*/
            /*{
                imagem: require( path + '' ),
                opcaoCorreta: '',
                opcao1: '',
                opcao2: '',
                opcao3: '',
            },
            {
                imagem: require( path + '' ),
                opcaoCorreta: '',
                opcao1: '',
                opcao2: '',
                opcao3: '',
            },
            {
                imagem: require( path + '' ),
                opcaoCorreta: '',
                opcao1: '',
                opcao2: '',
                opcao3: '',
            },
            {
                imagem: require( path + '' ),
                opcaoCorreta: '',
                opcao1: '',
                opcao2: '',
                opcao3: '',
            },
            {
                imagem: require( path + '' ),
                opcaoCorreta: '',
                opcao1: '',
                opcao2: '',
                opcao3: '',
            },
            {
                imagem: require( path + '' ),
                opcaoCorreta: '',
                opcao1: '',
                opcao2: '',
                opcao3: '',
            },
            {
                imagem: require( path + '' ),
                opcaoCorreta: '',
                opcao1: '',
                opcao2: '',
                opcao3: '',
            },
            {
                imagem: require( path + '' ),
                opcaoCorreta: '',
                opcao1: '',
                opcao2: '',
                opcao3: '',
            },
            {
                imagem: require( path + '' ),
                opcaoCorreta: '',
                opcao1: '',
                opcao2: '',
                opcao3: '',
            },
            {
                imagem: require( path + '' ),
                opcaoCorreta: '',
                opcao1: '',
                opcao2: '',
                opcao3: '',
            },*/
        ]
        //dados = dados.sort(() => Math.random() - 0.5)

    const [score, setScore] = useState(0)
    const [acertos, setAcertos] = useState(0)
    const [erros, setErros] = useState(0)
    const [imagemVez, setImagemVez] = useState(dados[0]['imagem'])
    const [opcaoCorreta, setOpcaoCorreta] = useState(dados[0]['opcaoCorreta'])
    const [opcao1, setOpcao1] = useState(dados[0]['opcao1'])
    const [opcao2, setOpcao2] = useState(dados[0]['opcao2'])
    const [opcao3, setOpcao3] = useState(dados[0]['opcao3'])
    const [opcoesIndex, setOpcoesIndex] = useState(1)
    const [currentTime, setCurrentTime] = useState(120);
    const [tempoExibir, setTempoExibir] = useState('02:00');


    const novaOpcao = () => {

        setImagemVez(dados[opcoesIndex]['imagem'])
        setOpcaoCorreta(dados[opcoesIndex]['opcaoCorreta'])
        setOpcao1(dados[opcoesIndex]['opcao1'])
        setOpcao2(dados[opcoesIndex]['opcao2'])
        setOpcao3(dados[opcoesIndex]['opcao3'])

        if (opcoesIndex + 1 === dados.length) {
            setOpcoesIndex(0)
        } else {
            setOpcoesIndex(opcoesIndex + 1)
        }

    }

    const escolha1 = () => {
        validarEscolha(opcao1)
    }

    const escolha2 = () => {
        validarEscolha(opcao2)
    }

    const escolha3 = () => {
        validarEscolha(opcao3)
    }

    const validarEscolha = (escolha) => {

        if (finalizarJogo === 1) {
            return false
        }

        if (escolha === opcaoCorreta) {
            // if (score >= 0) {
            navigate('Acertou')
            setScore(score + 1)
            setAcertos(acertos + 1)

            // }
            novaOpcao()
        } else {
            // if (score > 0) {
            navigate('Errou')
            setScore(score - 1)
            setErros(erros + 1)

            // }
            novaOpcao()
        }

    }

    const finalizarJogo = () => {
        if (currentTime === 0) {
            navigate('JogoFinalizado')
            return 1
        }
        return 0
    }


    const Separator = () => ( <
        View style = { styles.separator }
        />
    );

    const atualizarTempo = () => {
        if (currentTime > 0) {
            setCurrentTime(currentTime - 1)
        } else {
            finalizarJogo()
        }
    }

    return (

        <
        View style = { styles.container } >

        <
        ReactInterval timeout = { 1000 }
        enabled = { true }
        callback = { atualizarTempo }
        />

        <
        Text style = {
            { fontSize: 20, marginBottom: 10, }
        } >
        Tempo Restante: { currentTime } <
        /Text>

        <
        Separator / >
        <
        Separator / >

        <
        Text style = {
            { fontSize: 20, marginBottom: 10, }
        } >
        Score: { score } - Acertos: { acertos } - Erros: { erros } <
        /Text>


        <
        Separator / >

        { /*<Button style={styles.btn} title={'Nova Opção'} onPress={ novaOpcao }/>*/ }

        <
        Separator / >
        <
        Separator / >

        <
        Image style = { styles.img }
        source = { imagemVez }
        alt = "Logo" /
        >

        <
        Separator / >
        <
        Separator / >

        <
        Text style = {
            { fontSize: 20, marginBottom: 10, }
        } >
        Quem é o Individuo <
        /Text>

        <
        Separator / >

        <
        Button style = { styles.btn }
        title = { opcao1 }
        onPress = { escolha1 }
        />

        <
        Separator / >

        <
        Button style = { styles.btn }
        title = { opcao2 }
        onPress = { escolha2 }
        />

        <
        Separator / >

        <
        Button style = { styles.btn }
        title = { opcao3 }
        onPress = { escolha3 }
        />


        { /*<Button title={'Ir Para Tela 1'} onPress={()=> navigate('TelaInicial') }/>*/ }

        <
        /View>

    )

}

Jogo.navigationOptions = {
    title: 'Jogo Do Adivinhe'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 200,
        height: 200,
    },
    btn: {

    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});





export default Jogo