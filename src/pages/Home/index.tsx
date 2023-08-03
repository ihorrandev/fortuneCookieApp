import React, { useState } from "react";
import {View,Text, Image} from "react-native";
import { ButtonStyled, MainContainer, TextBase, TextMessage, Tittle } from "./styles";
import { StatusBar } from "expo-status-bar";
import theme from "../../style/theme/theme";

export function Home():React.JSX.Element{

    let phrases = [
        'A vida trará coisas boas se tiver paciência.',
        'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
        'Não compense na ira o que lhe falta na razão.',
        'Defeitos e virtudes são apenas dois lados da mesma moeda.',
        'A maior de todas as torres começa no solo.',
        'Não há que ser forte. Há que ser flexível.',
        'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
        'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
        'A juventude não é uma época da vida, é um estado de espírito.',
        'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
        'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
        'Siga os bons e aprenda com eles.',
        'Não importa o tamanho da montanha, ela não pode tapar o sol.',
        'O bom-senso vale mais do que muito conhecimento.',
        'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
        'São os nossos amigos que nos ensinam as mais valiosas lições.',
        'Aquele que se importa com o sentimento dos outros, não é um tolo.',
        'A adversidade é um espelho que reflete o verdadeiro eu.',
        'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
        'Uma bela flor é incompleta sem as suas folhas.',
        'Sem o fogo do entusiasmo, não há o calor da vitória.',
        'O riso é a menor distância entre duas pessoas.',
        'Os defeitos são mais fortes quando o amor é fraco.'
    ];

    const [getPhrases, setGetPhrases] = useState('');
    const [image, setImage] = useState(require('../../assets/img/biscoito.png'));

    function getMessage() {
        let numRandom = Math.floor(Math.random() * phrases.length);

        setGetPhrases(`"${phrases[numRandom]}"`);
        setImage(require('../../assets/img/biscoitoAberto.png'));
    };

    function deleteMessage() {
        setGetPhrases('')
        setImage(require('../../assets/img/biscoito.png'));
    }

    return(
        <MainContainer>
            <Tittle>Fortune Cookie</Tittle>
            <Image source={image} style={{width: 200, height: 200}}/>
            <TextMessage>{`${getPhrases}`}</TextMessage>
            <ButtonStyled onPress={getMessage}>
                <Text style={{color: '#32a8a2', fontWeight: 'bold', fontSize: 20}}> Click here! </Text>
            </ButtonStyled>
            <ButtonStyled style= {{borderColor: '#636363'}} onPress={deleteMessage}>
                <Text style={{color: '#636363', fontWeight: 'bold', fontSize: 20}}> Restore your message </Text>
            </ButtonStyled>
        </MainContainer>
    );
};