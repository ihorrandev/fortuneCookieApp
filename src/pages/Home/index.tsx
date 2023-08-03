import React from "react";
import {View,Text, Image} from "react-native";
import { ButtonStyled, MainContainer, TextBase, Tittle } from "./styles";
import { StatusBar } from "expo-status-bar";
import theme from "../../style/theme/theme";

export function Home():React.JSX.Element{
    return(
        <MainContainer>
            <Tittle>Fortune Cookie</Tittle>
            <Image source={require('../../assets/img/biscoito.png')} style={{width: 200, height: 200}}/>
            <TextBase>Click on button to get a fortune mensage</TextBase>
            <TextBase></TextBase>
            <ButtonStyled>
                <Text style={{color: '#32a8a2', fontWeight: 'bold', fontSize: 20}}> Click here! </Text>
            </ButtonStyled>
            <ButtonStyled style= {{borderColor: '#636363'}}>
                <Text style={{color: '#636363', fontWeight: 'bold', fontSize: 20}}> Restore your message </Text>
            </ButtonStyled>
        </MainContainer>
    );
};