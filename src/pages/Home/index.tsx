import React from "react";
import {View,Text} from "react-native";
import { MainContainer, TextBase } from "./styles";
import { StatusBar } from "expo-status-bar";
import theme from "../../style/theme/theme";

export function Home():React.JSX.Element{
    return(
        <MainContainer>
            <TextBase>App fortune Cookie with TypeScript!</TextBase>
        </MainContainer>
    );
};